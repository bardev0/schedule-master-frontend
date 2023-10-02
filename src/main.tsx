import ReactDOM from "react-dom/client";
import "./index.css";
import AppWrapper from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PageLanding } from "./components/PageLanding.tsx";
import { PageLogin } from "./components/PageLogin.tsx";
import { PageRegister } from "./components/PageRegister.tsx";
import { PageRegisterSuccesful } from "./components/PageRegisterSuccesful.tsx";
import { ScheduleStats } from "./components/ScheduleStats.tsx";
const domain = "/shiftArtist";

const router = createBrowserRouter([
    {
        path: domain,
        element: <PageLanding></PageLanding>,
    },
    {
        path: `${domain}/app`,
        element: <AppWrapper></AppWrapper>,
    },
    {
        path: `${domain}/login`,
        element: <PageLogin></PageLogin>,
    },
    {
        path: `${domain}/register`,
        element: <PageRegister></PageRegister>,
    },
    {
        path: `${domain}/registerComplete`,
        element: <PageRegisterSuccesful></PageRegisterSuccesful>,
    },
    {
        path: `${domain}/app/stats`,
        element: <ScheduleStats></ScheduleStats>,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <RouterProvider router={router} />
);
