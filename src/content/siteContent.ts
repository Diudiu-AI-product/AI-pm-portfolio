import type { CaseStudyContent, Metric, ProjectSummary, TextBlock } from "../types/content";

const civilXProjectMetrics: Metric[] = [
  { value: "60% -> 95%", label: "字段解析准确率" },
  { value: "数天 -> 15 分钟", label: "方案比选效率" },
  { value: "500+", label: "评测场景" }
];

const dataOpsProjectMetrics: Metric[] = [
  { value: "85%", label: "SQL 生成准确率" },
  { value: "+50%", label: "平台 DAU" },
  { value: "-35%", label: "API 成本" }
];

export const projects: ProjectSummary[] = [
  {
    slug: "civil-x",
    title: "Civil-X",
    eyebrow: "Production Case",
    category: "production",
    subtitle: "工程复杂任务 AI 闭环求解平台，面向资料解析、规范校核、方案分析与仿真调用。",
    summary:
      "负责 Civil-X 从 0 到 1 的产品定义与业务落地，围绕多模态感知、物理机理仿真与协同决策建立工程智能体能力。",
    positioning:
      "面向工程行业复杂计算、规范检索、方案推演等高门槛场景，推动 AI 从“知识问答”升级为“复杂任务闭环求解”。",
    question:
      "工程资料非结构化、复杂推理链路易偏移、方案比选依赖资深工程师手工串联，导致高门槛任务难以规模化提效。",
    judgement:
      "关键不是做一个会回答问题的助手，而是把资料解析、知识增强推理、多智能体协同、仿真调用和评测反馈编排成可执行的 Agent Workflow。",
    output:
      "实现关键字段解析准确率 60% -> 95%，复杂任务推理 Token 消耗降低 40%，核心计算结果准确率提升 40%，方案比选任务从数天压缩到 15 分钟。",
    metrics: civilXProjectMetrics,
    tags: [
      { label: "LayoutLMv3" },
      { label: "GraphRAG" },
      { label: "LangGraph" },
      { label: "MCP" },
      { label: "Ragas" },
      { label: "SFT / DPO" },
      { label: "Adaptive Context Retrieval" }
    ],
    featured: true,
    featuredOrder: 1,
    signal: "document",
    detailPath: "/projects/civil-x",
    role: "产品经理",
    period: "2024.11 - 至今",
    selectedEvidence:
      "0 到 1 产品规划 / Agent Workflow / 评测闭环",
    modalTitle: "工业级工程智能体平台",
    modalSummary: "从知识问答升级为复杂任务闭环求解的工程智能体平台",
    pillars: ["多模态感知", "知识增强检索", "多智能体协同", "仿真工具接入", "评测与推理路由"]
  },
  {
    slug: "engineering-data-ops",
    title: "工程数据智能运营中台",
    eyebrow: "Production Case",
    category: "production",
    subtitle: "基于 LUI 的对话式数据中台，面向自然语言取数、异常分析与报告生成。",
    summary:
      "负责推动传统工程资料后台向智能运营中台升级，围绕数据资产化、NL2SQL、辅助归因与自动化报告建立主动洞察能力。",
    positioning:
      "针对资料分散、数据难利用、取数依赖研发、分析响应慢等痛点，推动工程管理系统从被动存储升级为主动洞察。",
    question:
      "如何让业务人员不依赖研发写 SQL，也能通过自然语言完成跨模块取数、异常分析和经营洞察？",
    judgement:
      "关键不是单次把 SQL 生出来，而是先完成数据资产化和语义层建设，再把语义解析、澄清、缓存和人工反馈组合成稳定可用的分析链路。",
    output:
      "落地统一数据视图、Schema Linking + Few-shot + 查询重写的 NL2SQL 链路、异常识别与辅助归因模块、标准化报告生成工作流，以及 Semantic Cache 与 Human-in-the-Loop 反馈机制。",
    metrics: dataOpsProjectMetrics,
    tags: [
      { label: "LUI" },
      { label: "NL2SQL" },
      { label: "Schema Linking" },
      { label: "Few-shot Prompting" },
      { label: "Semantic Cache" },
      { label: "Human-in-the-Loop" }
    ],
    featured: true,
    featuredOrder: 2,
    signal: "dashboard",
    detailPath: "/projects/engineering-data-ops",
    role: "产品经理",
    period: "2025.06 - 至今",
    selectedEvidence:
      "\u7edf\u4e00\u6570\u636e\u89c6\u56fe / NL2SQL / \u5f02\u5e38\u5f52\u56e0 / \u62a5\u544a\u81ea\u52a8\u5316",
    modalTitle: "对话式数据智能中台",
    modalSummary: "统一数据视图、自然语言取数、异常分析与一键化报告生成",
    pillars: ["数据资产化", "语义层建设", "自然语言取数", "异常归因", "报告自动化"]
  }
];

export const homepageEvidence: TextBlock[] = [
  {
    title: "做过真实落地项目",
    body: "不是停留在概念验证，而是推动 AI 产品从需求、方案到上线迭代真正进入业务流程。"
  },
  {
    title: "能拆复杂问题",
    body: "面对低容错、长链路、高专业门槛场景，会先拆解问题结构，再设计产品与模型方案。"
  },
  {
    title: "懂 AI，也懂推进",
    body: "能在业务、算法与研发之间搭桥，把复杂能力组织成团队可执行、可验证的产品路径。"
  },
  {
    title: "会用结果指标反推产品优化",
    body: "会把召回率、忠实度、任务完成率、活跃度和成本等指标放回真实使用链路里，持续判断哪里该补能力、哪里该收复杂度。"
  }
];

export const homepageMethodology: TextBlock[] = [
  {
    title: "先定义任务闭环，再决定 AI 方案",
    body: "先判断业务目标、容错边界和关键阻塞点，再选择 RAG、Agent、NL2SQL 或其他能力组合。"
  },
  {
    title: "先打通最小链路，再做能力增强",
    body: "优先把用户真正会用的关键路径跑通，再逐步补充复杂推理、工具调用和评测能力。"
  },
  {
    title: "把评测和反馈当成产品的一部分",
    body: "不只看模型是否能答，还持续观察召回率、忠实度、幻觉率与任务完成率等结果指标。"
  },
  {
    title: "明确人和 AI 的协作边界",
    body: "在复杂专业场景里，让模型负责提效，让关键判断、确认和兜底机制保持可控。"
  }
];

export const capabilityBlocks: TextBlock[] = [
  {
    title: "理解 RAG / Agent / NL2SQL 的适用边界",
    body: "知道不同方案分别适合什么问题，也知道哪些业务场景不该为了 AI 而强行上 AI。"
  },
  {
    title: "把复杂能力包装成可用产品",
    body: "关注输入约束、输出形式、可解释性和验证机制，而不只停留在模型能力演示。"
  },
  {
    title: "能推动跨角色协作落地",
    body: "能把抽象需求转成研发、算法、业务专家都能对齐并推进的产品方案。"
  },
  {
    title: "能快速完成 PoC 与表达验证",
    body: "能结合 Vibe Coding、原型工具和页面表达，把方案更快地做成可讨论、可验证的形态。"
  }
];

export const civilXMetrics: Metric[] = [
  { value: "60% -> 95%", label: "核心参数提取准确率" },
  { value: "-40%", label: "单次任务 Token 成本" },
  { value: "+40%", label: "核心数值输出准确性" },
  { value: "15 min", label: "方案比选任务时长" },
  { value: "-25%", label: "高频任务算力资源占用" },
  { value: "+30%", label: "垂直规范场景泛化能力" }
];

export const civilXChallenges: TextBlock[] = [
  {
    title: "工程文档复杂且难以结构化",
    body: "工程 PDF 中存在嵌套表、跨页表和图纸参数，导致关键信息难提取、难沉淀、难复用。"
  },
  {
    title: "复杂推理链路容易偏移",
    body: "工程计算涉及多步推理与专业约束，单次问答式生成很容易在中间步骤发生偏差。"
  },
  {
    title: "外部机理工具无法自然协同",
    body: "传统流程依赖资深工程师手工串联参数提取、仿真与校核，效率低、周期长、难规模化。"
  },
  {
    title: "AI 效果缺少持续量化抓手",
    body: "如果没有评测集、Bad case 和反馈闭环，产品很难稳定优化，更难在专业场景建立可信度。"
  }
];

export const civilXDecisions: TextBlock[] = [
  {
    title: "先解决底层文档解析问题",
    body: "主导 Layout-Aware 多模态解析能力规划，协同研发落地基于 LayoutLMv3 的结构化抽取方案。"
  },
  {
    title: "把检索治理做成分层链路",
    body: "设计 GraphRAG 知识治理链路，采用父子文档检索与向量、关键词混合检索，并加入 Adaptive Context Retrieval。"
  },
  {
    title: "把复杂任务拆成多智能体协作",
    body: "基于 LangGraph 规划 Master-Worker 流程，并通过 Self-Reflection 机制把专家经验转化为模型校核逻辑。"
  },
  {
    title: "把工具调用和评测闭环产品化",
    body: "引入 MCP 打通仿真工具接入，并搭建基于 Ragas 的自动化评测体系，让能力升级可持续验证。"
  }
];

export const civilXSolutionSections = [
  {
    title: "Five Core Functions",
    items: [
      {
        title: "多模态感知",
        body: "通过 Layout-Aware 多模态解析能力处理 PDF 嵌套表、跨页表和图纸参数，解决底层工程信息利用问题。"
      },
      {
        title: "知识增强检索",
        body: "基于 GraphRAG、父子文档检索、向量与关键词混合检索，以及 Adaptive Context Retrieval 提升复杂知识命中效率。"
      },
      {
        title: "多智能体协同推理",
        body: "通过 LangGraph 规划 Master-Worker 协作流，并加入 Self-Reflection 校核机制，降低多步推理偏移。"
      },
      {
        title: "物理机理仿真接入",
        body: "通过 MCP 协议标准化接入仿真工具，打通参数提取、机理仿真与安全校核全链路。"
      },
      {
        title: "评测与推理路由",
        body: "搭建基于 Ragas 的自动化评测体系，并结合任务复杂度设计分级推理路由策略，在保障效果的同时控制资源消耗。"
      }
    ]
  },
  {
    title: "Parsing And Knowledge Layer",
    items: [
      {
        title: "多模态文档解析",
        body: "围绕 PDF 嵌套表、跨页表和图纸参数设计结构化抽取方案，让底层工程数据可被稳定利用。"
      },
      {
        title: "GraphRAG 检索治理",
        body: "通过父子文档检索、混合检索与动态上下文回捞，在保证推理质量的同时控制上下文成本。"
      }
    ]
  },
  {
    title: "Reasoning And Tool Loop",
    items: [
      {
        title: "Master-Worker 多智能体协作",
        body: "将复杂工程计算拆解为可控步骤，并用 Self-Reflection 机制减少多步推理链路偏移。"
      },
      {
        title: "MCP 仿真工具接入",
        body: "打通参数提取、机理仿真与安全校核链路，支持模型自主调用外部物理机理引擎联合分析。"
      }
    ]
  }
];

export const civilXOutcomes: TextBlock[] = [
  {
    title: "核心参数提取准确率显著提升",
    body: "基于 LayoutLMv3 的结构化抽取方案落地后，核心参数提取准确率由 60% 提升到 95%。"
  },
  {
    title: "复杂任务推理成本更可控",
    body: "通过 Adaptive Context Retrieval，只在复杂逻辑节点动态回捞上下文，在保证推理质量的同时将单次任务 Token 成本降低 40%。"
  },
  {
    title: "数值推理结果更稳定",
    body: "借助 Master-Worker 协作和 Self-Reflection 校核机制，核心数值输出准确性提升 40%。"
  },
  {
    title: "方案比选效率从天级压缩到分钟级",
    body: "通过 MCP 打通参数提取、机理仿真与安全校核链路，将原本依赖资深工程师数天完成的任务缩短至 15 分钟。"
  },
  {
    title: "高频任务资源效率更高",
    body: "结合任务复杂度设计分级推理路由，在高频简单任务中自动调度轻量级模型，在保障业务效果的前提下降低 25% 算力资源占用。"
  },
  {
    title: "评测闭环支撑持续泛化",
    body: "搭建 500+ 场景的工程领域 Golden Dataset 和基于 Ragas 的自动化评测体系，推动垂直规范场景泛化能力提升 30%。"
  }
];

export const civilXRole: TextBlock[] = [
  {
    title: "产品定义与场景抽象",
    body: "负责从 0 到 1 定义 Civil-X 的产品方向，识别业务痛点并抽象出工程智能体的核心产品链路。"
  },
  {
    title: "方案规划与跨团队推进",
    body: "主导 RAG、Agent、MCP 接入、推理路由和评测链路的产品方案规划，协同算法、研发与业务专家完成落地。"
  },
  {
    title: "评测闭环与持续迭代",
    body: "搭建基于 Ragas 的自动化评测体系和 Golden Dataset，围绕效果指标、Bad case 与反馈持续优化产品。"
  }
];

export const civilXLearning: TextBlock[] = [
  {
    title: "AI 产品的难点不在接模型",
    body: "真正难的是把解析、检索、推理、工具调用和兜底校核组织成一条可被业务稳定使用的产品链。"
  },
  {
    title: "垂直场景必须重视评测体系",
    body: "专业场景没有评测闭环就无法稳定优化，模型效果也很难被业务真正信任。"
  },
  {
    title: "产品可信度来自结果表达与机制设计",
    body: "不仅要做出结果，还要让用户理解结果来自哪里、哪里可验证、哪里需要谨慎使用。"
  }
];

export const engineeringDataOpsMetrics: Metric[] = [
  { value: "85%", label: "SQL 生成准确率" },
  { value: "+50%", label: "平台 DAU" },
  { value: "周 -> 小时", label: "风险识别响应速度" },
  { value: "+70%", label: "报告生成效率" },
  { value: "-30%", label: "模型调用次数" },
  { value: "-35%", label: "API 成本" }
];

export const engineeringDataOpsChallenges: TextBlock[] = [
  {
    title: "数据分散在多模块系统中",
    body: "资料库、业务台账与报表数据分散存在，字段口径不一致，导致业务人员很难形成统一视图。"
  },
  {
    title: "取数依赖研发，分析响应慢",
    body: "跨模块查询和指标分析依赖研发写 SQL，业务想法到结果之间链路长、等待成本高。"
  },
  {
    title: "异常判断缺少连续分析能力",
    body: "当施工进度、成本和产值等指标波动时，系统缺少自动串联查询、对比和归纳的机制，风险识别滞后。"
  },
  {
    title: "高频查询带来成本与偏差压力",
    body: "如果没有缓存和人工反馈机制，模型在高频业务场景下既容易重复消耗成本，也难以持续收敛语义偏差。"
  }
];

export const engineeringDataOpsDecisions: TextBlock[] = [
  {
    title: "先做数据资产化和语义层建设",
    body: "围绕资料库、业务台账、报表数据建立统一数据视图，梳理指标口径、业务实体与字段映射关系。"
  },
  {
    title: "把 NL2SQL 做成可澄清的语义解析链路",
    body: "设计 Schema Linking、Few-shot Prompting、查询重写与多轮澄清机制，而不是只依赖一次性生成 SQL。"
  },
  {
    title: "把异常识别和辅助归因做成主动能力",
    body: "让系统围绕关键指标异常自动串联查询、对比与归纳步骤，输出分析摘要而非仅做静态告警。"
  },
  {
    title: "用缓存和人工反馈平衡成本与稳定性",
    body: "采用 Semantic Cache 处理高频查询，并引入 Human-in-the-Loop 反馈机制持续校正语义解析结果。"
  }
];

export const engineeringDataOpsSolutionSections = [
  {
    title: "Core Capability Stack",
    items: [
      {
        title: "统一数据视图",
        body: "整合资料库、台账与报表数据，建立统一数据视图，让业务问题先能被准确映射到可查询的数据对象。"
      },
      {
        title: "语义层建设",
        body: "明确指标口径、业务实体和底层字段关系，为自然语言交互和智能分析提供稳定语义底座。"
      },
      {
        title: "自然语言取数",
        body: "通过 NL2SQL 支持跨模块取数、指标查询和多轮澄清，降低业务人员获取数据的门槛。"
      },
      {
        title: "异常监测与辅助归因",
        body: "围绕施工进度、成本和产值等时序数据设计主动监测链路，自动完成查询、对比和摘要生成。"
      },
      {
        title: "报告自动化",
        body: "以标准化报告模板 Schema 驱动结构化与非结构化数据汇总，支持周报、月报一键化生成。"
      }
    ]
  },
  {
    title: "Semantic Parsing And Analysis Loop",
    items: [
      {
        title: "Schema Linking + Few-shot",
        body: "通过 Schema Linking 约束可选表字段，再用 Few-shot Prompting 提升复杂业务问题的 SQL 生成稳定性。"
      },
      {
        title: "查询重写与多轮澄清",
        body: "在业务表达含糊或维度缺失时，先进行语义重写与交互澄清，减少直接生成 SQL 带来的理解偏差。"
      }
    ]
  },
  {
    title: "Efficiency And Feedback Layer",
    items: [
      {
        title: "Semantic Cache",
        body: "针对高频查询复用历史语义结果，减少重复模型调用，降低时延和成本。"
      },
      {
        title: "Human-in-the-Loop",
        body: "把业务侧反馈纳入语义解析结果修正流程，持续优化模型在真实场景下的表达准确性。"
      }
    ]
  }
];

export const engineeringDataOpsOutcomes: TextBlock[] = [
  {
    title: "自然语言取数能力达到可用水平",
    body: "构建包含 Schema Linking、Few-shot Prompting、查询重写与多轮澄清的语义解析链路后，SQL 生成准确率达到 85%。"
  },
  {
    title: "业务使用活跃度明显提升",
    body: "业务人员可以直接通过自然语言完成跨模块取数、指标查询和数据分析，平台 DAU 提升 50%。"
  },
  {
    title: "风险识别响应从周级缩短到小时级",
    body: "围绕关键指标异常设计智能监测链路，系统能够自动串联查询、对比与归纳步骤生成分析摘要。"
  },
  {
    title: "报告输出效率显著提升",
    body: "通过标准化报告模板 Schema 驱动自动化报告生成工作流，实现周报、月报一键生成，人效提升 70%。"
  },
  {
    title: "高频场景成本和调用压力下降",
    body: "采用 Semantic Cache 与 Human-in-the-Loop 反馈机制后，减少 30% 模型调用次数，节约 35% API 成本。"
  },
  {
    title: "语义解析偏差持续收敛",
    body: "结合业务反馈闭环，业务场景下语义解析偏差率降低 20%，让结果更稳定、更接近真实使用需求。"
  }
];

export const engineeringDataOpsRole: TextBlock[] = [
  {
    title: "中台升级方向定义",
    body: "负责推动原有资料存储后台向对话式数据中台升级，明确数据资产化、自然语言取数与智能分析的核心场景。"
  },
  {
    title: "方案设计与关键链路规划",
    body: "主导统一数据视图、语义层、NL2SQL、异常分析与报告自动化等关键模块方案设计，并协调研发落地。"
  },
  {
    title: "效果验证与机制优化",
    body: "围绕准确率、活跃度、调用成本和语义偏差等指标持续验证效果，推动缓存、澄清和人工反馈机制迭代。"
  }
];

export const engineeringDataOpsLearning: TextBlock[] = [
  {
    title: "对话式分析前提是数据语义统一",
    body: "如果底层数据视图和指标口径不清晰，NL2SQL 再强也很难在真实业务里稳定可用。"
  },
  {
    title: "智能分析要覆盖查询后的解释环节",
    body: "业务真正需要的不是一条 SQL，而是能继续完成对比、归纳、归因和表达的完整分析链路。"
  },
  {
    title: "成本优化必须和结果稳定性一起设计",
    body: "缓存、澄清、人工反馈这些机制不是附加项，而是支撑高频业务场景可持续运行的产品基础设施。"
  }
];

export const caseStudies: Record<string, CaseStudyContent> = {
  "civil-x": {
    slug: "civil-x",
    heroEyebrow: "Case Study 01",
    heroTitle: "Civil-X",
    heroSubtitle: "工业级工程智能体平台，面向复杂工程文档解析、专业问答与方案比选。",
    heroSummary:
      "针对工程领域专家经验碎片化、物理机理模型集成度低、方案比选周期长等痛点，我负责 Civil-X 平台从 0 到 1 的产品定义与业务落地，规划并推动“多模态感知 - 物理机理仿真 - 协同决策”一体化工程智能体能力落地，让 AI 从辅助问答升级为工程复杂任务的闭环求解系统。",
    role: "产品经理",
    timeline: "2024.11 - 至今",
    caseType: "Production Case",
    capabilityScope: ["多模态感知", "知识增强检索", "多智能体协同", "仿真工具接入", "评测与推理路由"],
    backgroundIntro: "这个项目不是单纯做一个会回答问题的助手，而是要解决工程领域复杂文档、复杂推理和复杂工具协作的问题。",
    backgroundBody:
      "在工程场景里，关键信息分散在 PDF、嵌套表、跨页表和图纸参数中，传统查阅方式效率低，通用大模型又难以稳定支撑专业级任务。Civil-X 的目标是让模型不仅“会答”，而是真正能进入复杂工程任务链路，完成从信息提取、知识检索到推理与校核的整段闭环。",
    challenges: civilXChallenges,
    decisions: civilXDecisions,
    solutionSections: civilXSolutionSections,
    metrics: civilXMetrics,
    outcomes: civilXOutcomes,
    roleBlocks: civilXRole,
    learning: civilXLearning
  },
  "engineering-data-ops": {
    slug: "engineering-data-ops",
    heroEyebrow: "Case Study 02",
    heroTitle: "工程数据智能运营中台",
    heroSubtitle: "基于 LUI 的对话式数据中台，面向自然语言取数、异常分析与报告生成。",
    heroSummary:
      "针对传统工程管理系统资料分散、数据难利用、取数依赖研发、分析响应慢等痛点，我负责推动原有资料存储后台向智能运营中台升级。围绕数据资产化、自然语言取数、异常分析与报告生成等场景，构建基于 LUI 的智能运营中台，让系统从“被动存储”升级为“主动洞察”。",
    role: "产品经理",
    timeline: "2025.06 - 至今",
    caseType: "Production Case",
    capabilityScope: ["数据资产化", "语义层建设", "自然语言取数", "异常归因", "报告自动化"],
    backgroundIntro: "这个项目的核心不是再做一个 BI 页面，而是让工程业务人员在不依赖研发的前提下，更快完成数据获取、问题识别与经营表达。",
    backgroundBody:
      "原有工程管理系统更多承担资料存储和流程记录功能，数据分散在多个模块里，业务想做跨模块取数和分析时往往要排队找研发。这个项目的目标是把底层数据资产和语义层先梳理清楚，再用 LUI 与 NL2SQL 把查询、分析、归因和报告生成连成一条更主动的运营链路。",
    challenges: engineeringDataOpsChallenges,
    decisions: engineeringDataOpsDecisions,
    solutionSections: engineeringDataOpsSolutionSections,
    metrics: engineeringDataOpsMetrics,
    outcomes: engineeringDataOpsOutcomes,
    roleBlocks: engineeringDataOpsRole,
    learning: engineeringDataOpsLearning
  }
};
