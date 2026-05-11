export type Tag = {
  label: string;
  note?: string;
};

export type HeroSignal = {
  label: string;
  note?: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type TextBlock = {
  title: string;
  body: string;
};

export type ProjectCategory = "production" | "prototype" | "exploration";

export type ProjectSignalType = "document" | "dashboard" | "route" | "playbook" | "graph" | "assistant";

export type ProjectSummary = {
  slug: string;
  title: string;
  eyebrow: string;
  category: ProjectCategory;
  subtitle: string;
  summary: string;
  positioning?: string;
  question?: string;
  judgement?: string;
  output?: string;
  metrics?: Metric[];
  tags?: Tag[];
  featured?: boolean;
  featuredOrder?: number;
  signal?: ProjectSignalType;
  detailPath?: string;
  role?: string;
  period?: string;
  selectedEvidence?: string;
  modalTitle?: string;
  modalSummary?: string;
  pillars?: string[];
};

export type CaseStudySection = {
  title: string;
  items: TextBlock[];
};

export type CaseStudyContent = {
  slug: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  heroSummary: string;
  role: string;
  timeline: string;
  caseType: string;
  capabilityScope: string[];
  backgroundIntro: string;
  backgroundBody: string;
  challenges: TextBlock[];
  decisions: TextBlock[];
  solutionSections: CaseStudySection[];
  metrics: Metric[];
  outcomes: TextBlock[];
  roleBlocks: TextBlock[];
  learning: TextBlock[];
};
