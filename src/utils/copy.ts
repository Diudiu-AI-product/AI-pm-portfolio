import type { Tag } from "../types/content";

export function formatTag(tag: Tag) {
  return tag.note ? `${tag.label} / ${tag.note}` : tag.label;
}
