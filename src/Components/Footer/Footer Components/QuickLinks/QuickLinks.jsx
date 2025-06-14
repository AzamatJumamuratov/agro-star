import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

const QuickLinks = () => {
  const { t } = useTranslation();
  return (
    <div className="text-white xl:col-auto col-span-full">
      <h3 className="xl:text-[28px] text-lg xl:mb-8 lg:mb-5 mb-4 font-bold">
        {t("footer_links")}
      </h3>
      <nav className="grid xl:grid-cols-1 md:grid-cols-4  grid-cols-3 gap-6 xl:text-2xl text-base">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "hidden" : "underline")}
        >
          {t("link_home")}
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "hidden" : "underline")}
        >
          {t("link_about")}
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "hidden" : "underline")}
        >
          {t("link_projects")}
        </NavLink>
        <NavLink
          to="/agroschool"
          className={({ isActive }) => (isActive ? "hidden" : "underline")}
        >
          {t("link_agroschool")}
        </NavLink>
        <NavLink
          to="/partners"
          className={({ isActive }) => (isActive ? "hidden" : "underline")}
        >
          {t("link_partners")}
        </NavLink>
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? "hidden" : "underline")}
        >
          {t("link_news")}
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }) => (isActive ? "hidden" : "underline")}
        >
          {t("link_contacts")}
        </NavLink>
      </nav>
    </div>
  );
};

export default QuickLinks;
