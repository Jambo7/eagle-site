/* eslint-disable @next/next/no-img-element */
import StakeChecker from "./stake-checker";
import { EAI_TOKEN, NEW_STAKING, OLD_STAKING } from "./contracts";

const CONTACT = "hello@eagleailabs.com";

export default function ClosureNotice() {
  return (
    <main className="sheet">
      <header className="letterhead">
        <img src="/logo.png" alt="Eagle AI Labs" width={700} height={101} />
        <time dateTime="2026-08-04">4 August 2026</time>
      </header>

      <article className="notice" aria-labelledby="title">
        <p className="notice-label">Closure notice</p>
        <div className="notice-body">
          <h1 id="title">Eagle AI Labs has closed</h1>
          <p className="lede">
            We announced the wind-down of Eagle AI Labs on 4 August 2026. Our products and services are no
            longer available. This page stays up so EAI holders can take back any tokens they still have
            staked.
          </p>
        </div>
      </article>

      <section aria-labelledby="means">
        <h2 id="means">What this means for you</h2>
        <ul className="facts">
          <li>Staking has ended. The staking contracts stay on Base only so you can unstake.</li>
          <li>
            Your staked EAI is still yours. You can unstake it yourself at any time, straight from the contract
            on Base. You do not need us or anyone else to do it.
          </li>
          <li>The EAI token stays on Base. We no longer run, support or promote it.</li>
          <li>Nothing on this page is financial advice.</li>
        </ul>
      </section>

      <section aria-label="Stake checker">
        <StakeChecker />
        <noscript>
          <p className="hint">The checker needs JavaScript. The steps below work without it.</p>
        </noscript>
      </section>

      <section aria-labelledby="how">
        <h2 id="how">How to unstake on BaseScan</h2>
        <ol className="steps">
          <li>
            Find which contract holds your stake. The checker above tells you. If you are not sure, try the
            current contract first.
          </li>
          <li>
            Open the contract on BaseScan:{" "}
            <a href={NEW_STAKING.url} target="_blank" rel="noopener noreferrer">
              current contract, {NEW_STAKING.tab} tab
            </a>{" "}
            or{" "}
            <a href={OLD_STAKING.url} target="_blank" rel="noopener noreferrer">
              original contract, {OLD_STAKING.tab} tab
            </a>
            .
          </li>
          <li>
            Select <strong>Connect to Web3</strong> and connect the wallet you staked from, on the Base network.
            You need a little ETH on Base to pay the network fee.
          </li>
          <li>
            Open <strong>unstake</strong>: function {NEW_STAKING.unstakeFn} on the current contract, function{" "}
            {OLD_STAKING.unstakeFn} on the original.
          </li>
          <li>
            In <span className="mono">amount</span>, enter how much to unstake in wei: the EAI amount followed by
            18 zeros. For example, 600 EAI is <code>600000000000000000000</code>. The checker gives you the exact
            number.
          </li>
          <li>
            Select <strong>Write</strong> and confirm in your wallet. Your EAI comes back to your wallet in the
            same transaction, and the matching tdEAI receipt tokens are burned.
          </li>
        </ol>
        <div className="note">
          <p>
            You need the tdEAI receipt tokens you got when you staked, in the same wallet. You can unstake up to
            the amount of tdEAI you hold.
          </p>
          <p>
            Current contract only: if BaseScan shows <span className="mono">rollover required</span>, run function{" "}
            {NEW_STAKING.rolloverFn}, <strong>rollover</strong>, with your own wallet address, then run unstake
            again.
          </p>
        </div>
      </section>

      <section aria-labelledby="contracts">
        <h2 id="contracts">The contracts</h2>
        <p className="hint">All on Base. Check the address in BaseScan matches before you sign anything.</p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Contract</th>
                <th scope="col">Address</th>
                <th scope="col">Unstake</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Staking (current)</td>
                <td className="addr mono">{NEW_STAKING.address}</td>
                <td>
                  Function {NEW_STAKING.unstakeFn}, {NEW_STAKING.tab}
                </td>
              </tr>
              <tr>
                <td>Staking (original)</td>
                <td className="addr mono">{OLD_STAKING.address}</td>
                <td>
                  Function {OLD_STAKING.unstakeFn}, {OLD_STAKING.tab}
                </td>
              </tr>
              <tr>
                <td>EAI token</td>
                <td className="addr mono">{EAI_TOKEN}</td>
                <td>Not applicable</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="warning" aria-labelledby="safe">
        <h2 id="safe">Stay safe</h2>
        <ul className="facts">
          <li>We will never message you first, on Telegram, X or anywhere else.</li>
          <li>We will never ask for your seed phrase or private key, or ask you to connect your wallet to another site.</li>
          <li>
            There is no migration, airdrop, new token or claim. Anyone offering one in our name is a scammer.
          </li>
          <li>The only links you need are the BaseScan links on this page.</li>
        </ul>
      </section>

      <footer>
        <p>
          Eagle AI Labs FZCO, Dubai, United Arab Emirates. Questions about unstaking:{" "}
          <a href={`mailto:${CONTACT}`}>{CONTACT}</a>
        </p>
        <p>
          This site sets no cookies and runs no analytics. If you use the stake checker, the wallet address you
          enter is sent to the public Base network endpoint (mainnet.base.org, run by Coinbase) to read the
          contracts. We do not store it.
        </p>
      </footer>
    </main>
  );
}
