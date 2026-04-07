export type MobileNavActive = "home" | "solutions" | "products" | "technology" | "hedge-fund";

const NAV_ITEMS: { key: Exclude<MobileNavActive, "home">; href: string; label: string }[] = [
  { key: "solutions", href: "/solutions", label: "Solutions" },
  { key: "products", href: "/products", label: "Products" },
  { key: "technology", href: "/technology", label: "Technology" },
  { key: "hedge-fund", href: "/hedge-fund", label: "Live Hedge Fund Trading" },
];

type Props = { active: MobileNavActive };

/**
 * Same destinations as desktop `.nav-links` + Sign In / Try Now. Used with `#nav-burger` / `main.js`.
 */
export default function MobileNavDrawer({ active }: Props) {
  const signInHref = active === "home" ? "#" : "https://app.eagleailabs.com/auth/login";

  return (
    <div className="mobile-nav" id="mobile-nav">
      <ul>
        {NAV_ITEMS.map((item) => {
          const isCurrent = active === item.key;
          return (
            <li key={item.href}>
              <a
                href={item.href}
                className={isCurrent ? "mobile-nav-link is-active" : "mobile-nav-link"}
                {...(isCurrent ? { "aria-current": "page" as const } : {})}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="mobile-nav-btns">
        <a href={signInHref} className="btn btn-ghost mobile-nav-signin">
          Sign In
        </a>
        <a
          href="https://app.eagleailabs.com/auth/login"
          className="btn btn-primary mobile-nav-try"
        >
          Try Now
        </a>
      </div>
    </div>
  );
}
