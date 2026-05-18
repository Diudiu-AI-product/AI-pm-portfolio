import { Link } from "react-router-dom";
import { SiteShell } from "../components/layout/SiteShell";
import { DecisionGrid } from "../components/ui/DecisionGrid";
import { MetricCard } from "../components/ui/MetricCard";
import { Section } from "../components/ui/Section";
import { caseStudies } from "../content/siteContent";

export default function EngineeringDataOpsPage() {
  const study = caseStudies["engineering-data-ops"];

  return (
    <SiteShell>
      <main>
        <section className="case-hero case-hero--data-ops">
          <div className="site-frame case-hero__grid">
            <div>
              <p className="case-hero__eyebrow">{study.heroEyebrow}</p>
              <h1>{study.heroTitle}</h1>
              <p className="case-hero__subtitle">{study.heroSubtitle}</p>
              <p className="case-hero__summary">{study.heroSummary}</p>
              <div className="case-hero__meta">
                <span>角色：{study.role}</span>
                <span>周期：{study.timeline}</span>
                <span>类型：{study.caseType}</span>
              </div>
            </div>
            <div className="case-hero__panel">
              <div className="case-hero__panel-top">
                <p className="case-hero__panel-eyebrow">Core Results</p>
                <div className="case-hero__panel-metrics">
                  {study.metrics.slice(0, 4).map((metric) => (
                    <MetricCard key={`hero-${metric.label}`} metric={metric} />
                  ))}
                </div>
              </div>
              <div className="case-hero__panel-bottom">
                <p className="case-hero__panel-eyebrow">Capability Scope</p>
                <div className="case-hero__panel-tags">
                  {study.capabilityScope.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="site-frame metric-grid case-hero__metric-strip">
            {study.metrics.map((metric) => (
              <MetricCard key={metric.label} metric={metric} />
            ))}
          </div>
        </section>

        <Section eyebrow="Background" title="项目背景" intro={study.backgroundIntro}>
          <div className="surface-card surface-card--wide">
            <p>{study.backgroundBody}</p>
          </div>
        </Section>

        <Section eyebrow="Challenges" title="Why This Problem Was Hard">
          <DecisionGrid items={study.challenges} />
        </Section>

        <Section eyebrow="Decisions" title="My Product Decisions">
          <DecisionGrid items={study.decisions} />
        </Section>

        {study.solutionSections.map((section) => (
          <Section key={section.title} eyebrow="Solution" title={section.title}>
            <DecisionGrid items={section.items} />
          </Section>
        ))}

        <Section
          eyebrow="Outcomes"
          title="Outcomes"
          intro="这个项目的价值，不只是补一个智能取数入口，而是把高变更业务的系统适配、决策响应和迁移上线都放进可持续优化的产品链路。"
        >
          <div className="metric-grid">
            {study.metrics.map((metric) => (
              <MetricCard key={`outcome-${metric.label}`} metric={metric} />
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

        <Section eyebrow="Role" title="My Role">
          <DecisionGrid items={study.roleBlocks} />
        </Section>

        <Section eyebrow="Reflection" title="What I Learned">
          <DecisionGrid items={study.learning} />
        </Section>

        <Section eyebrow="Back" title="Return">
          <div className="surface-card surface-card--wide">
            <p>如果你想回到首页继续浏览代表项目和 Prompt Lab，可以直接返回首页。</p>
            <Link className="text-link" to="/#work">
              返回首页
            </Link>
          </div>
        </Section>
      </main>
    </SiteShell>
  );
}
