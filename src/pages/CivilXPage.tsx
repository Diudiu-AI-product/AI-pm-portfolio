import { Link } from "react-router-dom";
import { SiteShell } from "../components/layout/SiteShell";
import { MetricCard } from "../components/ui/MetricCard";
import { Section } from "../components/ui/Section";
import { caseStudies } from "../content/siteContent";

function CivilXHeroVisual({ nodes }: { nodes: string[] }) {
  return (
    <div className="case-study-visual" aria-hidden="true">
      <div className="case-study-visual__halo case-study-visual__halo--outer" />
      <div className="case-study-visual__halo case-study-visual__halo--inner" />
      <div className="case-study-visual__core">
        <span>AI Workflow</span>
        <strong>Complex Task Solver</strong>
      </div>
      {nodes.map((node, index) => (
        <span key={node} className={`case-study-visual__node case-study-visual__node--${index + 1}`}>
          {node}
        </span>
      ))}
    </div>
  );
}

export default function CivilXPage() {
  const study = caseStudies["civil-x"];
  const capabilityNodes = study.capabilityScope;
  const systemCards = study.solutionSections.flatMap((section) => section.items);

  return (
    <SiteShell>
      <main className="case-study-page case-study-page--civilx">
        <section className="case-study-hero">
          <div className="site-frame case-study-hero__grid">
            <div className="case-study-hero__content">
              <p className="case-study-hero__eyebrow">{study.heroEyebrow}</p>
              <h1>{study.heroTitle}</h1>
              <p className="case-study-hero__subtitle">{study.heroSubtitle}</p>
              <p className="case-study-hero__summary">{study.heroSummary}</p>

              <div className="case-study-hero__meta">
                <span>Product Manager</span>
                <span>{study.timeline}</span>
                <span>{study.caseType}</span>
              </div>

              <div className="case-study-hero__quote">
                <p className="case-study-hero__quote-label">Core Judgement</p>
                <strong>This was not just a QA problem. It required a controllable workflow for engineering reasoning.</strong>
                <p>{study.backgroundIntro}</p>
              </div>
            </div>

            <div className="case-study-hero__visual-panel">
              <CivilXHeroVisual nodes={capabilityNodes} />
            </div>
          </div>

          <div className="site-frame case-study-hero__metric-strip">
            <div className="metric-grid">
              {study.metrics.map((metric) => (
                <MetricCard key={`civilx-hero-${metric.label}`} metric={metric} />
              ))}
            </div>
          </div>
        </section>

        <Section
          eyebrow="Framing"
          title="Why This Had To Be A Workflow Product"
          intro="复杂工程场景的关键，不是让模型像专家一样回答，而是让它在长文档、专业知识和多步推理里依然稳定输出可验证结果。"
        >
          <div className="case-study-section-grid">
            <article className="surface-card case-study-story-card">
              <p className="case-study-story-card__label">Background</p>
              <h3>从知识问答升级为复杂任务闭环求解</h3>
              <p>{study.backgroundBody}</p>
            </article>

            <div className="case-study-story-stack">
              {study.challenges.map((item) => (
                <article className="surface-card case-study-mini-card" key={item.title}>
                  <p className="case-study-mini-card__eyebrow">Challenge</p>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section
          eyebrow="Judgement"
          title="My Product Framing"
          intro="我在这个项目里的核心工作，是先判断问题卡在文档、检索、推理还是对齐，再决定哪些 AI 能力要被产品化为稳定链路。"
        >
          <div className="case-study-card-grid">
            {study.decisions.map((item) => (
              <article className="surface-card case-study-decision-card" key={item.title}>
                <p className="case-study-decision-card__index">Decision</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="System"
          title="Closed-Loop System Design"
          intro="最终设计不是单一模型能力，而是一条从文档结构化抽取、证据检索、复杂推理到评测反馈持续迭代的闭环系统。"
        >
          <div className="case-study-system-grid">
            {systemCards.map((item) => (
              <article className="surface-card case-study-system-card" key={item.title}>
                <p className="case-study-system-card__eyebrow">Module</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Results"
          title="Outcome And Evidence"
          intro="结果不只体现在单点指标上，更体现在检索可信度、复杂推理准确性和模型可持续迭代能力上。"
        >
          <div className="metric-grid">
            {study.metrics.map((metric) => (
              <MetricCard key={`civilx-outcome-${metric.label}`} metric={metric} />
            ))}
          </div>

          <div className="case-study-result-grid">
            {study.outcomes.map((item) => (
              <article className="surface-card case-study-result-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Ownership" title="What I Owned">
          <div className="case-study-card-grid">
            {study.roleBlocks.map((item) => (
              <article className="surface-card case-study-decision-card" key={item.title}>
                <p className="case-study-decision-card__index">Ownership</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Reflection" title="What I Learned">
          <div className="case-study-card-grid">
            {study.learning.map((item) => (
              <article className="surface-card case-study-decision-card" key={item.title}>
                <p className="case-study-decision-card__index">Reflection</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Back" title="Return">
          <div className="surface-card surface-card--wide case-study-return">
            <p>如果你想回到首页继续看项目卡片，可以直接返回首页。</p>
            <Link className="text-link" to="/#work">
              返回首页
            </Link>
          </div>
        </Section>
      </main>
    </SiteShell>
  );
}
