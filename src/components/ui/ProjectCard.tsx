import { Link } from "react-router-dom";
import type { ProjectSignalType, ProjectSummary } from "../../types/content";

export function ProjectVisual({ type }: { type: ProjectSignalType }) {
  switch (type) {
    case "document":
      return (
        <svg aria-label="Project visual" className="project-card__visual-svg" viewBox="0 0 72 72">
          <rect x="16" y="12" width="26" height="36" rx="8" />
          <path d="M24 24h10M24 31h16M24 38h14" />
          <circle cx="50" cy="42" r="7" />
          <path d="M55 47l7 7" />
        </svg>
      );
    case "dashboard":
      return (
        <svg aria-label="Project visual" className="project-card__visual-svg" viewBox="0 0 72 72">
          <rect x="12" y="16" width="48" height="40" rx="10" />
          <path d="M24 28h24M24 38h14M42 38h8M24 47h10M38 47h14" />
          <rect x="44" y="24" width="8" height="8" rx="2" />
        </svg>
      );
    case "route":
      return (
        <svg aria-label="Project visual" className="project-card__visual-svg" viewBox="0 0 72 72">
          <circle cx="18" cy="22" r="6" />
          <circle cx="34" cy="38" r="6" />
          <circle cx="54" cy="50" r="6" />
          <path d="M22 26c5 3 7 6 10 9s6 4 10 4 7 3 8 7" />
        </svg>
      );
    case "playbook":
      return (
        <svg aria-label="Project visual" className="project-card__visual-svg" viewBox="0 0 72 72">
          <rect x="16" y="14" width="34" height="42" rx="8" />
          <path d="M26 26l4 4 8-8M26 36l4 4 8-8M26 46h18" />
          <path d="M50 20v30" />
        </svg>
      );
    case "graph":
      return (
        <svg aria-label="Project visual" className="project-card__visual-svg" viewBox="0 0 72 72">
          <circle cx="18" cy="22" r="5" />
          <circle cx="52" cy="18" r="5" />
          <circle cx="34" cy="38" r="6" />
          <circle cx="56" cy="50" r="5" />
          <circle cx="18" cy="52" r="5" />
          <path d="M22 24 29 34M39 35l9-12M39 41l12 7M29 42l-8 8M23 22h24" />
        </svg>
      );
    case "assistant":
      return (
        <svg aria-label="Project visual" className="project-card__visual-svg" viewBox="0 0 72 72">
          <rect x="14" y="18" width="28" height="24" rx="8" />
          <path d="M22 28h12M22 34h8" />
          <path d="M24 42v8l7-5" />
          <rect x="44" y="28" width="14" height="18" rx="5" />
          <path d="M51 28v-4M48 46h7" />
        </svg>
      );
  }
}

export function ProjectCard({
  project,
  featured = false,
  compact = false,
  showcase = false
}: {
  project: ProjectSummary;
  featured?: boolean;
  compact?: boolean;
  showcase?: boolean;
}) {
  const href = project.detailPath ?? "/";
  const visibleMetrics = compact ? project.metrics?.slice(0, 3) : project.metrics?.slice(0, 4);
  const visualType = project.signal ?? "document";

  if (showcase) {
    return (
      <article className={`project-card project-card--showcase${featured ? " project-card--featured" : ""}`}>
        <div className="project-card__topline">
          <div className="project-card__visual">
            <ProjectVisual type={visualType} />
          </div>
          <div className="project-card__meta">
            <p className="project-card__eyebrow">{project.eyebrow}</p>
            <span className="project-card__badge">{project.category === "production" ? "Live Case" : "Method Case"}</span>
          </div>
        </div>

        <div className="project-card__body project-card__body--showcase">
          <div className="project-card__headline">
            <h3>{project.title}</h3>
            <p className="project-card__positioning">{project.positioning ?? project.subtitle}</p>
          </div>

          <div className="project-card__editorial-list" aria-label={`${project.title} project notes`}>
            <div className="project-card__editorial-item">
              <span className="project-card__editorial-label">Problem</span>
              <p>{project.question ?? project.subtitle}</p>
            </div>
            <div className="project-card__editorial-item">
              <span className="project-card__editorial-label">Judgement</span>
              <p>{project.judgement ?? project.summary}</p>
            </div>
            <div className="project-card__editorial-item">
              <span className="project-card__editorial-label">Output</span>
              <p>{project.output ?? project.summary}</p>
            </div>
          </div>

          {project.tags?.length ? (
            <div className="project-card__tags project-card__tags--showcase" aria-label={`${project.title} tags`}>
              {project.tags.slice(0, 3).map((tag) => (
                <span key={`${project.slug}-${tag.label}`} className="tag-chip">
                  {tag.label}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </article>
    );
  }

  return (
    <article
      className={`project-card${featured ? " project-card--featured" : ""}${compact ? " project-card--compact" : ""}${
        showcase ? " project-card--showcase" : ""
      }`}
    >
      <div className="project-card__topline">
        <div className="project-card__visual">
          <ProjectVisual type={visualType} />
        </div>
        <div className="project-card__meta">
          <p className="project-card__eyebrow">{project.eyebrow}</p>
          {project.category === "production" ? <span className="project-card__badge">Live Case</span> : null}
        </div>
      </div>

      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p className="project-card__subtitle">{project.subtitle}</p>

        {visibleMetrics?.length ? (
          <div className="project-card__facts" aria-label={`${project.title} key facts`}>
            {visibleMetrics.map((metric) => (
              <div className="project-card__fact" key={`${project.slug}-${metric.label}`}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      <div className="project-card__footer">
        <Link className="text-link" to={href}>
          查看详情
        </Link>
      </div>
    </article>
  );
}
