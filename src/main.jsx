import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n/config.js";
import Layout from "./Layout.jsx";
import "./Styles/index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";

import HomePage from "./Pages/HomePage.jsx";
import About from "./Pages/About.jsx";
import Projects from "./Pages/Projects.jsx";
import AgroSchool from "./Pages/AgroSchool.jsx";
import Partners from "./Pages/Partners.jsx";
import News from "./Pages/News.jsx";
import Contacts from "./Pages/Contacts.jsx";

import { action as contactAction } from "./Data Fetching/ContactsData.js";
import {
  loader as ProjectsLoader,
  action as ProjectsAction,
} from "./Data Fetching/ProjectsData.js";
import { loader as PartnersLoader } from "./Data Fetching/PartnersData.js";
import { loader as AboutLoader } from "./Data Fetching/AboutData.js";
import { loader as NewsLoader } from "./Data Fetching/NewsData.js";
import { loader as HomeLoader } from "./Data Fetching/HomeData.js";
import GlobalLanguageContextProvider from "./Contexts/LanguageGlobalContext.jsx";
import Admin from "./Pages/Admin/Admin.jsx";
import AdminNews from "./Pages/Admin/AdminNews.jsx";
import AdminControlPanel from "./Pages/Admin/AdminControlPanel.jsx";
import AdminStatistics from "./Pages/Admin/AdminStatistics.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage,
        loader: HomeLoader,
      },
      {
        path: "about",
        Component: About,
        loader: AboutLoader,
      },
      {
        path: "projects",
        Component: Projects,
        action: ProjectsAction,
        loader: ProjectsLoader,
      },
      {
        path: "agroschool",
        Component: AgroSchool,
      },
      {
        path: "partners",
        Component: Partners,
        loader: PartnersLoader,
      },
      {
        path: "News",
        Component: News,
        loader: NewsLoader,
      },
      {
        path: "Contacts",
        Component: Contacts,
        action: contactAction,
      },
    ],
  },
  {
    path: "/admin",
    Component: Admin,
    children: [
      {
        index: true, // Это будет срабатывать при /admin
        element: <Navigate to="news" replace />, // Редиректим на /admin/news
      },
      {
        path: "news",
        Component: AdminNews,
      },
      {
        path: "controlPanel",
        Component: AdminControlPanel,
      },
      {
        path: "statistics",
        Component: AdminStatistics,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalLanguageContextProvider>
      <RouterProvider router={router} />
    </GlobalLanguageContextProvider>
  </StrictMode>
);
