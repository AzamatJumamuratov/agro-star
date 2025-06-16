import { NavLink } from "react-router";

const NavLinkListItem = ({ to, children }) => {
  return (
    <NavLink to={to} className="">
      {({ isActive }) => (
        <li
          className={`xl:pl-14 lg:pl-8 md:pl-4 pl-4 lg:py-4 py-2 xl:text-base lg:text-sm text-xs text-[#759933] font-bold ${
            isActive ? "bg-[#7599334D]/30" : ""
          }`}
        >
          {children}
        </li>
      )}
    </NavLink>
  );
};

export default NavLinkListItem;
