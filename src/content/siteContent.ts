import type { CaseStudyContent, Metric, ProjectSummary, TextBlock } from "../types/content";

const civilXProjectMetrics: Metric[] = [
  { value: "60% -> 95%", label: "字段解析准确率" },
  { value: "数天 -> 15 分钟", label: "方案比选效率" },
  { value: "500+", label: "评测场景" }
];

const dataOpsProjectMetrics: Metric[] = [
  { value: "150+", label: "业务实体" },
  { value: "-30%", label: "交付周期" },
  { value: "+70%", label: "决策响应" }
];

const diudiuProjectMetrics: Metric[] = [
  { value: "5", label: "工作流模块" },
  { value: "前后端", label: "可运行原型" },
  { value: "RAG 支撑", label: "依据闭环" }
];

const autoAgentProjectMetrics: Metric[] = [
  { value: "4", label: "核心界面" },
  { value: "AI + Human", label: "协同闭环" },
  { value: "Queue -> Publish", label: "运营链路" }
];

export const projects: ProjectSummary[] = [
  {
    slug: "civil-x",
    title: "Civil-X",
    eyebrow: "正式项目",
    category: "production",
    subtitle: "面向超长工程文档解析、专业问答与复杂推理的垂域 AI 平台。",
    summary:
      "负责 Civil-X 从 0 到 1 的产品定义与业务落地，围绕结构化抽取、证据检索、多智能体推理和评测闭环建立工程智能体能力。",
    positioning:
      "面向工程行业超长文档理解、专业问答和复杂计算等高门槛场景，推动 AI 从“能回答”升级为“能完成复杂任务闭环”。",
    question:
      "工程资料非结构化、复杂推理链路易偏移、专业知识检索缺少证据链，导致高门槛任务难以稳定规模化提效。",
    judgement:
      "关键不是做一个会回答问题的助手，而是把文档解析、GraphRAG 检索、多智能体推理、模型对齐和自动化评测编排成可执行的 Agent Workflow。",
    output:
      "实现核心参数提取准确率 60% -> 95%，NDCG@10 提升 35%，核心数值输出准确性提升 40%，并通过 500+ 场景 Golden Dataset 支撑垂直规范场景泛化能力提升 30%。",
    metrics: civilXProjectMetrics,
    tags: [
      { label: "LayoutLMv3" },
      { label: "GraphRAG" },
      { label: "LangGraph" },
      { label: "Neo4j" },
      { label: "Ragas" },
      { label: "SFT / DPO" },
      { label: "BGE-M3 + BM25" }
    ],
    featured: true,
    featuredOrder: 1,
    signal: "document",
    detailPath: "/projects/civil-x",
    role: "产品经理",
    period: "2024.11 - 至今",
    selectedEvidence:
      "0 到 1 产品规划 / LangGraph 多智能体 / 评测闭环",
    modalTitle: "工程垂域 AI 平台",
    modalSummary: "把长文档解析、证据检索、复杂推理和评测反馈组织成同一条工程任务闭环。",
    pillars: ["文档结构化抽取", "GraphRAG 检索", "多智能体推理", "SFT / DPO", "自动化评测"]
  },
  {
    slug: "engineering-data-ops",
    title: "工程数据智能运营中台",
    eyebrow: "正式项目",
    category: "production",
    subtitle: "面向工程施工 G 端场景的一体化数字化管理平台升级，支持模块化配置、智能取数与运营优化。",
    summary:
      "负责推动工程施工数字化管理平台向智能运营中台升级，围绕组件化建模、Schema 语义映射、SQL 自动生成与运营优化建立产品能力。",
    positioning:
      "针对施工现场业务不标准、需求变更频繁、数据异常与决策取数门槛高等痛点，推动原有工程管理系统从流程记录工具升级为可配置、可分析、可持续演进的平台。",
    question:
      "如何在高定制、高变更的 G 端工程场景里，既保持系统可配置与数据一致性，又让 AI 能真正进入业务决策链路？",
    judgement:
      "关键不是孤立做一个 NL2SQL 功能，而是先完成模块化架构、业务实体解耦和 Schema 语义映射，再把智能取数、指标运营和灰度上线组织成一套可演进系统。",
    output:
      "完成 150+ 业务实体解耦与配置化建模，将业务交付周期缩短 30%；通过工程垂域 Schema 语义映射与 Few-shot SQL 自动生成，使政务决策响应效率提升约 70%；上线后驱动系统 DAU 同比增长 200%，核心功能留存提升 35%。",
    metrics: dataOpsProjectMetrics,
    tags: [
      { label: "模块化架构" },
      { label: "NL2SQL" },
      { label: "150+业务实体" },
      { label: "Schema 语义映射" },
      { label: "Few-shot SQL" },
      { label: "A/B Testing" },
      { label: "灰度发布" }
    ],
    featured: true,
    featuredOrder: 2,
    signal: "dashboard",
    detailPath: "/projects/engineering-data-ops",
    role: "产品经理",
    period: "2025.06 - 至今",
    selectedEvidence:
      "150+ 实体建模 / Schema 语义映射 / SQL 自动生成 / 灰度上线",
    modalTitle: "工程施工数字化平台升级",
    modalSummary: "把组件化建模、智能取数、指标优化和灰度迁移组织成同一条平台升级路径。",
    pillars: ["组件化建模", "Schema 语义映射", "SQL 自动生成", "指标运营优化", "灰度迁移"]
  },
  {
    slug: "diudiu-enterprise-travel-assistant",
    title: "Diudiu Enterprise Travel Assistant",
    eyebrow: "原型项目",
    category: "prototype",
    subtitle:
      "面向企业差旅场景的 AI 助手原型，覆盖制度问答、行程规划、合规提醒、票据解析与依据回溯。",
    summary:
      "一个把碎片化差旅制度解读、出行规划、合规检查和票据理解串成完整工作流的垂直 AI 助手原型。",
    positioning:
      "这不是再做一个通用聊天框，而是验证企业差旅里的制度理解、行程建议、合规提示和依据回溯如何组合成一条可运行的产品闭环。",
    question:
      "差旅规则分散在制度文档和审批流程里，员工会反复问高频问题，而真正有用的回答还需要同时带上制度依据、行程上下文和清晰的风险提醒。",
    judgement:
      "核心判断不是做一个泛助手，而是做一个工作流产品：把制度检索、行程推理、票据解析、合规提示和依据返回组织成可信的一次交互闭环。",
    output:
      "交付了一个前后端可运行的企业差旅助手原型，打通五个能力模块、依据支撑的制度回答、票据到行程的上下文衔接，并为后续供应商与审批集成预留了产品化空间。",
    metrics: diudiuProjectMetrics,
    tags: [
      { label: "制度问答" },
      { label: "行程规划" },
      { label: "合规检查" },
      { label: "票据解析" },
      { label: "依据回溯" }
    ],
    featured: true,
    featuredOrder: 3,
    signal: "assistant",
    detailPath: "/projects/diudiu-enterprise-travel-assistant",
    role: "产品经理",
    period: "2026.04 - 2026.05",
    selectedEvidence: "差旅工作流 / 可运行原型 / 依据支撑回答",
    modalTitle: "企业差旅工作流助手",
    modalSummary:
      "一个把制度理解、行程规划、合规提醒、票据解析和依据回溯组织进同一工作流的企业差旅助手原型。",
    pillars: ["制度问答", "行程规划", "合规检查", "票据解析", "依据回溯"]
  },
  {
    slug: "auto-agent",
    title: "电商智能客服",
    eyebrow: "原型项目",
    category: "prototype",
    subtitle:
      "面向电商客服场景的 AI 客服协同工作台原型，覆盖多会话处理、风险识别、人工接管与策略发布。",
    summary:
      "这个项目把 AI 放进真实客服工作流，而不是只做一个会聊天的窗口；让队列调度、回复建议、风险分流与运营发布在同一工作台里闭环。",
    positioning:
      "它验证的不是客服机器人能不能回答，而是 AI 如何在多会话、高风险、强流程约束的客服系统里成为可控协作者。",
    question:
      "真实客服团队同时面对咨询、售后、争议和高风险投诉时，AI 应该在什么环节介入、如何辅助人工，以及何时必须让位给人工？",
    judgement:
      "关键不是把模型接进聊天框，而是把会话优先级、意图识别、风险判定、人工接管和策略发布组织成一套可治理的运营工作台。",
    output:
      "交付了一个可独立运行的 Frontend-first 原型，串起工作台首页、对话中心、AI 配置台和系统设置四个模块，并保留 Prompt、Evaluation 与 Python 编排探索。",
    metrics: autoAgentProjectMetrics,
    tags: [
      { label: "多会话队列" },
      { label: "风险识别" },
      { label: "人工接管" },
      { label: "策略发布" },
      { label: "知识校验" }
    ],
    featured: true,
    featuredOrder: 4,
    signal: "dashboard",
    role: "产品经理",
    period: "2026.05",
    selectedEvidence: "多会话工作台 / 风险分流 / 策略发布",
    modalTitle: "电商智能客服",
    modalSummary:
      "把多会话处理、AI 回复建议、风险升级和运营发布收拢到同一套客服协同界面里。",
    pillars: ["队列调度", "回复建议", "风险分流", "人工接管", "策略发布"]
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
  { value: "+35%", label: "NDCG@10" },
  { value: "+40%", label: "核心数值输出准确性" },
  { value: "500+", label: "Golden Dataset 场景" },
  { value: "千条级", label: "SFT 精调数据" },
  { value: "+30%", label: "垂直规范场景泛化能力" }
];

export const civilXChallenges: TextBlock[] = [
  {
    title: "超长工程文档难以稳定解析",
    body: "工程资料中同时存在超长文档、嵌套表和跨页表，关键参数提取链路不稳定，直接影响后续检索和问答质量。"
  },
  {
    title: "复杂工程推理容易中途偏移",
    body: "工程计算往往需要多步语义解析、逻辑推理和结果校核，单体模型在长链路任务里很容易出现推理漂移。"
  },
  {
    title: "专业知识检索缺少可追溯证据链",
    body: "如果检索层只返回片段答案而缺少实体关联和证据重排，专业问答就很难真正被业务信任。"
  },
  {
    title: "模型优化缺少持续闭环机制",
    body: "没有精调数据、偏好优化和自动化评测协同推进时，模型很难在垂直规范场景里持续迭代和稳定泛化。"
  }
];

export const civilXDecisions: TextBlock[] = [
  {
    title: "先把文档结构化抽取做扎实",
    body: "主导 Layout-Aware 解析方案设计，推动基于 LayoutLMv3 的 PDF 嵌套表与跨页表结构化抽取落地，让后续链路有稳定输入。"
  },
  {
    title: "把检索能力做成可追溯证据链",
    body: "搭建 GraphRAG 实体关联检索架构，并采用 BGE-M3 + BM25 混合检索与 Cross-Encoder 重排，提升复杂问答的相关性与可解释性。"
  },
  {
    title: "用多智能体闭环承接复杂工程推理",
    body: "基于 LangGraph 设计状态机调度的分布式智能体集群，把专家经验沉淀为 SOP 工作流，并通过 Self-Reflection 降低推理偏移。"
  },
  {
    title: "把微调、偏好优化和评测一起产品化",
    body: "主导千条级工程精调数据建设，推动 LoRA SFT、DPO 与 Ragas 自动化评测协同落地，形成用户反馈到模型迭代的产品闭环。"
  }
];

export const civilXSolutionSections = [
  {
    title: "Five Core Functions",
    items: [
      {
        title: "文档结构化抽取",
        body: "通过 Layout-Aware 解析方案处理 PDF 嵌套表和跨页表，解决复杂工程资料难抽取、难复用的问题。"
      },
      {
        title: "GraphRAG 证据检索",
        body: "基于 Neo4j 的实体关联检索组织知识结构，并通过混合检索与重排提升复杂专业问答的命中率和可追溯性。"
      },
      {
        title: "多智能体协同推理",
        body: "通过 LangGraph 状态机调度语义解析、逻辑推理和自我校验环节，把复杂工程计算拆成可控闭环。"
      },
      {
        title: "SFT / DPO 对齐优化",
        body: "基于千条级工程数据集推进 LoRA 指令微调与 DPO 偏好优化，增强模型对专业术语、逻辑表达和行业规范的对齐能力。"
      },
      {
        title: "评测与反馈闭环",
        body: "搭建基于 Ragas 的多维自动化评测体系，用 500+ 场景 Golden Dataset 持续监控召回率、忠实度和幻觉率等关键指标。"
      }
    ]
  },
  {
    title: "Parsing And Retrieval Layer",
    items: [
      {
        title: "LayoutLMv3 结构化抽取",
        body: "围绕 PDF 嵌套表和跨页表设计 Layout-Aware 解析链路，推动参数提取准确率从 60% 提升到 95%。"
      },
      {
        title: "GraphRAG + 混合检索 + 重排",
        body: "采用 Neo4j 实体关联检索、BGE-M3 + BM25 混合召回和 Cross-Encoder 对 Top-50 结果精排，推动 NDCG@10 提升 35%。"
      }
    ]
  },
  {
    title: "Reasoning And Iteration Loop",
    items: [
      {
        title: "LangGraph 状态机与自反思机制",
        body: "把复杂工程计算拆成语义解析、逻辑推理、自我校验三段闭环，通过状态机调度和 Self-Reflection 解决推理偏移问题。"
      },
      {
        title: "LoRA / DPO / Ragas 闭环迭代",
        body: "通过精调数据集、偏好优化与自动化评测协同推进，形成用户反馈、专家校对和模型迭代的持续优化链路。"
      }
    ]
  }
];

export const civilXOutcomes: TextBlock[] = [
  {
    title: "结构化抽取能力显著提升",
    body: "基于 LayoutLMv3 的 Layout-Aware 解析方案落地后，PDF 嵌套表与跨页表中的核心参数提取准确率由 60% 提升到 95%。"
  },
  {
    title: "检索相关性与证据可追溯性同步增强",
    body: "GraphRAG、BGE-M3 + BM25 混合检索与 Cross-Encoder 重排组合落地后，NDCG@10 提升 35%，问答结果的证据链也更清晰可追溯。"
  },
  {
    title: "复杂工程推理准确性更稳定",
    body: "通过 LangGraph 状态机调度与 Self-Reflection 自反思机制，单体模型在复杂工程计算中的推理偏移被显著压缩，核心数值输出准确性提升 40%。"
  },
  {
    title: "模型回答更贴合专业术语与行业规范",
    body: "通过千条级工程领域精调数据、LoRA 指令微调和 DPO 偏好优化，模型在术语理解、逻辑严密性和行业规范符合度上明显提升。"
  },
  {
    title: "自动化评测支撑持续泛化",
    body: "搭建基于 Ragas 的多维自动化评测体系，并构建 500+ 场景 Golden Dataset，量化监控召回率、忠实度和幻觉率等指标，推动垂直规范场景泛化能力提升 30%。"
  }
];

export const civilXRole: TextBlock[] = [
  {
    title: "产品定义与技术路线收敛",
    body: "负责从 0 到 1 定义 Civil-X 的核心场景、产品边界和落地路径，把长文档解析、专业问答和复杂推理收敛为统一产品目标。"
  },
  {
    title: "多智能体、检索与微调方案推进",
    body: "主导 LangGraph 多智能体、GraphRAG 检索、LoRA SFT 与 DPO 的产品化方案设计，协同算法、研发和业务专家完成落地。"
  },
  {
    title: "评测闭环与持续迭代",
    body: "搭建基于 Ragas 的自动化评测体系和 Golden Dataset，把用户反馈、专家校对和指标监控串成持续优化机制。"
  }
];

export const civilXLearning: TextBlock[] = [
  {
    title: "垂直 AI 产品先要解决知识结构化",
    body: "如果文档解析和知识组织做不稳，后面的问答、推理和评测都会建立在不可靠输入之上。"
  },
  {
    title: "复杂工程任务必须依赖可控工作流",
    body: "面对多步推理和高专业门槛任务，单次生成式回答不够，必须通过状态机、SOP 和自校验机制把推理过程管起来。"
  },
  {
    title: "模型优化要和评测、反馈一起设计",
    body: "SFT、DPO 和 Ragas 评测不是彼此独立的技术点，真正有价值的是把它们组织成持续可验证的产品迭代闭环。"
  }
];

export const engineeringDataOpsMetrics: Metric[] = [
  { value: "150+", label: "业务实体建模" },
  { value: "-30%", label: "业务交付周期" },
  { value: "+70%", label: "决策响应效率" },
  { value: "+200%", label: "系统 DAU" },
  { value: "+35%", label: "核心功能留存" },
  { value: "灰度验证", label: "迁移上线策略" }
];

export const engineeringDataOpsChallenges: TextBlock[] = [
  {
    title: "G 端需求高变且定制化程度高",
    body: "政务与工程施工场景需求变动频繁，如果底层架构不够模块化，每次变更都会拖慢交付节奏并放大维护成本。"
  },
  {
    title: "现场业务不标准，数据链路复杂",
    body: "审批、监管、巡检和资料管理等流程横跨多个模块，业务不标准、数据异常和弱网环境叠加，系统很难天然保持一致。"
  },
  {
    title: "决策层取数门槛高、响应慢",
    body: "跨模块查询和经营分析往往依赖研发写 SQL，业务问题到结果之间链路长，决策层很难及时获得可用信息。"
  },
  {
    title: "高不确定性技术攻坚影响系统迁移",
    body: "像非结构化数据合规性校验这类问题存在较强不确定性，如果没有分阶段交付与灰度验证机制，大规模系统上线风险会很高。"
  }
];

export const engineeringDataOpsDecisions: TextBlock[] = [
  {
    title: "先把通用业务逻辑做成组件化工具包",
    body: "把复杂的工程审批与现场监管流程抽象为标准化 SOP 工具包，先解决高变更场景下的复用与扩展问题。"
  },
  {
    title: "用 150+ 业务实体解耦支撑配置化建模",
    body: "围绕业务对象、流程状态和数据口径做逻辑解耦与配置化建模，在保障数据一致性的前提下提升系统适配效率。"
  },
  {
    title: "把智能取数建立在 Schema 语义映射之上",
    body: "先把底层数据库字段转换成业务语义，再通过 Few-shot Prompt 驱动 SQL 自动生成，而不是直接把自然语言问题丢给模型。"
  },
  {
    title: "把指标运营和灰度验证纳入产品机制",
    body: "通过 SQL 埋点、漏斗分析、A/B Test 与分阶段交付机制，把体验优化和系统迁移都放进可持续验证的产品闭环。"
  }
];

export const engineeringDataOpsSolutionSections = [
  {
    title: "Core Capability Stack",
    items: [
      {
        title: "通用业务逻辑组件化",
        body: "把复杂的审批与监管流程沉淀为可复用的标准化 SOP 工具包，让高变更需求不必每次都从底层重做。"
      },
      {
        title: "150+ 业务实体配置化建模",
        body: "通过业务实体解耦与配置化建模处理多模块、多流程的数据结构差异，在扩展场景时仍能保持数据一致性。"
      },
      {
        title: "工程垂域 Schema 语义层",
        body: "把底层数据库字段转换成业务可理解的语义描述，让后续智能取数和分析建立在统一口径之上。"
      },
      {
        title: "Few-shot SQL 自动生成",
        body: "通过 Prompt 策略驱动 SQL 自动生成，支撑决策层以更低门槛完成跨模块取数和核心经营指标查询。"
      },
      {
        title: "弱网同步与全链路管控",
        body: "围绕施工现场弱网、数据异常和流程执行不一致等问题补齐平台控制能力，让系统更接近真实工程场景。"
      }
    ]
  },
  {
    title: "Decision And Analysis Loop",
    items: [
      {
        title: "Schema 语义映射 + SQL 自动生成",
        body: "围绕工程垂域 Schema 建立语义映射层，再通过 Few-shot Prompt 策略驱动 SQL 自动生成，使智能取数可解释、可迭代。"
      },
      {
        title: "指标体系、埋点与漏斗分析",
        body: "通过 SQL 全链路数据回溯、用户行为分析与转化漏斗定位体验短板，把问题识别从感受判断变成数据验证。"
      }
    ]
  },
  {
    title: "Delivery And Governance Layer",
    items: [
      {
        title: "A/B Test 与流程自动化改造",
        body: "通过实验验证不同交互策略对用户采纳率的影响，再用流程自动化改造解决实际业务阻塞点。"
      },
      {
        title: "分阶段交付与灰度验证",
        body: "在高不确定性技术攻坚和大规模系统迁移场景里，先收敛需求，再通过灰度验证和快速迭代保障平稳上线。"
      }
    ]
  }
];

export const engineeringDataOpsOutcomes: TextBlock[] = [
  {
    title: "150+ 业务实体建模支撑高变更场景",
    body: "通过业务实体的逻辑解耦与配置化建模，在保障数据一致性的前提下，为后续多场景扩展和快速交付打下稳定基础。"
  },
  {
    title: "业务交付周期缩短 30%",
    body: "通用业务逻辑组件化设计落地后，面对定制化程度高、需求波动大的政务工程场景，整体业务交付效率明显提升。"
  },
  {
    title: "决策层取数响应效率提升约 70%",
    body: "通过工程垂域 Schema 语义映射和 Few-shot SQL 自动生成，决策层获取关键经营信息的门槛和等待时间都显著下降。"
  },
  {
    title: "核心活跃与留存双增长",
    body: "基于全链路指标体系、埋点分析和 A/B Test 持续优化交互路径后，系统 DAU 同比增长 200%，核心功能留存提升 35%。"
  },
  {
    title: "复杂系统迁移保持平稳上线",
    body: "在处理非结构化数据合规性校验等高不确定性问题时，通过分阶段交付、灰度验证和快速迭代策略，保障了大规模业务系统的平稳迁移与 AI 能力渗透。"
  }
];

export const engineeringDataOpsRole: TextBlock[] = [
  {
    title: "平台升级方向定义",
    body: "负责推动原有工程施工数字化管理平台向智能运营中台升级，明确模块化配置、智能取数和运营优化的核心场景。"
  },
  {
    title: "模块化与智能能力方案设计",
    body: "主导组件化架构、150+ 业务实体配置建模、Schema 语义层与 Few-shot SQL 自动生成等关键方案设计，并协调研发落地。"
  },
  {
    title: "指标验证与平稳上线推进",
    body: "围绕交付周期、决策响应、活跃留存和迁移风险持续验证效果，推动 A/B Test、灰度发布与分阶段交付机制迭代。"
  }
];

export const engineeringDataOpsLearning: TextBlock[] = [
  {
    title: "高变更 G 端场景先要解决架构可配置性",
    body: "如果底层业务逻辑不能组件化、配置化，再多智能能力也会被频繁定制和维护成本拖住。"
  },
  {
    title: "智能取数的前提是 Schema 语义清晰",
    body: "只有先把底层字段转换成业务语义，SQL 自动生成才可能在真实决策场景里稳定可用。"
  },
  {
    title: "AI 渗透传统系统必须依赖灰度机制",
    body: "面对复杂系统迁移和高不确定性技术问题，分阶段交付、灰度验证和快速反馈比一次性大改更可靠。"
  }
];

export const diudiuTravelAssistantMetrics: Metric[] = [
  { value: "5", label: "工作流模块" },
  { value: "前后端可运行", label: "原型形态" },
  { value: "依据支撑", label: "回答方式" },
  { value: "票据 -> 行程", label: "上下文衔接" }
];

export const diudiuTravelAssistantChallenges: TextBlock[] = [
  {
    title: "差旅制度理解是碎片化的",
    body: "企业差旅规则、审批提醒和报销要求分散在制度文档与内部流程知识里，员工很难一次找到完整答案。"
  },
  {
    title: "真正有用的回答不止是一轮对话",
    body: "员工并不只是想问一个制度条款，他们通常还需要下一步建议、行程组织方式和风险提醒一起出现。"
  },
  {
    title: "票据内容和后续规划是断开的",
    body: "即使员工上传了票据截图，通用助手也不会自然把它转成结构化差旅上下文，供后续推荐继续使用。"
  },
  {
    title: "可信度取决于依据，不取决于语气",
    body: "在企业场景里，回答必须带来源依据和清晰的风险提醒。没有制度支撑的“好听回答”依然不够可信。"
  }
];

export const diudiuTravelAssistantDecisions: TextBlock[] = [
  {
    title: "做工作流产品，而不是再套一个聊天壳子",
    body: "整个产品被定义成一条闭环：把制度检索、行程建议、合规提示、票据解析和依据返回组织到一次连续交互里。"
  },
  {
    title: "让原型保持产品化并且真的可运行",
    body: "这不是静态示意稿，而是用前端工作台加 FastAPI 后端把完整流程跑通，确保这个场景可以端到端演示。"
  },
  {
    title: "把依据当成一级输出",
    body: "制度回答必须主动展示匹配依据，因为对内部企业工具来说，可追溯性本身就是产品价值的一部分。"
  },
  {
    title: "把上传票据当成工作流上下文",
    body: "票据解析被产品化成输入桥梁，让后续行程建议能够继承出发地、目的地、时间和交通方式等关键信息。"
  }
];

export const diudiuTravelAssistantSolutionSections = [
  {
    title: "闭环能力设计",
    items: [
      {
        title: "制度问答",
        body: "围绕差旅制度材料回答企业内部问题，而不是依赖没有依据的自由生成式回复。"
      },
      {
        title: "行程规划",
        body: "把出行意图和票据解析后的上下文转成下一步行程建议，而不是停在制度解释层面。"
      },
      {
        title: "合规检查",
        body: "把审批、预算、报销和例外提醒嵌进交互里，让助手更像一个懂制度边界的差旅协作工具。"
      },
      {
        title: "票据解析",
        body: "从上传的票据图片中提取出发地、目的地、发车时间和交通类型，让后续推荐建立在真实差旅上下文上。"
      },
      {
        title: "依据回溯",
        body: "在回答里返回最相关的制度依据，让用户可以把结论追溯回真实规则。"
      }
    ]
  },
  {
    title: "原型栈",
    items: [
      {
        title: "React 工作台前端",
        body: "原型不是一个裸表单 Demo，而是一个产品化工作台，把快捷提问、对话、上传、助手状态和依据展示组织在同一界面里。"
      },
      {
        title: "FastAPI 编排层",
        body: "后端把健康检查、对话、文档接入、检索和附件解析拆成独立 API，让工作流可以继续向更完整的服务形态演进。"
      },
      {
        title: "RAG 与依据闭环",
        body: "检索层被定义为制度 grounding 的基础能力，让依据展示成为交互本身的一部分，而不是隐藏的实现细节。"
      },
      {
        title: "附件到行程的桥接",
        body: "票据解析结果会回流到后续规划步骤，验证文档理解如何继续影响剩余的用户流程。"
      }
    ]
  }
];

export const diudiuTravelAssistantOutcomes: TextBlock[] = [
  {
    title: "完成了完整的差旅工作流原型",
    body: "这个项目证明了制度解读、行程建议、合规提醒、票据解析和依据返回可以被组织进同一个助手体验里。"
  },
  {
    title: "把原型做成了前后端都可运行的形态",
    body: "结果不是只能讲故事的概念稿，而是一个职责清晰、可实际演示的 UI + API + 检索原型。"
  },
  {
    title: "验证了票据解析可以成为产品上下文",
    body: "上传的差旅票据现在不只是附件，而是会继续影响后续规划和合规回答的结构化输入。"
  },
  {
    title: "把可信度包装进了回答格式里",
    body: "原型会主动展示依据和服务状态，让整个交互更接近真实内部工具，而不是通用 AI 演示。"
  }
];

export const diudiuTravelAssistantRole: TextBlock[] = [
  {
    title: "场景定义与范围收敛",
    body: "我把项目明确成企业差旅垂直工作流，而不是一个面向泛用户的出行助手。"
  },
  {
    title: "能力拆解",
    body: "我把体验拆成制度问答、行程规划、合规提示、票据解析和依据回溯五个产品模块。"
  },
  {
    title: "原型产品化组织",
    body: "我把原型组织成前端工作台加服务支撑的工作流，而不是一个割裂的 UI 壳子。"
  },
  {
    title: "案例化包装",
    body: "我把这个独立原型整理成作品集里的代表项目，让它有清晰的产品叙事、系统表达和结果呈现。"
  }
];

export const diudiuTravelAssistantLearning: TextBlock[] = [
  {
    title: "企业助手更需要工作流闭环",
    body: "最好的体验不是把聊天做得更宽，而是把制度理解、规划、解析和依据返回串成一条完整闭环。"
  },
  {
    title: "可信度本身就是交互设计决策",
    body: "依据回溯和合规提示不是技术附加项，它们是让原型真正站得住的关键组成部分。"
  },
  {
    title: "好的原型需要表达清楚产品判断",
    body: "这个项目的价值不只在于它能跑起来，更在于它清楚地表达了这个场景应该如何被产品化。"
  }
];

export const autoAgentMetrics: Metric[] = [
  { value: "4", label: "核心界面" },
  { value: "AI + Human", label: "协同模式" },
  { value: "SLA / Risk", label: "调度信号" },
  { value: "Draft -> Publish", label: "策略闭环" }
];

export const autoAgentChallenges: TextBlock[] = [
  {
    title: "真实客服不是单会话问答",
    body: "客服团队会同时面对咨询、催发货、售后争议和高风险投诉，真正困难的是在密集队列里判断先处理什么，而不是只生成一句回复。"
  },
  {
    title: "AI 介入必须带着风险判断",
    body: "不是所有会话都适合自动建议或自动回复，平台处罚、退款争议和情绪升级场景需要更明确的风险识别与人工兜底。"
  },
  {
    title: "上下文分散在多个运营面板里",
    body: "商品信息、订单状态、历史对话、售后规则和内部策略往往分散存在，坐席切屏查找的成本很高，也难以让 AI 稳定获得完整背景。"
  },
  {
    title: "策略变更也需要产品化治理",
    body: "Prompt 或规则更新不应该停留在开发侧，而应该具备草稿、验证、发布和回滚意识，才能接近真实业务系统。"
  }
];

export const autoAgentDecisions: TextBlock[] = [
  {
    title: "把项目定义成客服协同工作台",
    body: "我没有把它做成单一聊天窗口，而是围绕队列调度、会话处理、知识校验和策略发布组织成一套多面板工作台。"
  },
  {
    title: "让 AI 成为坐席 Copilot",
    body: "AI 给出建议回复、风险信号和处理依据，但关键动作仍然保留人工接管与升级入口，保证高风险场景可控。"
  },
  {
    title: "把运营治理也纳入产品链路",
    body: "除了前台会话处理，我把 AI 配置台和系统设置一起纳入原型，表达策略验证、发布控制与权限边界同样是系统的一部分。"
  },
  {
    title: "用 Frontend-first 展示完整产品叙事",
    body: "公开版本以高完成度前端演示为核心，同时保留 Prompt、Eval 与 Python 编排探索，让作品不只停留在界面层。"
  }
];

export const autoAgentSolutionSections = [
  {
    title: "协同工作台设计",
    items: [
      {
        title: "工作台首页",
        body: "集中呈现队列压力、风险积压、高优先级任务和快捷入口，让坐席先看到应该处理什么。"
      },
      {
        title: "对话中心",
        body: "把多会话队列、当前会话详情、AI 建议回复和人工接管动作收拢在同一界面里。"
      },
      {
        title: "AI 配置台",
        body: "让知识命中、策略变更、草稿验证和发布准备具备可视化治理入口，而不是藏在代码里。"
      },
      {
        title: "系统设置",
        body: "承接模型路由、渠道接入、权限控制与审计假设，补齐真实系统需要的底层控制面。"
      }
    ]
  },
  {
    title: "AI 介入方式",
    items: [
      {
        title: "队列调度",
        body: "根据等待时长、风险等级、会话状态和负责人等信号判断处理优先级。"
      },
      {
        title: "回复建议",
        body: "让 AI 提供可采纳、可编辑、可拒绝的回复草稿，而不是直接替客服发送。"
      },
      {
        title: "风险升级",
        body: "在高风险、低置信度或争议升级场景里，明确把人工接管和升级工单作为主要出口。"
      },
      {
        title: "知识回流",
        body: "当系统无法稳定命中答案时，把问题沉淀成知识缺口，回流到策略和知识治理流程。"
      }
    ]
  }
];

export const autoAgentOutcomes: TextBlock[] = [
  {
    title: "完成了贴近生产场景的客服协同原型",
    body: "结果不是一个泛化聊天 Demo，而是一套围绕队列、会话、风险与发布治理展开的 AI 客服工作台。"
  },
  {
    title: "把 AI 定义成可控的人工协作者",
    body: "原型强调建议回复、风险判断和人工接管，而不是默认自动化，表达了更贴近真实业务的落地方式。"
  },
  {
    title: "把策略验证与发布也做成产品能力",
    body: "AI 配置台和系统设置让这个项目不仅展示前台体验，也展示策略治理与上线控制如何成为同一系统的一部分。"
  },
  {
    title: "保留了继续演进成服务化系统的接口感",
    body: "仓库同时包含前端演示、Prompt、Eval、Python、Docker 等材料，为后续从原型走向可运行系统留出清晰路径。"
  }
];

export const autoAgentRole: TextBlock[] = [
  {
    title: "场景聚焦",
    body: "我把范围收敛到电商客服协同，而不是泛客服聊天机器人，确保产品叙事围绕真实业务压力展开。"
  },
  {
    title: "工作流拆解",
    body: "我把客服处理过程拆成队列调度、对话处理、风险升级、知识回流与策略发布几个清晰模块。"
  },
  {
    title: "原型表达",
    body: "我用高完成度的前端工作台去承载系统思考，让 AI 如何进入业务流程这件事被看得见。"
  },
  {
    title: "产品化包装",
    body: "我把 README、截图、文档、Eval 和代码结构一起整理成可以放进作品集的完整案例表达。"
  }
];

export const autoAgentLearning: TextBlock[] = [
  {
    title: "AI 客服的价值不在自动回复本身",
    body: "真正稀缺的是让人工把时间花在最值得处理的会话上，而 AI 需要为这个目标服务。"
  },
  {
    title: "风险治理要和交互设计一起出现",
    body: "人工接管、升级工单、置信度和策略发布不该是隐藏逻辑，它们应该直接出现在产品界面里。"
  },
  {
    title: "好的原型要同时表达前台体验和后台治理",
    body: "如果只做对话窗口，很难说明系统如何运行；把配置、发布和权限一起做出来，产品判断才更完整。"
  }
];

export const caseStudies: Record<string, CaseStudyContent> = {
  "civil-x": {
    slug: "civil-x",
    heroEyebrow: "Case Study 01",
    heroTitle: "Civil-X",
    heroSubtitle: "面向超长工程文档解析、专业问答与复杂推理的垂域 AI 平台。",
    heroSummary:
      "针对工程领域超长文档、嵌套表格及专业问答场景，我负责 Civil-X 从 0 到 1 的产品定义与业务落地，主导推进基于 SFT 领域微调与 LangGraph 多智能体协同架构的垂域 AI 平台建设，让模型从“能回答”升级为“能完成复杂工程任务闭环”。",
    role: "产品经理",
    timeline: "2024.11 - 至今",
    caseType: "Production Case",
    capabilityScope: ["文档结构化抽取", "GraphRAG 证据检索", "LangGraph 多智能体", "SFT / DPO 优化", "Ragas 自动评测"],
    backgroundIntro: "这个项目不是单纯做一个会回答问题的助手，而是要让模型在复杂工程文档、专业知识检索和多步推理里都能稳定工作。",
    backgroundBody:
      "在工程场景里，关键信息往往分散在超长 PDF、嵌套表和跨页表中，传统查阅方式效率低，通用大模型又难以稳定支撑专业级问答与计算任务。Civil-X 的目标不是停留在单次回答，而是把文档结构化抽取、实体关联检索、复杂推理、自我校验和自动化评测串成一条可持续优化的工程智能体闭环。",
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
    heroSubtitle: "面向工程施工 G 端场景的一体化数字化管理平台升级，支持模块化配置、智能取数与运营优化。",
    heroSummary:
      "针对施工现场业务不标准、数据异常、需求变更频繁等行业痛点，我负责推动原有工程施工数字化管理平台向智能运营中台升级。围绕模块化架构、150+ 业务实体配置建模、Schema 语义映射与 SQL 自动生成等关键链路，让系统从“被动记录”升级为“可配置、可分析、可持续演进”的业务平台。",
    role: "产品经理",
    timeline: "2025.06 - 至今",
    caseType: "Production Case",
    capabilityScope: ["组件化建模", "Schema 语义映射", "SQL 自动生成", "指标运营优化", "灰度迁移"],
    backgroundIntro: "这个项目的核心不是再做一个 BI 页面，而是让一个高变更、高定制的工程施工系统既能快速适配业务，又能让 AI 真正进入决策链路。",
    backgroundBody:
      "原有平台更多承担流程记录和资料沉淀功能，但在工程施工 G 端场景下，需求变化快、数据跨模块分散、现场网络条件复杂，系统很难直接支撑业务敏捷交付与管理决策。这个项目的目标不是只补一个取数入口，而是先通过组件化架构和业务实体建模把底层逻辑梳理清楚，再用 Schema 语义映射、Few-shot SQL 自动生成、指标分析与灰度机制，把 AI 能力稳妥地嵌进真实业务系统。",
    challenges: engineeringDataOpsChallenges,
    decisions: engineeringDataOpsDecisions,
    solutionSections: engineeringDataOpsSolutionSections,
    metrics: engineeringDataOpsMetrics,
    outcomes: engineeringDataOpsOutcomes,
    roleBlocks: engineeringDataOpsRole,
    learning: engineeringDataOpsLearning
  },
  "diudiu-enterprise-travel-assistant": {
    slug: "diudiu-enterprise-travel-assistant",
    heroEyebrow: "案例 03",
    heroTitle: "Diudiu Enterprise Travel Assistant",
    heroSubtitle:
      "一个面向企业差旅场景的可运行 AI 助手原型，覆盖制度问答、行程规划、合规提醒、票据解析和依据回溯。",
    heroSummary:
      "这个项目把企业差旅支持重新定义成一个工作流问题，而不是聊天问题。原型把制度检索、行程建议、合规提示、票据解析和依据返回组织进一条可运行的完整体验。",
    role: "产品经理",
    timeline: "2026.04 - 2026.05",
    caseType: "原型项目",
    capabilityScope: ["制度问答", "行程规划", "合规检查", "票据解析", "依据回溯"],
    backgroundIntro:
      "这个项目用来验证：当制度解读、差旅规划和文档理解必须一起发生时，一个垂直企业助手应该如何被设计。",
    backgroundBody:
      "在企业差旅场景里，回答不能停在一段制度摘录。员工通常还需要下一步行程建议、合规提醒，以及一个带来源依据、值得信任的解释。Diudiu Enterprise Travel Assistant 就是为了验证这条完整交互链路而做的可运行原型，而不是静态概念展示。",
    challenges: diudiuTravelAssistantChallenges,
    decisions: diudiuTravelAssistantDecisions,
    solutionSections: diudiuTravelAssistantSolutionSections,
    metrics: diudiuTravelAssistantMetrics,
    outcomes: diudiuTravelAssistantOutcomes,
    roleBlocks: diudiuTravelAssistantRole,
    learning: diudiuTravelAssistantLearning
  },
  "auto-agent": {
    slug: "auto-agent",
    heroEyebrow: "案例 04",
    heroTitle: "电商智能客服",
    heroSubtitle: "面向电商客服场景的 AI 协同工作台原型，聚焦多会话处理、风险识别、人工接管与策略发布。",
    heroSummary:
      "这个项目验证的不是客服机器人会不会回答，而是 AI 如何在真实客服系统里成为人工坐席的可控协作者。我把队列调度、对话处理、风险升级、知识回流和策略发布组织成一套更接近生产场景的工作台原型。",
    role: "产品经理",
    timeline: "2026.05",
    caseType: "原型项目",
    capabilityScope: ["队列调度", "回复建议", "风险分流", "人工接管", "策略发布"],
    backgroundIntro:
      "这个项目不是做一个更聪明的客服聊天框，而是回答一个更接近业务的问题：当客服团队同时面对大量不同类型会话时，AI 应该如何介入，才能真正提升处理效率并控制风险。",
    backgroundBody:
      "在真实客服场景里，难点通常不在生成一句回复，而在于会话优先级判断、场景分流、风险升级和人工兜底。电商智能客服把这些问题收拢到一个多面板协同工作台里，既展示前台处理流程，也表达后台策略治理应该如何成为产品的一部分。",
    challenges: autoAgentChallenges,
    decisions: autoAgentDecisions,
    solutionSections: autoAgentSolutionSections,
    metrics: autoAgentMetrics,
    outcomes: autoAgentOutcomes,
    roleBlocks: autoAgentRole,
    learning: autoAgentLearning
  }
};
