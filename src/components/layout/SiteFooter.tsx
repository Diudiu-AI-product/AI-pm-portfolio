export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="site-frame site-footer__inner">
        <div>
          <p className="site-footer__eyebrow">联系我</p>
          <p className="site-footer__copy">
            如果你正在寻找既能理解大模型能力，又能推进真实业务落地的 AI 产品经理，欢迎联系我。
          </p>
        </div>
        <div className="site-footer__links">
          <a href="mailto:1024557279@qq.com">1024557279@qq.com</a>
          <a href="tel:15968795861">15968795861</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            简历 PDF
          </a>
        </div>
      </div>
    </footer>
  );
}
