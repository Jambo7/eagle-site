/** Contract facts used across the notice. Checked on Base on 12 Nov 2026. */
export const EAI_TOKEN = "0x6797B6244fA75F2e78cDFfC3a4eb169332b730cc";

export const NEW_STAKING = {
  name: "Staking contract (current)",
  short: "current",
  address: "0x8D827f9ff8138dC9C4a2ff877a6027FF749CF0B9",
  receipt: "0x656636C6DeB132ba5856DF3F5976dE9c26502aB6",
  tab: "Write as Proxy",
  unstakeFn: 18,
  rolloverFn: 10,
  url: "https://basescan.org/address/0x8D827f9ff8138dC9C4a2ff877a6027FF749CF0B9#writeProxyContract",
} as const;

export const OLD_STAKING = {
  name: "Staking contract (original)",
  short: "original",
  address: "0x18f8D9193af3bbE7f79100DafC0aa40421f8036E",
  receipt: "0x4342f4BC5375eCaF56fDf8b5294dE5DbC0fBe889",
  tab: "Write Contract",
  unstakeFn: 13,
  url: "https://basescan.org/address/0x18f8D9193af3bbE7f79100DafC0aa40421f8036E#writeContract",
} as const;
