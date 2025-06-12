import XMark_icon from "../../../../assets/xMark_icon.svg";
import { Sidebar, Menu, MenuItem, Submenu, Logo } from "react-mui-sidebar";
import SearchBar from "../SearchBar/SearchBar";
import LanguageButtons from "../LanguageButtons/LanguageButtons";
import { NavLink } from "react-router";

const CustomSideBar = ({ opened, OpenSidebarFn }) => {
  return (
    <div
      className={`fixed flex w-full  top-0 ${
        opened ? "left-0" : "left-full"
      } duration-300 ease-in-out h-full z-40`}
    >
      <div
        onClick={() => OpenSidebarFn((v) => false)}
        className="bg-black/30 w-1/4"
      ></div>
      <div className={` w-3/4 bg-primary p-6 overflow-y-scroll`}>
        <button
          onClick={() => {
            OpenSidebarFn((v) => false);
          }}
          className="p-2 block ml-auto"
        >
          <img src={XMark_icon} className="w-8 h-8" />
        </button>
        <SearchBar additionalClass={"mb-4"} />
        <LanguageButtons additionalClass={"w-1/2 mb-8"} />
        <nav className="grid grid-cols-1 gap-6 text-2xl text-white">
          <NavLink
            to="/"
            onClick={() => OpenSidebarFn(false)}
            className={({ isActive }) => (isActive ? "hidden" : "")}
          >
            Главная
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => OpenSidebarFn(false)}
            className={({ isActive }) => (isActive ? "hidden" : "")}
          >
            О компании
          </NavLink>
          <NavLink
            to="/projects"
            onClick={() => OpenSidebarFn(false)}
            className={({ isActive }) => (isActive ? "hidden" : "")}
          >
            Проекты
          </NavLink>
          <NavLink
            to="/agroschool"
            onClick={() => OpenSidebarFn(false)}
            className={({ isActive }) => (isActive ? "hidden" : "")}
          >
            Агрошкола
          </NavLink>
          <NavLink
            to="/partners"
            onClick={() => OpenSidebarFn(false)}
            className={({ isActive }) => (isActive ? "hidden" : "")}
          >
            Партнеры
          </NavLink>
          <NavLink
            to="/news"
            onClick={() => OpenSidebarFn(false)}
            className={({ isActive }) => (isActive ? "hidden" : "")}
          >
            Новости
          </NavLink>
          <NavLink
            to="/contacts"
            onClick={() => OpenSidebarFn(false)}
            className={({ isActive }) => (isActive ? "hidden" : "")}
          >
            Контакты
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default CustomSideBar;
