import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./components/layout";
import { RecentlyViewed } from "./components/recently-viewed";
import CustomKanban from "./components/Board";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
  },
  {
    path: "/kanban",
    element: <CustomKanban/>,
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
