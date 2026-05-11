import { useEffect, useRef, useState, type CSSProperties } from "react";
import { SiteShell } from "../components/layout/SiteShell";
import { ProjectVisual } from "../components/ui/ProjectCard";
import { Section } from "../components/ui/Section";
import { promptLabEntries as promptLabEntriesContent } from "../content/promptLab";
import { capabilityBlocks, caseStudies, homepageEvidence, homepageMethodology, projects } from "../content/siteContent";

type HeroContactIcon = "mail" | "github" | "phone" | "wechat";

type AboutIcon = "flag" | "puzzle" | "bridge" | "gauge" | "route" | "spark" | "loop" | "shield";

function getPromptLabDisplayTitle(imageSrc: string | undefined, fallbackTitle: string) {
  if (!imageSrc) {
    return fallbackTitle;
  }

  const fileName = imageSrc.split("/").pop();
  if (!fileName) {
    return fallbackTitle;
  }

  const decodedName = decodeURIComponent(fileName).replace(/\.[^.]+$/, "");
  return decodedName.replace(/[-_]+/g, " ").trim() || fallbackTitle;
}

type WorkflowLoopTheme = "civilx" | "dataops";

function WorkflowLoopVisual({
  theme,
  eyebrow,
  title,
  nodes
}: {
  theme: WorkflowLoopTheme;
  eyebrow: string;
  title: string;
  nodes: string[];
}) {
  return (
    <div className={`selected-work-card__workflow-loop selected-work-card__workflow-loop--${theme}`} aria-hidden="true">
      <div className="selected-work-card__workflow-loop-ring" />
      <div className="selected-work-card__workflow-loop-core">
        <span>{eyebrow}</span>
        <strong>{title}</strong>
      </div>
      {nodes.map((node, index) => (
        <span key={node} className={`selected-work-card__workflow-loop-node selected-work-card__workflow-loop-node--${index + 1}`}>
          {node}
        </span>
      ))}
    </div>
  );
}

function CivilXCaseStudyVisual() {
  return (
    <WorkflowLoopVisual
      theme="civilx"
      eyebrow="AI Workflow"
      title="Complex Task Solver"
      nodes={["\u8d44\u6599\u89e3\u6790", "\u77e5\u8bc6\u589e\u5f3a", "\u591a\u667a\u80fd\u4f53", "\u4eff\u771f\u8c03\u7528", "\u7ed3\u679c\u6821\u6838"]}
    />
  );
}

function DataOpsCaseStudyVisual() {
  return (
    <WorkflowLoopVisual
      theme="dataops"
      eyebrow="LUI Workflow"
      title="Operational Insight"
      nodes={["\u7edf\u4e00\u89c6\u56fe", "NL2SQL", "\u5f02\u5e38\u5f52\u56e0", "\u62a5\u544a\u751f\u6210", "Semantic Cache"]}
    />
  );
}

function SelectedWorkVisual({ project }: { project: (typeof projects)[number] }) {
  if (project.slug === "civil-x") {
    return <CivilXCaseStudyVisual />;
  }

  if (project.slug === "engineering-data-ops") {
    return <DataOpsCaseStudyVisual />;
  }

  return <ProjectVisual type={project.signal ?? "document"} />;
}

function SelectedWorkBody({ project }: { project: (typeof projects)[number] }) {
  if (project.slug === "civil-x" || project.slug === "engineering-data-ops") {
    const rolelineLabel = project.slug === "civil-x" ? "My Role" : "Focus";

    return (
      <span className="selected-work-card__body selected-work-card__body--compact-case">
        <strong className="selected-work-card__title">{project.title}</strong>
        <span className="selected-work-card__positioning">{project.positioning ?? project.subtitle}</span>
        <span className="selected-work-card__roleline">
          <span className="selected-work-card__roleline-label">{rolelineLabel}</span>
          <strong>{project.selectedEvidence ?? project.summary}</strong>
        </span>
        <span className="selected-work-card__fact-strip" aria-label={`${project.title} key results`}>
          {(project.metrics ?? []).map((metric) => (
            <span key={`${project.slug}-${metric.label}`} className="selected-work-card__fact-chip">
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
            </span>
          ))}
        </span>
        <span className="selected-work-card__cta">
          <span>{"\u67e5\u770b\u8be6\u60c5"}</span>
          <span aria-hidden="true">{"\u2192"}</span>
        </span>
      </span>
    );
  }

  return (
    <span className="selected-work-card__body">
      <strong className="selected-work-card__title">{project.title}</strong>
      <span className="selected-work-card__positioning">{project.positioning ?? project.subtitle}</span>
      <span className="selected-work-card__evidence">{project.selectedEvidence ?? project.summary}</span>
      <span className="selected-work-card__tags" aria-hidden="true">
        {(project.tags ?? []).slice(0, 7).map((tag) => (
          <span key={`${project.slug}-${tag.label}`} className="selected-work-card__tag">
            {tag.label}
          </span>
        ))}
      </span>
    </span>
  );
}

function ProjectModalVisual({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className={`project-brief project-brief--${project.slug}`} aria-hidden="true">
      <div className="project-brief__header">
        <p className="project-brief__eyebrow">{project.title}</p>
        <span className="project-brief__title">{project.modalTitle ?? project.title}</span>
        <span className="project-brief__summary">{project.modalSummary ?? project.summary}</span>
      </div>

      <div className="project-brief__metrics">
        {(project.metrics ?? []).slice(0, 3).map((metric) => (
          <div className="project-brief__metric" key={`${project.slug}-${metric.label}`}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>

      <div className="project-brief__pillars">
        {(project.pillars ?? []).map((item) => (
          <span key={`${project.slug}-${item}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function ContactIcon({ icon }: { icon: HeroContactIcon }) {
  switch (icon) {
    case "mail":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M4 6.5h16v11H4z" fill="none" stroke="currentColor" strokeWidth="1.7" />
          <path d="M4.8 7.2 12 13l7.2-5.8" fill="none" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "github":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path
            d="M12 3.5a8.5 8.5 0 0 0-2.7 16.6c.4.1.5-.2.5-.4v-1.5c-2.2.5-2.7-1-2.7-1-.4-1-.9-1.3-.9-1.3-.8-.5.1-.5.1-.5.8.1 1.3.9 1.3.9.8 1.3 2 1 2.5.8.1-.6.3-1 .6-1.3-1.8-.2-3.7-.9-3.7-4A3 3 0 0 1 8 8.7c-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8a7.4 7.4 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.5 1.1.2 1.9.1 2.1a3 3 0 0 1 .8 2.1c0 3.1-1.9 3.8-3.7 4 .3.2.6.7.6 1.5v2.1c0 .2.1.5.5.4A8.5 8.5 0 0 0 12 3.5Z"
            fill="currentColor"
          />
        </svg>
      );
    case "phone":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path
            d="M7.8 4.5h2.3l1.1 4-1.6 1.3c.8 1.7 2.1 3 3.8 3.8l1.3-1.6 4 1.1v2.3c0 .7-.5 1.2-1.2 1.2C10.4 17.6 6.4 13.6 6.6 5.7c0-.7.5-1.2 1.2-1.2Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "wechat":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path
            d="M9.5 6c-3.6 0-6.5 2.4-6.5 5.4 0 1.7.9 3.2 2.5 4.2l-.6 2.1 2.6-1.3c.7.2 1.3.3 2 .3 3.6 0 6.5-2.4 6.5-5.3S13.1 6 9.5 6Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M16.6 10.2c2.4 0 4.4 1.6 4.4 3.6 0 1.1-.6 2.1-1.7 2.8l.4 1.8-2.1-1.1c-.3.1-.7.1-1 .1-2.5 0-4.4-1.6-4.4-3.6s2-3.6 4.4-3.6Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

function AboutCardIcon({ icon }: { icon: AboutIcon }) {
  switch (icon) {
    case "flag":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M6 20V5m0 1.2h9.5l-1.6 2.7 1.6 2.8H6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      );
    case "puzzle":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M9 5.5h3.2a1.8 1.8 0 1 1 3.6 0H19v4a1.8 1.8 0 1 0 0 3.6v4H5v-4a1.8 1.8 0 1 0 0-3.6v-4h3.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      );
    case "bridge":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M4 17h16M6.5 17V9.8M17.5 17V9.8M8.5 17v-4.5M15.5 17v-4.5M6.5 9.8c1.4-1.8 3.2-2.8 5.5-2.8s4.1 1 5.5 2.8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "gauge":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M5 16a7 7 0 1 1 14 0M12 12l3-2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="12" cy="16" r="1.1" fill="currentColor" />
        </svg>
      );
    case "route":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <circle cx="6.5" cy="7" r="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="17.5" cy="17" r="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M8.2 8.2c2.6 1 3.8 2.3 4.7 4.2.8 1.8 1.8 2.8 2.8 3.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "spark":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="m12 4 1.8 4.2L18 10l-4.2 1.8L12 16l-1.8-4.2L6 10l4.2-1.8Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      );
    case "loop":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M7.5 8.5A4.5 4.5 0 0 1 12 6h3m-1.8-2L15 6l-1.8 2M16.5 15.5A4.5 4.5 0 0 1 12 18H9m1.8 2L9 18l1.8-2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "shield":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M12 4.8 18 7v4.4c0 4-2.6 6.9-6 7.8-3.4-.9-6-3.8-6-7.8V7z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      );
  }
}

function SelectedWorkArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <span className="selected-work-controls__arrow" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        {direction === "left" ? <path d="M14.5 6.5 9 12l5.5 5.5" /> : <path d="M9.5 6.5 15 12l-5.5 5.5" />}
      </svg>
    </span>
  );
}

export default function HomePage() {
  const [wechatOpen, setWechatOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);
  const [activePromptLabEntry, setActivePromptLabEntry] = useState<(typeof promptLabEntriesContent)[number] | null>(
    null
  );
  const [isPromptLabPaused, setIsPromptLabPaused] = useState(false);
  const [promptLabCardWidth, setPromptLabCardWidth] = useState(320);
  const projectModalPanelRef = useRef<HTMLDivElement | null>(null);
  const projectModalCloseRef = useRef<HTMLButtonElement | null>(null);
  const promptLabModalPanelRef = useRef<HTMLDivElement | null>(null);
  const promptLabModalCloseRef = useRef<HTMLButtonElement | null>(null);
  const promptLabViewportRef = useRef<HTMLDivElement | null>(null);
  const promptLabAnimationFrameRef = useRef<number | null>(null);
  const promptLabLastFrameRef = useRef<number | null>(null);
  const featuredProjects = projects
    .filter((project) => project.featured)
    .sort(
      (left, right) => (left.featuredOrder ?? Number.MAX_SAFE_INTEGER) - (right.featuredOrder ?? Number.MAX_SAFE_INTEGER)
    );
  const promptLabLoop = [...promptLabEntriesContent, ...promptLabEntriesContent];
  const activeModal = activeProject ? "project" : activePromptLabEntry ? "prompt-lab" : null;
  const activeStudy = activeProject ? caseStudies[activeProject.slug] : null;

  const openSelectedWorkProject = (direction: "previous" | "next") => {
    if (!featuredProjects.length) {
      return;
    }

    const currentIndex = activeProject
      ? featuredProjects.findIndex((project) => project.slug === activeProject.slug)
      : direction === "next"
        ? -1
        : 0;
    const nextIndex =
      direction === "next"
        ? (currentIndex + 1 + featuredProjects.length) % featuredProjects.length
        : (currentIndex - 1 + featuredProjects.length) % featuredProjects.length;

    setActiveProject(featuredProjects[nextIndex]);
  };

  const getPromptLabStep = () => {
    const viewport = promptLabViewportRef.current;
    if (!viewport) {
      return 338;
    }

    const track = viewport.querySelector<HTMLElement>(".prompt-lab-gallery__track");
    const firstCard = track?.querySelector<HTMLElement>(".prompt-lab-card");
    const gap = track ? Number.parseFloat(window.getComputedStyle(track).gap || "18") : 18;
    return firstCard ? firstCard.getBoundingClientRect().width + gap : 338;
  };

  const normalizePromptLabScroll = () => {
    const viewport = promptLabViewportRef.current;
    if (!viewport) {
      return;
    }

    const loopWidth = getPromptLabStep() * promptLabEntriesContent.length;

    if (viewport.scrollLeft >= loopWidth) {
      viewport.scrollLeft -= loopWidth;
    } else if (viewport.scrollLeft < 0) {
      viewport.scrollLeft += loopWidth;
    }
  };

  const scrollPromptLab = (direction: "previous" | "next") => {
    const viewport = promptLabViewportRef.current;
    if (!viewport) {
      return;
    }

    const step = getPromptLabStep();
    const loopWidth = step * promptLabEntriesContent.length;

    if (direction === "previous" && viewport.scrollLeft <= 1) {
      viewport.scrollLeft += loopWidth;
    }

    if (direction === "next" && viewport.scrollLeft >= loopWidth - step / 2) {
      viewport.scrollLeft -= loopWidth;
    }

    viewport.scrollLeft += direction === "next" ? step : -step;
    normalizePromptLabScroll();
  };

  useEffect(() => {
    const viewport = promptLabViewportRef.current;
    if (!viewport) {
      return;
    }

    const updatePromptLabCardWidth = () => {
      const visibleCards = window.innerWidth <= 720 ? 1 : window.innerWidth <= 980 ? 2 : 3;
      const gap = 18;
      const horizontalPadding = 4;
      const nextWidth = Math.max(220, (viewport.clientWidth - horizontalPadding - gap * (visibleCards - 1)) / visibleCards);
      setPromptLabCardWidth(nextWidth);
    };

    updatePromptLabCardWidth();

    window.addEventListener("resize", updatePromptLabCardWidth);

    const resizeObserver =
      typeof ResizeObserver === "undefined"
        ? null
        : new ResizeObserver(() => {
            updatePromptLabCardWidth();
          });

    resizeObserver?.observe(viewport);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", updatePromptLabCardWidth);
    };
  }, []);

  useEffect(() => {
    if (!activeModal) {
      return;
    }

    const activePanel = activeModal === "project" ? projectModalPanelRef.current : promptLabModalPanelRef.current;
    const activeCloseButton =
      activeModal === "project" ? projectModalCloseRef.current : promptLabModalCloseRef.current;
    const previouslyFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActivePromptLabEntry(null);
        setActiveProject(null);
        return;
      }

      if (event.key !== "Tab" || !activePanel) {
        return;
      }

      const focusableElements = Array.from(
        activePanel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );

      if (!focusableElements.length) {
        event.preventDefault();
        activeCloseButton?.focus({ preventScroll: true });
        return;
      }

      const firstFocusableElement = focusableElements[0];
      const lastFocusableElement = focusableElements[focusableElements.length - 1];
      const currentElement = document.activeElement;

      if (event.shiftKey && currentElement === firstFocusableElement) {
        event.preventDefault();
        lastFocusableElement.focus();
      } else if (!event.shiftKey && currentElement === lastFocusableElement) {
        event.preventDefault();
        firstFocusableElement.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusFrame = window.requestAnimationFrame(() => {
      activeCloseButton?.focus({ preventScroll: true });
    });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previouslyFocusedElement?.focus({ preventScroll: true });
    };
  }, [activeModal]);

  useEffect(() => {
    const viewport = promptLabViewportRef.current;
    if (!viewport || isPromptLabPaused || promptLabEntriesContent.length <= 3) {
      return;
    }

    const loopWidth = getPromptLabStep() * promptLabEntriesContent.length;
    const promptLabSpeed = 30;

    const tick = (timestamp: number) => {
      const previousTimestamp = promptLabLastFrameRef.current ?? timestamp;
      const delta = timestamp - previousTimestamp;
      promptLabLastFrameRef.current = timestamp;

      viewport.scrollLeft += (delta / 1000) * promptLabSpeed;

      if (viewport.scrollLeft >= loopWidth) {
        viewport.scrollLeft -= loopWidth;
      }

      promptLabAnimationFrameRef.current = window.requestAnimationFrame(tick);
    };

    promptLabAnimationFrameRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (promptLabAnimationFrameRef.current !== null) {
        window.cancelAnimationFrame(promptLabAnimationFrameRef.current);
      }
      promptLabAnimationFrameRef.current = null;
      promptLabLastFrameRef.current = null;
    };
  }, [isPromptLabPaused]);

  const promptLabActions =
    promptLabEntriesContent.length > 1 ? (
      <div className="prompt-lab-gallery__actions" aria-label="Prompt Lab navigation">
        <button
          type="button"
          className="prompt-lab-gallery__button prompt-lab-gallery__button--secondary"
          onClick={() => scrollPromptLab("previous")}
          aria-controls="prompt-lab-viewport"
          aria-label="向左浏览 Prompt Lab"
        >
          <SelectedWorkArrowIcon direction="left" />
        </button>
        <button
          type="button"
          className="prompt-lab-gallery__button"
          onClick={() => scrollPromptLab("next")}
          aria-controls="prompt-lab-viewport"
          aria-label="向右浏览 Prompt Lab"
        >
          <SelectedWorkArrowIcon direction="right" />
        </button>
      </div>
    ) : null;

  const promptLabViewportStyle = {
    ["--prompt-lab-card-width" as "--prompt-lab-card-width"]: `${promptLabCardWidth}px`
  } as CSSProperties;

  return (
    <SiteShell>
      <main>
        <section className="hero hero--cover" id="home">
          <div className="hero-cover__ambient">
            <span className="hero-cover__glow hero-cover__glow--1" />
            <span className="hero-cover__glow hero-cover__glow--2" />
            <span className="hero-cover__glow hero-cover__glow--3" />
            <span className="hero-cover__glass hero-cover__glass--left" />
            <span className="hero-cover__glass hero-cover__glass--right" />
            <span className="hero-cover__ring" />
          </div>

          <div className="site-frame hero-cover__inner">
            <div className="hero-cover__content">
              <p className="hero__eyebrow">AI Product Manager Candidate</p>
              <h1 className="hero__title hero__title--cover">
                <span className="hero__title-line">懂落地的</span>
                <span className="hero__title-line hero__title-line--accent">AI 产品经理</span>
              </h1>
              <p className="hero-cover__intro">从复杂问题定义，到可验证方案设计，再到真实业务落地与持续优化。</p>

              <div className="hero-cover__pills" aria-label="Hero navigation">
                <a className="hero-cover__pill" href="#work">
                  查看项目
                </a>
                <a className="hero-cover__pill" href="/resume.pdf" target="_blank" rel="noreferrer">
                  查看简历
                </a>
                <a className="hero-cover__pill" href="#about">
                  关于我
                </a>
              </div>

              <div className="hero-cover__contact-strip" aria-label="Contact shortcuts">
                <a className="hero-cover__contact" href="mailto:1024557279@qq.com" aria-label="邮箱" title="邮箱">
                  <ContactIcon icon="mail" />
                </a>
                <a
                  className="hero-cover__contact"
                  href="https://github.com/Diudiu-AI-product"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <ContactIcon icon="github" />
                </a>
                <a className="hero-cover__contact" href="tel:15968795861" aria-label="电话" title="电话">
                  <ContactIcon icon="phone" />
                </a>
                <button
                  className={`hero-cover__contact hero-cover__contact--button${wechatOpen ? " is-open" : ""}`}
                  type="button"
                  aria-label="微信"
                  title="微信"
                  onClick={() => setWechatOpen((value) => !value)}
                >
                  <ContactIcon icon="wechat" />
                </button>
              </div>

              {wechatOpen ? <div className="hero-cover__wechat-card">微信：15968795861</div> : null}
            </div>
          </div>
        </section>

        <Section
          id="work"
          className="section--screen section--screen-focus section--tone-projects"
          eyebrow="Selected Work"
          title="代表项目"
          intro="先看最能体现我在 AI 产品定义、方案规划、复杂协同和落地推进能力的两条真实案例。"
        >
          <div className="selected-work-grid" aria-label="代表项目卡片">
            {featuredProjects.map((project) => (
              <button
                key={project.slug}
                type="button"
                className={`selected-work-card selected-work-card--${project.slug}`}
                aria-label={`代表项目：${project.title}`}
                onClick={() => setActiveProject(project)}
              >
                <span className="selected-work-card__topline">
                  <span className="selected-work-card__eyebrow">{project.eyebrow}</span>
                  <span className="selected-work-card__badge">Live Case</span>
                </span>
                <span className="selected-work-card__visual selected-work-card__visual--cover" aria-hidden="true">
                  <SelectedWorkVisual project={project} />
                </span>
                <SelectedWorkBody project={project} />
              </button>
            ))}

          </div>
          {featuredProjects.length > 1 ? (
            <div className="selected-work-controls" aria-label="代表项目导航">
              <div className="selected-work-controls__actions">
                <button
                  type="button"
                  className="selected-work-controls__button selected-work-controls__button--secondary"
                  aria-label="打开上一个代表项目"
                  onClick={() => openSelectedWorkProject("previous")}
                >
                  <SelectedWorkArrowIcon direction="left" />
                </button>
                <button
                  type="button"
                  className="selected-work-controls__button"
                  aria-label="打开下一个代表项目"
                  onClick={() => openSelectedWorkProject("next")}
                >
                  <SelectedWorkArrowIcon direction="right" />
                </button>
              </div>
            </div>
          ) : null}
        </Section>

        {activeProject ? (
          <div
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={() => setActiveProject(null)}
          >
            <div className="project-modal__panel" ref={projectModalPanelRef} onClick={(event) => event.stopPropagation()}>
              <button
                type="button"
                ref={projectModalCloseRef}
                className="project-modal__close"
                aria-label="关闭项目弹窗"
                onClick={() => setActiveProject(null)}
              >
                &times;
              </button>
              <div className={`project-modal__media project-modal__media--${activeProject.slug}`}>
                <div className={`project-modal__frame project-modal__frame--${activeProject.slug}`}>
                  <ProjectModalVisual project={activeProject} />
                </div>
              </div>
              <div className="project-modal__content">
                <p className="project-modal__eyebrow">{activeProject.eyebrow}</p>
                <h3 id="project-modal-title">{activeProject.title}</h3>
                <div className="project-modal__tags" aria-label="项目标签">
                  {(activeProject.tags ?? []).map((tag) => (
                    <span key={`${activeProject.slug}-${tag.label}`} className="project-modal__tag">
                      {tag.label}
                    </span>
                  ))}
                </div>
                <div className="project-modal__sections">
                  <div className="project-modal__section">
                    <p className="project-modal__label">为什么要做</p>
                    <p>{activeStudy?.backgroundBody ?? activeProject.question ?? activeProject.subtitle}</p>
                  </div>

                  <div className="project-modal__section">
                    <p className="project-modal__label">我的判断</p>
                    <p>{activeProject.judgement ?? activeProject.summary}</p>
                  </div>

                  <div className="project-modal__section">
                    <p className="project-modal__label">怎么设计</p>
                    <div className="project-modal__detail-grid">
                      {(activeStudy?.decisions ?? []).slice(0, 4).map((item) => (
                        <article className="project-modal__detail-card" key={`${activeProject.slug}-${item.title}`}>
                          <strong>{item.title}</strong>
                          <p>{item.body}</p>
                        </article>
                      ))}
                    </div>
                  </div>

                  <div className="project-modal__section">
                    <p className="project-modal__label">关键结果</p>
                    <div className="project-modal__detail-grid project-modal__detail-grid--results">
                      {(activeStudy?.outcomes ?? []).slice(0, 3).map((item) => (
                        <article className="project-modal__detail-card project-modal__detail-card--result" key={`${activeProject.slug}-${item.title}`}>
                          <strong>{item.title}</strong>
                          <p>{item.body}</p>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {activePromptLabEntry ? (
          <div
            className="prompt-lab-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="prompt-lab-modal-title"
            onClick={() => setActivePromptLabEntry(null)}
          >
            <div
              className="prompt-lab-modal__panel"
              ref={promptLabModalPanelRef}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                ref={promptLabModalCloseRef}
                className="prompt-lab-modal__close"
                aria-label="关闭 Prompt Lab 弹窗"
                onClick={() => setActivePromptLabEntry(null)}
              >
                &times;
              </button>
              <div className="prompt-lab-modal__media">
                <div className={`prompt-lab-modal__frame prompt-lab-modal__frame--${activePromptLabEntry.accent}`}>
                  <img
                    className={`prompt-lab-modal__image prompt-lab-modal__image--${activePromptLabEntry.imageFit ?? "contain"}`}
                    src={activePromptLabEntry.imageSrc}
                    alt={activePromptLabEntry.imageAlt}
                  />
                </div>
              </div>
              <div className="prompt-lab-modal__content">
                <p className="prompt-lab-modal__eyebrow">{activePromptLabEntry.kicker}</p>
                <h3 id="prompt-lab-modal-title">
                  {getPromptLabDisplayTitle(activePromptLabEntry.imageSrc, activePromptLabEntry.title)}
                </h3>
                <div className="prompt-lab-modal__tags" aria-label="Prompt Lab 标签">
                  {activePromptLabEntry.tags.map((tag) => (
                    <span key={tag} className="prompt-lab-modal__tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="prompt-lab-modal__prompt-block">
                  <p className="prompt-lab-modal__label">Prompt</p>
                  <div className="prompt-lab-modal__prompt">
                    {activePromptLabEntry.promptDetail ?? activePromptLabEntry.promptPreview}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        <Section
          id="prompt-lab"
          className="section section--prompt section--tone-method"
          actions={promptLabActions}
          eyebrow="Prompt Lab"
          title="把提示词沉淀成可复用资产"
          intro="用模板化、结构化的方法稳定产出更高质量的视觉表达和内容组织。"
        >
          <div className="prompt-lab-gallery" aria-label="Prompt Lab cards">
            <p className="prompt-lab-gallery__hint">自动轮播，鼠标停留卡片时暂停，也可以用左右按钮切换。</p>
            <div
              className="prompt-lab-gallery__viewport"
              id="prompt-lab-viewport"
              ref={promptLabViewportRef}
              style={promptLabViewportStyle}
              tabIndex={0}
              onMouseEnter={() => setIsPromptLabPaused(true)}
              onMouseLeave={() => setIsPromptLabPaused(false)}
              onFocusCapture={() => setIsPromptLabPaused(true)}
              onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                  setIsPromptLabPaused(false);
                }
              }}
            >
              <div className="prompt-lab-gallery__track">
                {promptLabLoop.map((entry, index) => (
                  <button
                    key={`${entry.slug}-${index}`}
                    type="button"
                    className={`prompt-lab-card prompt-lab-card--${entry.accent}`}
                    aria-label={`Prompt Lab 卡片：${entry.title}`}
                    onClick={() => setActivePromptLabEntry(entry)}
                  >
                    <div className={`prompt-lab-card__media prompt-lab-card__media--${entry.accent}`}>
                      <img
                        className={`prompt-lab-card__image prompt-lab-card__image--${entry.imageFit ?? "contain"}`}
                        src={entry.imageSrc}
                        alt={entry.imageAlt}
                      />
                    </div>
                    <div className="prompt-lab-card__meta">
                      <span className="prompt-lab-card__serial">
                        {String((index % promptLabEntriesContent.length) + 1).padStart(2, "0")}
                      </span>
                      <span className="prompt-lab-card__kicker">{entry.kicker}</span>
                    </div>
                    <div className="prompt-lab-card__body">
                      <strong className="prompt-lab-card__title">
                        {getPromptLabDisplayTitle(entry.imageSrc, entry.title)}
                      </strong>
                      <p className="prompt-lab-card__prompt">{entry.promptPreview}</p>
                      <div className="prompt-lab-card__tags" aria-hidden="true">
                        {entry.tags.slice(0, 3).map((tag) => (
                          <span key={`${entry.slug}-${tag}`} className="prompt-lab-card__tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="about"
          className="section--compact-flow"
          eyebrow="Why Me"
          title="我更擅长的，是把 AI 做成真正可用的产品"
          intro="不只是理解模型能力，而是把复杂场景拆开、设计成能落进真实业务里的产品路径。"
        >
          <div className="about-merged">
            <div className="about-merged__group">
              <div className="about-merged__heading">
                <p className="section-heading__eyebrow">Why Me</p>
                <h3>为什么这类项目我更容易做深、做稳、做落地</h3>
              </div>
              <div className="about-merged__method-grid">
                {homepageEvidence.map((item, index) => (
                  <article className="surface-card about-merged__why-card" key={item.title}>
                    <div className="about-card__topline">
                      <span className="about-card__icon">
                        <AboutCardIcon icon={(["flag", "puzzle", "bridge", "gauge"] as AboutIcon[])[index]} />
                      </span>
                      <span className="about-card__index">0{index + 1}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="about-merged__group">
              <div className="about-merged__heading">
                <p className="section-heading__eyebrow">How I Work</p>
                <h3>做 AI 产品时，我会先判断什么</h3>
              </div>
              <div className="about-merged__method-grid">
                {homepageMethodology.map((item, index) => (
                  <article className="surface-card about-merged__method-card" key={item.title}>
                    <div className="about-card__topline">
                      <span className="about-card__icon">
                        <AboutCardIcon icon={(["route", "spark", "loop", "shield"] as AboutIcon[])[index]} />
                      </span>
                      <span className="about-card__index">0{index + 1}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="about-merged__group">
              <div className="about-merged__heading">
                <p className="section-heading__eyebrow">Capability</p>
                <h3>我能提供的，不只是一个想法</h3>
              </div>
              <div className="about-merged__capability-grid">
                {capabilityBlocks.map((item, index) => (
                  <article className="surface-card about-merged__capability-card" key={item.title}>
                    <div className="about-card__topline">
                      <span className="about-card__icon">
                        <AboutCardIcon icon={(["flag", "spark", "bridge", "route"] as AboutIcon[])[index]} />
                      </span>
                      <span className="about-card__index">0{index + 1}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </main>
    </SiteShell>
  );
}
