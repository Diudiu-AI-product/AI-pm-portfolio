import { NavLink, useLocation } from "react-router-dom";

const pageNavItems = [
  { label: "首页", href: "/#home", hash: "#home" },
  { label: "代表项目", href: "/#work", hash: "#work" },
  { label: "Prompt Lab", href: "/#prompt-lab", hash: "#prompt-lab" },
  { label: "关于我", href: "/#about", hash: "#about" },
  { label: "联系我", href: "/#contact", hash: "#contact" }
] as const;

export function SiteHeader() {
  const { hash, pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <header className={`site-header${isHome ? " site-header--ghost" : ""}`}>
      <div className="site-frame site-header__inner">
        <NavLink className="brand-mark" to="/">
          <span className="brand-mark__name">周嘉立</span>
          <span className="brand-mark__role">AI 产品经理</span>
        </NavLink>

        <nav aria-label="主导航" className="site-nav">
          {pageNavItems.map((item) => {
            const isActive = pathname === "/" && (item.hash === "#home" ? hash === "" || hash === "#home" : hash === item.hash);

            return (
              <a key={item.href} className={`site-nav__link${isActive ? " is-active" : ""}`} href={item.href}>
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
