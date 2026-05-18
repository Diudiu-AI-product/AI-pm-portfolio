import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

test("renders homepage navigation and featured work cards", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByRole("link", { name: "首页" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "代表项目" })).toBeInTheDocument();
  expect(screen.queryByRole("link", { name: "项目页" })).not.toBeInTheDocument();
  expect(screen.getByRole("link", { name: "查看简历" })).toBeInTheDocument();
  expect(screen.getAllByRole("link", { name: "关于我" }).length).toBeGreaterThan(0);
  expect(screen.getByRole("button", { name: "代表项目：Civil-X" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "代表项目：工程数据智能运营中台" })).toBeInTheDocument();
});

test("renders Civil-X as a compact visual project card on the homepage", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  const civilXCard = screen.getByRole("button", { name: "代表项目：Civil-X" });

  expect(civilXCard).toHaveTextContent("复杂任务闭环求解");
  expect(civilXCard).toHaveTextContent("复杂任务闭环求解");
  expect(civilXCard).toHaveTextContent("查看详情");
  expect(civilXCard).not.toHaveTextContent("点击查看项目拆解");
  expect(civilXCard).not.toHaveTextContent("Problem");
});

test("renders engineering data ops as a compact visual project card on the homepage", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  const insightLabel = screen.getByText("运营洞察中枢");
  const dataOpsCard = insightLabel.closest("button");

  expect(dataOpsCard).not.toBeNull();
  expect(dataOpsCard).toHaveTextContent("NL2SQL");
  expect(dataOpsCard).toHaveTextContent("查看详情");
});

test("keeps the first two featured projects on the first homepage page and reveals the two prototype projects on the next page", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByRole("button", { name: "代表项目：Civil-X" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "代表项目：工程数据智能运营中台" })).toBeInTheDocument();
  expect(screen.queryByRole("button", { name: "代表项目：Diudiu Enterprise Travel Assistant" })).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "打开下一页代表项目" }));

  expect(screen.getByRole("button", { name: "代表项目：Diudiu Enterprise Travel Assistant" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "代表项目：电商智能客服" })).toBeInTheDocument();
  expect(screen.queryByRole("button", { name: "代表项目：Civil-X" })).not.toBeInTheDocument();
});

test("opens a simplified Civil-X modal", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  fireEvent.click(screen.getByRole("button", { name: "代表项目：Civil-X" }));

  const dialog = screen.getByRole("dialog", { name: "Civil-X" });
  expect(dialog).toBeInTheDocument();
  expect(dialog).toHaveTextContent("为什么要做");
  expect(dialog).toHaveTextContent("我的判断");
  expect(dialog).toHaveTextContent("怎么设计");
  expect(dialog).toHaveTextContent("关键结果");
  expect(dialog).not.toHaveTextContent("一句话定位");
  expect(dialog).not.toHaveTextContent("我的角色");
  expect(dialog).not.toHaveTextContent("查看完整项目详情");
});

test("opens a simplified engineering data ops modal", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  fireEvent.click(screen.getByRole("button", { name: "代表项目：工程数据智能运营中台" }));

  const dialog = screen.getByRole("dialog", { name: "工程数据智能运营中台" });
  expect(dialog).toBeInTheDocument();
  expect(dialog).toHaveTextContent("为什么要做");
  expect(dialog).toHaveTextContent("怎么设计");
  expect(dialog).toHaveTextContent("关键结果");
  expect(dialog).not.toHaveTextContent("一句话定位");
  expect(dialog).not.toHaveTextContent("我的角色");
});

test("opens a simplified Diudiu modal from the second featured-project page", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  fireEvent.click(screen.getByRole("button", { name: "打开下一页代表项目" }));
  fireEvent.click(screen.getByRole("button", { name: "代表项目：Diudiu Enterprise Travel Assistant" }));

  const dialog = screen.getByRole("dialog", { name: "Diudiu Enterprise Travel Assistant" });
  expect(dialog).toBeInTheDocument();
  expect(dialog).toHaveTextContent("制度问答");
  expect(dialog).toHaveTextContent("依据回溯");
});

test("renders ecommerce smart customer service as a compact visual project card on the second homepage page", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  fireEvent.click(screen.getByRole("button", { name: "打开下一页代表项目" }));

  const autoAgentCard = screen.getByRole("button", { name: "代表项目：电商智能客服" });
  expect(autoAgentCard).toHaveTextContent("客服工作流");
  expect(autoAgentCard).toHaveTextContent("电商智能客服");
  expect(autoAgentCard).toHaveTextContent("策略发布");
});

test("opens a simplified ecommerce smart customer service modal from the second featured-project page", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  fireEvent.click(screen.getByRole("button", { name: "打开下一页代表项目" }));
  fireEvent.click(screen.getByRole("button", { name: "代表项目：电商智能客服" }));

  const dialog = screen.getByRole("dialog", { name: "电商智能客服" });
  expect(dialog).toBeInTheDocument();
  expect(dialog).toHaveTextContent("电商智能客服");
  expect(dialog).toHaveTextContent("人工接管");
  expect(dialog).toHaveTextContent("策略发布");
});

test("opens a prompt lab modal when a prompt lab card is clicked", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  const cards = screen.getAllByRole("button", { name: /Prompt Lab 卡片：/i });
  expect(cards.length).toBeGreaterThan(0);

  fireEvent.click(cards[0]);
  const dialog = screen.getByRole("dialog");
  expect(dialog).toBeInTheDocument();
  expect(dialog).toHaveTextContent("Prompt");
});

test("renders the about section with updated copy", () => {
  render(
    <MemoryRouter initialEntries={["/#about"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getAllByText("Why Me").length).toBeGreaterThan(0);
  expect(screen.getByText("做过真实落地项目")).toBeInTheDocument();
  expect(screen.getByText("How I Work")).toBeInTheDocument();
  expect(screen.getByText("先定义任务闭环，再决定 AI 方案")).toBeInTheDocument();
  expect(screen.getByText("Capability")).toBeInTheDocument();
  expect(screen.getByText("理解 RAG / Agent / NL2SQL 的适用边界")).toBeInTheDocument();
});
