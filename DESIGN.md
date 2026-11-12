# eagleailabs.com closing notice: design record (12 Nov 2026)

The whole site is now one page: the closure notice, a stake checker and the unstake steps. Every product, pricing, blog and terms page has been removed.

## 1. Truth
- Who it is for: EAI holders who still have tokens in one of the two staking contracts on Base. The Telegram group is closed, so this page is the only place they can go.
- The one job: tell them the company has closed, and get their staked EAI back to them without help from anyone.
- What only this site has: two staking contracts (old 0x18f8…036E, where unstake is function 13; new proxy 0x8D82…F0B9, where unstake is function 18 under Write as Proxy), the tdEAI receipt tokens, and the wind-down announced on 4 Aug 2026.

## 2. The default design, now banned
The obvious version: dark navy crypto page, Inter, a cyan gradient, a hero saying "We're closing", step cards, an FAQ accordion and a socials footer. That is the old site with a new headline.

## 3. Sources
- Client world: a product recall notice, the last document a responsible company prints. It says what happened, which items are affected (here, the contract addresses) and exactly what to do. Also BaseScan's own Write Contract form, the screen holders will actually use.
- Outside reference: a UK Gazette-style public notice, which is plain, dated and numbered.

## 4–7. Direction chosen
Recall notice. Instead of "check your batch number" there is "check your wallet": a lookup that reads the chain and tells each holder exactly what to type. It sits on light paper with one Eagle-blue spot colour and one condensed heading face. Nothing animates. The page is meant to read as a document, not a brand page.

## 8. Concept sentence
It reads like a product recall notice because that is what it is: what happened, which contracts are affected, and exactly what each holder types to get their tokens back.

## 9. System
- Type:
  - Archivo, self-hosted by next/font. It has a width axis, so headings use wdth 68 at weight 800 (the condensed recall-notice head) and body text uses wdth 100 at weight 400. One family covers both.
  - Sometype Mono for addresses, function numbers and wei amounts only.
- Colour: monochrome plus one spot colour.
  - --paper oklch(0.985 0.005 260): white tinted towards the logo blue.
  - --ink oklch(0.23 0.035 262): near-black taken from the logo's deep blue.
  - --spot #1455e6: the left stop of the Eagle logo gradient, used only for the notice frame and links.
  - --warn oklch(0.5 0.17 35): used only for the scam warning and revert messages.
- Radius: 0 on the notice frame and tables, 3px on inputs and buttons.
- Signature component: the stake checker. It reads both contracts with eth_call, then simulates unstake(amount) from the holder's own address. It tells them whether the call would go through before they sign anything. It is read-only and needs no wallet connection.
- Big interaction: none beyond the checker.
- No dark mode. This is a one-page notice for a general audience, and light is the default.

## 10. Swap test
A competitor's logo on this page would be wrong. The page is made of Eagle's contract addresses, function numbers and dates.
