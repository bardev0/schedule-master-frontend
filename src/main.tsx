import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PageLanding } from "./components/PageLanding.tsx";
import { PageLogin } from "./components/PageLogin.tsx";
import { PageRegister } from "./components/PageRegister.tsx";
import { PageRegisterSuccesful } from "./components/PageRegisterSuccesful.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PageLanding></PageLanding>,
    },
    {
        path: "/app",
        element: <App></App>,
    },
    {
        path: "/login",
        element: <PageLogin></PageLogin>,
    },
    {
        path: "/register",
        element: <PageRegister></PageRegister>,
    },
    {
        path: "/registerComplete",
        element: <PageRegisterSuccesful></PageRegisterSuccesful>,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
