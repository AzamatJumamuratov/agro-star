import { NavLink } from "react-router";

const QuickLinks = () => {
  return (
    <div className="text-white xl:col-auto col-span-full">
      <h3 className="xl:text-[28px] text-lg xl:mb-8 lg:mb-5 font-bold">
        Быстрые ссылки
      </h3>
      <nav className="grid xl:grid-cols-1 md:grid-cols-4  grid-cols-3 gap-6 xl:text-2xl text-base">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "hidden" : "underline")}
        >
          Главная
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "hidden" : "underline")}
        >
          О компании
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "hidden" : "underline")}
        >
          Проекты
        </NavLink>
        <NavLink
          to="/agroschool"
          className={({ isActive }) => (isActive ? "hidden" : "underline")}
        >
          Агрошкола
        </NavLink>
        <NavLink
          to="/partners"
          className={({ isActive }) => (isActive ? "hidden" : "underline")}
        >
          Партнеры
        </NavLink>
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? "hidden" : "underline")}
        >
          Новости
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }) => (isActive ? "hidden" : "underline")}
        >
          Контакты
        </NavLink>
      </nav>
    </div>
  );
};

export default QuickLinks;
