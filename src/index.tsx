import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  Link,
  Outlet,
} from "react-router-dom";
import { ErrorPage } from "./view/ErrorPage";
import path from "path";
import { Login } from "./view/Login";
import { Register } from "./view/Register";
import { UpdatePassword } from "./view/UpdatePassword";
import { Index } from "./view/Index";
import { UpdateInfo } from "./view/UpdateInfo";

const routes = [
  {
    path: "/",
    element: <Index />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "update_info",
        element: <UpdateInfo></UpdateInfo>,
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "register",
    element: <Register></Register>,
  },
  {
    path: "update_password",
    element: <UpdatePassword></UpdatePassword>,
  },
];

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);
