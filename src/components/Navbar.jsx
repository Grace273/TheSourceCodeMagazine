import logoImg from "../assets/images/SC_logo.png";

const DEFAULT_LINKS = [
  // { label: "Home", href: "/#home" },
  // { label: "About", href: "/#about" },
  { label: "Substack", href: "/#substack" },
  { label: "Get Involved", href: "/#get-involved" },
];

export default function Navbar({ siteName = "CS Magazine", links = DEFAULT_LINKS }) {
  return (
    <header className="cs-magazine fixed nav-position z-50 font-sans text-white">
      <nav className="flex nav-wrap items-center justify-between gap-6 rounded-pill bg-nav border-subtle p-nav" aria-label="Main navigation">
        <a className="shrink-0 link-hover" href="/#home" aria-label={`${siteName} home`}>
          <img src={logoImg} alt={siteName} className="nav-logo" />
        </a>
        <ul className="flex nav-links items-center gap-nav list-none m-0 p-0">
          {links.map(({ label, href }, index) => (
            <li key={href}>
              <a className={index === links.length - 1 ? "nav-cta" : "nav-link link-hover"} href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
