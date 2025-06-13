import { NavLink } from "react-router";

const NavLinkListItem = ({ to, children }) => {
  return (
    <NavLink to={to} className="">
      {({ isActive }) => (
        <li
          className={`pl-14 py-4 text-[#759933] font-bold ${
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
