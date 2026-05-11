import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

test("renders the redesigned Civil-X case study page", () => {
  render(
    <MemoryRouter initialEntries={["/projects/civil-x"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByRole("heading", { name: "Civil-X" })).toBeInTheDocument();
  expect(screen.getByText("Product Manager")).toBeInTheDocument();
  expect(screen.getByText("Complex Task Solver")).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Why This Had To Be A Workflow Product" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "My Product Framing" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Closed-Loop System Design" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Outcome And Evidence" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "What I Owned" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "What I Learned" })).toBeInTheDocument();
  expect(screen.getAllByText("多模态感知").length).toBeGreaterThan(0);
  expect(screen.getAllByText("评测与推理路由").length).toBeGreaterThan(0);
  expect(screen.getByRole("link", { name: "返回首页" })).toBeInTheDocument();
});
