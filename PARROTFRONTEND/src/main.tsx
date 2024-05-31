import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomeScreen from "./pages/HomeScreen/HomeScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen id="Home Screen" />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
