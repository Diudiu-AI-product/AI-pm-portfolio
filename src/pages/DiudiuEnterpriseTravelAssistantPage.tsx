import { Link } from "react-router-dom";
import { SiteShell } from "../components/layout/SiteShell";
import { DecisionGrid } from "../components/ui/DecisionGrid";
import { MetricCard } from "../components/ui/MetricCard";
import { Section } from "../components/ui/Section";
import { caseStudies } from "../content/siteContent";

function DiudiuHeroVisual({ nodes }: { nodes: string[] }) {
  return (
    <div className="case-study-visual case-study-visual--travel" aria-hidden="true">
      <div className="case-study-visual__halo case-study-visual__halo--outer" />
      <div className="case-study-visual__halo case-study-visual__halo--inner" />
      <div className="case-study-visual__core">
        <span>差旅工作流</span>
        <strong>企业差旅助手</strong>
      </div>
      {nodes.map((node, index) => (
        <span key={node} className={`case-study-visual__node case-study-visual__node--${index + 1}`}>
          {node}
        </span>
      ))}
    </div>
  );
}

export default function DiudiuEnterpriseTravelAssistantPage() {
  const study = caseStudies["diudiu-enterprise-travel-assistant"];
  const capabilitySection = study.solutionSections.find((section) => section.title === "闭环能力设计");
  const stackSection = study.solutionSections.find((section) => section.title === "原型栈");

  return (
    <SiteShell>
      <main className="case-study-page case-study-page--travel-assistant">
        <section className="case-study-hero">
          <div className="site-frame case-study-hero__grid">
            <div className="case-study-hero__content">
              <p className="case-study-hero__eyebrow">{study.heroEyebrow}</p>
              <h1>{study.heroTitle}</h1>
              <p className="case-study-hero__subtitle">{study.heroSubtitle}</p>
              <p className="case-study-hero__summary">{study.heroSummary}</p>

              <div className="case-study-hero__meta">
                <span>{study.role}</span>
                <span>{study.timeline}</span>
                <span>{study.caseType}</span>
              </div>

              <div className="case-study-hero__quote">
                <p className="case-study-hero__quote-label">核心判断</p>
                <strong>制度回答只有能够继续推进到工作流里，才真正有用。</strong>
                <p>{study.backgroundIntro}</p>
              </div>
            </div>

            <div className="case-study-hero__visual-panel">
              <DiudiuHeroVisual nodes={study.capabilityScope} />
            </div>
          </div>

          <div className="site-frame case-study-hero__metric-strip">
            <div className="metric-grid">
              {study.metrics.map((metric) => (
                <MetricCard key={`diudiu-hero-${metric.label}`} metric={metric} />
              ))}
            </div>
          </div>
        </section>

        <Section
          eyebrow="背景"
          title="为什么它必须是一个工作流产品"
          intro="这个助手不能停在一次性回答上，还要把制度理解、差旅上下文和下一步行动串起来。"
        >
          <div className="case-study-section-grid">
            <article className="surface-card case-study-story-card">
              <p className="case-study-story-card__label">项目背景</p>
              <h3>从差旅提问到带制度依据的下一步建议</h3>
              <p>{study.backgroundBody}</p>
            </article>

            <div className="case-study-story-stack">
              {study.challenges.map((item) => (
                <article className="surface-card case-study-mini-card" key={item.title}>
                  <p className="case-study-mini-card__eyebrow">挑战</p>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section
          eyebrow="判断"
          title="产品判断"
          intro="这里的产品决策不是优化一个通用聊天体验，而是把多种差旅支持能力编排成一个可信的闭环。"
        >
          <DecisionGrid items={study.decisions} />
        </Section>

        {capabilitySection ? (
          <Section
            eyebrow="系统"
            title="闭环能力设计"
            intro="这五个能力共同定义了产品闭环，让这个助手看起来更像一个可执行工具，而不是泛化聊天框。"
          >
            <DecisionGrid items={capabilitySection.items} />
          </Section>
        ) : null}

        {stackSection ? (
          <Section
            eyebrow="架构"
            title="原型栈"
            intro="这个原型保持了可运行和产品化形态，让场景能够跨界面、编排、检索和附件解析被完整演示。"
          >
            <DecisionGrid items={stackSection.items} />
          </Section>
        ) : null}

        <Section
          eyebrow="结果"
          title="结果与验证"
          intro="这个项目的价值在于端到端原型完成度：工作流能跑起来，回答格式带依据，产品边界也表达得足够清楚。"
        >
          <div className="metric-grid">
            {study.metrics.map((metric) => (
              <MetricCard key={`diudiu-outcome-${metric.label}`} metric={metric} />
            ))}
          </div>
          <div className="outcome-list">
            {study.outcomes.map((item) => (
              <article className="surface-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="职责" title="我负责的部分">
          <DecisionGrid items={study.roleBlocks} />
        </Section>

        <Section eyebrow="复盘" title="我的收获">
          <DecisionGrid items={study.learning} />
        </Section>

        <Section eyebrow="返回" title="回到首页">
          <div className="surface-card surface-card--wide case-study-return">
            <p>如果你想回到首页继续浏览代表项目，可以直接从这里跳转。</p>
            <Link className="text-link" to="/#work">
              返回首页
            </Link>
          </div>
        </Section>
      </main>
    </SiteShell>
  );
}
