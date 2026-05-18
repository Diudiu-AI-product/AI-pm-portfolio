import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

test("renders the engineering data ops case study sections", () => {
  render(
    <MemoryRouter initialEntries={["/projects/engineering-data-ops"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByRole("link", { name: "首页" })).toBeInTheDocument();
  expect(screen.queryByRole("link", { name: "项目页" })).not.toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "工程数据智能运营中台" })).toBeInTheDocument();
  expect(screen.getByText("角色：产品经理")).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Why This Problem Was Hard" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "My Product Decisions" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Core Capability Stack" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Outcomes" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "What I Learned" })).toBeInTheDocument();
  expect(screen.getAllByText("Schema 语义映射").length).toBeGreaterThan(0);
  expect(screen.getAllByText("灰度迁移").length).toBeGreaterThan(0);
  expect(screen.getByRole("link", { name: "返回首页" })).toBeInTheDocument();
});
