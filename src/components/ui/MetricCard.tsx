import type { Metric } from "../../types/content";

export function MetricCard({ metric }: { metric: Metric }) {
  const isTextMetric = /[A-Za-z]/.test(metric.value);

  return (
    <article className={`metric-card${isTextMetric ? " metric-card--text" : ""}`}>
      <strong>{metric.value}</strong>
      <span>{metric.label}</span>
    </article>
  );
}
