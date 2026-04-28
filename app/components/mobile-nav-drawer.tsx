export type MobileNavActive =
  | "home"
  | "solutions"
  | "products"
  | "pricing"
  | "blog"
  | "about"
  | "technology"
  | "hedge-fund"
  | "legal";

type NavItem = {
  key: Exclude<MobileNavActive, "home">;
  href: string;
  label: string;
  external?: boolean;
};

/**
 * Mirrors the desktop nav order: Claw, AI Solutions, Pricing, Blog, About.
 * All five pages are now rebuilt internally under the CLAW Suite design
 * language, no more external hops for top-level navigation.
 */
const NAV_ITEMS: NavItem[] = [
  { key: "products", href: "/products", label: "Claw" },
  { key: "solutions", href: "/solutions", label: "AI Solutions" },
  { key: "pricing", href: "/pricing", label: "Pricing" },
  { key: "blog", href: "/blog", label: "Blog" },
  { key: "about", href: "/about", label: "About" },
];

type Props = { active: MobileNavActive };

/**
 * Same destinations as desktop `.nav-links` + Sign In / Get Started. Used with `#nav-burger` / `main.js`.
 */
export default function MobileNavDrawer({ active }: Props) {
  return (
    <div className="mobile-nav" id="mobile-nav">
      <ul>
        {NAV_ITEMS.map((item) => {
          const isCurrent = !item.external && active === item.key;
          return (
            <li key={`${item.label}-${item.href}`}>
              <a
                href={item.href}
                className={isCurrent ? "mobile-nav-link is-active" : "mobile-nav-link"}
                {...(isCurrent ? { "aria-current": "page" as const } : {})}
                {...(item.external ? { target: "_blank", rel: "noopener" } : {})}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="mobile-nav-btns">
        <a
          href="https://app.eagleailabs.com/auth/login"
          className="btn btn-ghost mobile-nav-signin"
        >
          Sign In
        </a>
        <a
          href="https://app.eagleailabs.com/auth/login"
          className="btn btn-primary mobile-nav-try"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}
