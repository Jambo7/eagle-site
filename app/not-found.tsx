/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
export default function NotFound() {
  return (
    <main className="sheet">
      <header className="letterhead">
        <img src="/logo.png" alt="Eagle AI Labs" width={700} height={101} />
      </header>
      <article className="notice" aria-labelledby="title">
        <p className="notice-label">Page removed</p>
        <div className="notice-body">
          <h1 id="title">This page has gone</h1>
          <p className="lede">
            Eagle AI Labs has closed and this page was taken down. If you still have EAI staked, the closure
            notice explains how to unstake it yourself.
          </p>
          <p className="lede">
            <Link href="/">Read the closure notice and unstake steps</Link>
          </p>
        </div>
      </article>
    </main>
  );
}
