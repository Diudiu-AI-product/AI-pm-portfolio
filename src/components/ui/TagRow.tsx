import type { Tag } from "../../types/content";
import { formatTag } from "../../utils/copy";

export function TagRow({ tags, className = "" }: { tags: Tag[]; className?: string }) {
  return (
    <div className={`tag-row ${className}`.trim()}>
      {tags.map((tag) => (
        <span className="tag-chip" key={tag.label}>
          {formatTag(tag)}
        </span>
      ))}
    </div>
  );
}
