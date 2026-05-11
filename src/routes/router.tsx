import type { RouteObject } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CivilXPage from "../pages/CivilXPage";
import EngineeringDataOpsPage from "../pages/EngineeringDataOpsPage";
import NotFoundPage from "../pages/NotFoundPage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/projects/civil-x",
    element: <CivilXPage />
  },
  {
    path: "/projects/engineering-data-ops",
    element: <EngineeringDataOpsPage />
  },
  {
    path: "*",
    element: <NotFoundPage />
  }
];
