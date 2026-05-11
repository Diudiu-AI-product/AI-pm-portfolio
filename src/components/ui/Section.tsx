import type { PropsWithChildren, ReactNode } from "react";

type SectionProps = PropsWithChildren<{
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  className?: string;
  actions?: ReactNode;
}>;

export function Section({ id, eyebrow, title, intro, className = "", actions, children }: SectionProps) {
  return (
    <section className={`section ${className}`.trim()} id={id}>
      <div className="site-frame">
        {(eyebrow || title || intro || actions) && (
          <div className="section-heading">
            <div>
              {eyebrow ? <p className="section-heading__eyebrow">{eyebrow}</p> : null}
              {title ? <h2 className="section-heading__title">{title}</h2> : null}
              {intro ? <p className="section-heading__intro">{intro}</p> : null}
            </div>
            {actions ? <div className="section-heading__actions">{actions}</div> : null}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
