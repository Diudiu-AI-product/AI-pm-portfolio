import { Link } from "react-router-dom";
import { SiteShell } from "../components/layout/SiteShell";

export default function NotFoundPage() {
  return (
    <SiteShell>
      <main className="site-frame not-found">
        <p className="section-heading__eyebrow">404</p>
        <h1>这个页面还没有准备好</h1>
        <p>先回到首页继续看完整内容。</p>
        <div className="hero__actions">
          <Link className="button button--primary" to="/">
            回到首页
          </Link>
        </div>
      </main>
    </SiteShell>
  );
}
