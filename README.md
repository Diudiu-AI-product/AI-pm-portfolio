# AI 产品经理作品集网站

这是我的个人作品集网站仓库，主要用于展示 AI 产品经理方向的项目案例、产品判断与落地实践。

相比只罗列简历信息，我更希望通过一个可访问、可浏览、可展开的作品集，把下面这些问题讲清楚：

- 我如何定义问题
- 我如何判断该用什么 AI 方案
- 我如何把复杂能力组织成可落地的产品 Workflow
- 我如何用结果指标和评测闭环验证产品是否有效

## 在线访问

- GitHub Profile: [Diudiu-AI-product](https://github.com/Diudiu-AI-product)
- Portfolio Website: [aipmportfolio.vercel.app](https://aipmportfolio.vercel.app/)

## 这个仓库包含什么

这个仓库本身是我的个人项目网站，当前重点展示两类内容：

- `Production Case`
  - 更偏真实业务场景、产品定义、方案判断与落地结果
- `Prompt / Experiment`
  - 更偏表达实验、提示词资产化与交互原型

## 当前重点展示的项目

### 1. Civil-X

面向工程复杂任务的 AI closed-loop solving platform。

这个项目重点想表达的不是“做了一个会回答问题的助手”，而是如何围绕资料解析、知识增强、Multi-Agent 协作、仿真调用与评测反馈，设计一个能够真正完成复杂任务的 Agent Workflow。

### 2. 工程数据智能运营中台

围绕统一数据视图、`NL2SQL`、异常归因与报告自动化，推动工程管理系统从被动存储升级为主动洞察。

这个项目重点体现的是：AI 产品并不只是把自然语言接进系统，更关键的是数据资产化、语义层建设、分析链路稳定性，以及人和系统之间的协作方式。

## 其他 vibe coding 项目

除了作品集网站里重点展开的 `production case`，我也会持续做一些偏 `vibe coding`、偏原型验证、偏产品工作流探索的项目。

### 1. Travel Agent

一个围绕真实企业差旅场景构建的 AI Agent 项目，覆盖制度问答、`RAG Retrieval`、行程规划、差标校验与前端工作台展示。

它想表达的重点不是单点问答，而是一条更完整的企业差旅助手链路。

### 2. 个人项目网站

也就是当前这个仓库本身。

它既是我的线上作品集，也是我用来持续打磨项目表达、交互结构、案例呈现方式的产品化实验场。

### 3. 智能客服 Copilot 原型

一个面向对话式电商场景的 AI 智能客服原型，重点围绕意图识别、上下文记忆、议价策略、人工接管与安全边界展开。

它不是单纯的自动回复脚本，而是一个偏产品视角的客服 Workflow 原型。

## 我希望这个仓库呈现出的能力

- 能围绕真实业务问题定义 AI 产品
- 能理解 `RAG`、`Agent`、`NL2SQL` 等方案的适用边界
- 能把复杂能力抽象成可执行、可验证的 Workflow
- 能同时关注产品表达、交互结构与落地可行性

## 技术栈

- React
- Vite
- TypeScript
- React Router
- Vercel

## 本地运行

```bash
npm install
npm run dev
```

## 测试与构建

```bash
npm test
npm run build
```

## 部署

当前项目适合以静态站形式部署到 Vercel。

由于使用了前端路由，仓库根目录已包含 `vercel.json`，用于处理 SPA 路由重写，保证直接访问 `/projects/civil-x` 这类路径时不会返回 404。

## 目录结构

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

## 备注

这个仓库优先服务于作品展示与线上访问，因此我会持续优化：

- 首页的信息密度与视觉表达
- 项目案例的复盘结构
- Prompt / Experiment 的展示方式
- 更适合 AI 产品经理投递场景的作品集叙事
