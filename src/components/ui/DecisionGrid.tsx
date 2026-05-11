import type { TextBlock } from "../../types/content";

export function DecisionGrid({ items }: { items: TextBlock[] }) {
  return (
    <div className="decision-grid">
      {items.map((item) => (
        <article className="surface-card" key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </article>
      ))}
    </div>
  );
}
