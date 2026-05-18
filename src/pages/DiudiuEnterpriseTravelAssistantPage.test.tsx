import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

test("renders the Diudiu Enterprise Travel Assistant case study page", () => {
  render(
    <MemoryRouter initialEntries={["/projects/diudiu-enterprise-travel-assistant"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByRole("heading", { name: "Diudiu Enterprise Travel Assistant" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "为什么它必须是一个工作流产品" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "产品判断" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "闭环能力设计" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "原型栈" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "结果与验证" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "我负责的部分" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "我的收获" })).toBeInTheDocument();
  expect(screen.getAllByText("制度问答").length).toBeGreaterThan(0);
  expect(screen.getAllByText("依据回溯").length).toBeGreaterThan(0);
  expect(screen.getByRole("link", { name: "返回首页" })).toBeInTheDocument();
});
