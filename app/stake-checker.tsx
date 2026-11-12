"use client";

import { useState, type FormEvent } from "react";
import { NEW_STAKING, OLD_STAKING } from "./contracts";

const RPC = "https://mainnet.base.org";
const ZERO = BigInt(0);
const WEI = BigInt("1000000000000000000"); // 10^18, EAI has 18 decimals

// Function selectors (keccak256 of the signature, first 4 bytes).
const SEL = {
  userInfo: "0x1959a002", // userInfo(address)            original contract
  getStakedBalance: "0x3a02a42d", // getStakedBalance(address) current contract
  pendingStake: "0xb2d44ff4", // pendingStake(address)
  lastProcessedEpoch: "0x99814308", // lastProcessedEpoch(address)
  userLockedAtEpoch: "0x1f5cf9fe", // userLockedAtEpoch(address,uint256)
  balanceOf: "0x70a08231", // balanceOf(address)
  unstake: "0x2e17de78", // unstake(uint256)
};

type Result = {
  key: "new" | "old";
  name: string;
  fn: number;
  tab: string;
  url: string;
  staked: bigint;
  receipt: bigint;
  amount: bigint;
  simulation: "ok" | "skipped" | string;
};

const pad = (hex: string) => hex.replace(/^0x/, "").toLowerCase().padStart(64, "0");
const word = (data: string, i: number) => BigInt("0x" + (data.slice(2 + i * 64, 2 + (i + 1) * 64) || "0"));
const max = (a: bigint, b: bigint) => (a > b ? a : b);
const min = (a: bigint, b: bigint) => (a < b ? a : b);

async function ethCall(to: string, data: string, from?: string): Promise<string> {
  const res = await fetch(RPC, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "eth_call",
      params: [{ to, data, ...(from ? { from } : {}) }, "latest"],
    }),
  });
  if (!res.ok) throw new Error(`network ${res.status}`);
  const json = await res.json();
  if (json.error) {
    const err = new Error(String(json.error.message || "execution reverted"));
    err.name = "Revert";
    throw err;
  }
  return json.result as string;
}

function formatEai(wei: bigint): string {
  const whole = wei / WEI;
  const frac = (wei % WEI).toString().padStart(18, "0").slice(0, 4).replace(/0+$/, "");
  const wholeStr = new Intl.NumberFormat("en-GB").format(whole);
  return frac ? `${wholeStr}.${frac}` : wholeStr;
}

function plainReason(message: string): string {
  const m = message.replace(/^execution reverted:?\s*/i, "").trim();
  if (/rollover required/i.test(m)) return "rollover required";
  if (/insufficient tdEAI/i.test(m)) return "not enough tdEAI receipt tokens in this wallet";
  if (/paused|not active/i.test(m)) return "the contract is paused";
  return m || "the contract rejected the call";
}

async function checkNew(addr: string): Promise<Result> {
  const a = pad(addr);
  const [bal, pending, last, receipt] = await Promise.all([
    ethCall(NEW_STAKING.address, SEL.getStakedBalance + a),
    ethCall(NEW_STAKING.address, SEL.pendingStake + a),
    ethCall(NEW_STAKING.address, SEL.lastProcessedEpoch + a),
    ethCall(NEW_STAKING.receipt, SEL.balanceOf + a),
  ]);
  const lastEpoch = word(last, 0);
  let lockedAtLast = ZERO;
  if (lastEpoch > ZERO) {
    lockedAtLast = word(
      await ethCall(NEW_STAKING.address, SEL.userLockedAtEpoch + a + pad(lastEpoch.toString(16))),
      0,
    );
  }
  const staked = max(word(bal, 2), word(pending, 0) + lockedAtLast);
  return finish("new", addr, staked, word(receipt, 0));
}

async function checkOld(addr: string): Promise<Result> {
  const a = pad(addr);
  const [info, receipt] = await Promise.all([
    ethCall(OLD_STAKING.address, SEL.userInfo + a),
    ethCall(OLD_STAKING.receipt, SEL.balanceOf + a),
  ]);
  const staked = word(info, 0) + word(info, 1); // lockedStake + pendingStake
  return finish("old", addr, staked, word(receipt, 0));
}

async function finish(key: "new" | "old", addr: string, staked: bigint, receipt: bigint): Promise<Result> {
  const c = key === "new" ? NEW_STAKING : OLD_STAKING;
  const amount = min(staked, receipt);
  let simulation: Result["simulation"] = "skipped";
  if (amount > ZERO) {
    try {
      await ethCall(c.address, SEL.unstake + pad(amount.toString(16)), addr);
      simulation = "ok";
    } catch (e) {
      simulation = e instanceof Error && e.name === "Revert" ? plainReason(e.message) : "could not be tested just now";
    }
  }
  return { key, name: c.name, fn: c.unstakeFn, tab: c.tab, url: c.url, staked, receipt, amount, simulation };
}

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      className="copy"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch {
          /* clipboard blocked: the number is still visible to select */
        }
      }}
    >
      {copied ? "Copied" : "Copy amount"}
    </button>
  );
}

function ResultBlock({ r }: { r: Result }) {
  if (r.staked === ZERO) {
    return (
      <div className="result">
        <h3>{r.name}</h3>
        <p>Nothing staked from this wallet.</p>
      </div>
    );
  }
  return (
    <div className="result">
      <h3>{r.name}</h3>
      <p>
        Staked: <strong className="mono">{formatEai(r.staked)} EAI</strong>
      </p>
      {r.receipt < r.staked && (
        <p className="status-bad">
          This wallet holds {formatEai(r.receipt)} tdEAI receipt tokens. You can only unstake as much as the
          tdEAI you hold, so move the rest of your tdEAI back to this wallet first.
        </p>
      )}
      {r.amount > ZERO && (
        <>
          <p>
            Paste this into <span className="mono">amount</span> under function {r.fn}, unstake (on the{" "}
            <a href={r.url} target="_blank" rel="noopener noreferrer">
              {r.tab} tab on BaseScan
            </a>
            ):
          </p>
          <div className="amount">
            <code>{r.amount.toString()}</code>
            <CopyButton value={r.amount.toString()} />
          </div>
          {r.simulation === "ok" && (
            <p className="status-ok">Tested against the contract just now: this unstake would go through.</p>
          )}
          {r.simulation === "rollover required" && (
            <p className="status-bad">
              The contract says rollover required. On BaseScan, run function {NEW_STAKING.rolloverFn}, rollover,
              with your own wallet address first, then run unstake.
            </p>
          )}
          {r.simulation !== "ok" && r.simulation !== "skipped" && r.simulation !== "rollover required" && (
            <p className="status-bad">Tested against the contract just now: it would fail ({r.simulation}).</p>
          )}
        </>
      )}
    </div>
  );
}

export default function StakeChecker() {
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [results, setResults] = useState<Result[] | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const addr = address.trim();
    setResults(null);
    if (!/^0x[0-9a-fA-F]{40}$/.test(addr)) {
      setError("Enter a wallet address that starts with 0x and is 42 characters long");
      return;
    }
    setError("");
    setBusy(true);
    try {
      setResults(await Promise.all([checkNew(addr), checkOld(addr)]));
    } catch {
      setError("Base could not be reached just now. Try again in a minute, or follow the steps below.");
    } finally {
      setBusy(false);
    }
  }

  const nothing = results && results.every((r) => r.staked === ZERO);

  return (
    <form className="checker" onSubmit={onSubmit} noValidate aria-labelledby="checker-title">
      <h2 id="checker-title">Check your stake</h2>
      <p className="hint">
        Read-only. It reads both staking contracts on Base and tests the unstake for you. You do not connect a
        wallet or sign anything here.
      </p>
      <label htmlFor="wallet">Your wallet address</label>
      <div className="checker-row">
        <input
          id="wallet"
          name="wallet"
          type="text"
          inputMode="text"
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          enterKeyHint="search"
          placeholder="0x…"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? "wallet-error" : undefined}
        />
        <button type="submit" disabled={busy}>
          {busy ? "Checking…" : "Check my stake"}
        </button>
      </div>
      {error && (
        <p className="error" id="wallet-error" role="alert">
          {error}
        </p>
      )}
      <div aria-live="polite">
        {results && !nothing && results.map((r) => <ResultBlock key={r.key} r={r} />)}
        {nothing && (
          <div className="result">
            <p>
              This wallet has nothing staked in either contract. If you staked from another wallet, check that
              address.
            </p>
          </div>
        )}
      </div>
    </form>
  );
}
