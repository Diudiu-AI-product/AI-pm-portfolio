# AI-pm-portfolio ✨

AI 产品经理作品集网站，重点展示 `production case`、`agent workflow`、`RAG / NL2SQL` 产品化思路，以及我在真实项目和 `vibe coding` 原型里的产品判断。

相比只罗列简历信息，我更希望通过一个可访问、可浏览、可展开的作品集，把下面几件事讲清楚：

- 我如何定义业务问题
- 我如何判断该用什么 AI 方案
- 我如何把复杂能力组织成可落地的 workflow
- 我如何用结果指标、评测和反馈闭环验证产品是否有效

## 在线访问 🌐

- GitHub Profile: [Diudiu-AI-product](https://github.com/Diudiu-AI-product)
- Portfolio Website: [aipmportfolio.vercel.app](https://aipmportfolio.vercel.app/)

## 这个仓库的定位 🧭

这个仓库是我的作品集主站，负责统一呈现两类内容：

- `Production Case`
  - 更偏真实业务场景、产品定义、方案判断与落地结果
- `Vibe Coding Project`
  - 更偏原型验证、产品 workflow 设计与快速表达能力

它不是单纯的个人主页，更像是我用来组织 AI 产品案例、沉淀表达方式、持续打磨项目叙事的展示入口。

## 当前重点内容 📌

### Production Cases 🏗️

#### 1. Civil-X 🤖

面向超长工程文档解析、专业问答与复杂推理的垂域 AI 平台。

这个项目重点表达的不是“做了一个会回答问题的助手”，而是如何围绕文档结构化抽取、GraphRAG 检索、多智能体推理、模型对齐和自动化评测，设计一个能够真正完成复杂工程任务的闭环 workflow。

#### 2. 工程数据智能运营中台 📊

面向工程施工 G 端场景的一体化数字化管理平台升级，支持模块化配置、智能取数与运营优化。

这个项目重点体现的是：AI 产品并不只是把自然语言接进系统，更关键的是模块化架构、业务实体建模、Schema 语义映射、SQL 自动生成、指标运营和灰度上线机制。

### Vibe Coding Projects ⚡

除了作品集主站里重点展开的 `production case`，我也持续用独立仓库做一些偏 `vibe coding`、偏产品 workflow 验证、偏快速原型表达的项目。

#### 1. [Travel-agent-guide](https://github.com/Diudiu-AI-product/Travel-agent-guide) 🧳

一个面向企业差旅场景的 AI 助手项目，围绕制度问答、行程规划、合规提醒、票据解析与依据回溯组织完整 workflow。

它对应作品集里的差旅助手案例，重点不是单点问答，而是把制度理解、差旅上下文和下一步行动建议串成一条可信的企业差旅协作链路。

#### 2. [ai-customer-service-workbench](https://github.com/Diudiu-AI-product/ai-customer-service-workbench) 🎧

一个面向电商客服场景的 AI 协同工作台原型，聚焦队列分诊、回复建议、风险识别、人工接管与策略发布。

它对应作品集里的电商智能客服案例，重点不是做一个自动回复机器人，而是把 AI 放进真实客服 workflow，让它成为人工坐席的可控协作者。

## 我希望这个仓库呈现出的能力 🧠

- 能围绕真实业务问题定义 AI 产品
- 能理解 `RAG`、`Agent`、`NL2SQL` 等方案的适用边界
- 能把复杂能力抽象成可执行、可验证的 workflow
- 能同时关注产品表达、交互结构与落地可行性
- 能通过原型和独立仓库快速验证产品方向

## 技术栈 🛠️

- React
- Vite
- TypeScript
- React Router
- Vercel

## 本地运行 ▶️

```bash
npm install
npm run dev
```

## 测试与构建 ✅

```bash
npm test
npm run build
```

## 部署 🚀

当前项目以静态站形式部署到 Vercel。

由于使用了前端路由，仓库根目录已包含 `vercel.json`，用于处理 SPA 路由重写，保证直接访问 `/projects/civil-x`、`/projects/engineering-data-ops` 这类路径时不会返回 404。

## 目录结构 🗂️

```text
personal_web/
├─ public/
│  └─ prompt-lab/          # Prompt Lab 相关静态资源
├─ src/
│  ├─ components/          # 通用 UI 与布局组件
│  ├─ content/             # 项目文案、案例内容、Prompt 内容
│  ├─ pages/               # 首页与各项目详情页
│  ├─ routes/              # 路由配置
│  ├─ test/                # 测试初始化
│  ├─ types/               # 类型定义
│  ├─ App.tsx
│  ├─ index.css
│  └─ main.tsx
├─ package.json
├─ vite.config.ts
└─ vercel.json
```

## Notes 📝

这个仓库优先服务于作品展示与线上访问，因此我会持续优化：

- 首页的信息密度与视觉表达
- 项目案例的复盘结构
- vibe coding 项目的入口组织方式
- 更适合 AI 产品经理投递场景的作品集叙事
