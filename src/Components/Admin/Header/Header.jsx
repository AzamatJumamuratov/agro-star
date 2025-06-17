import { useContext } from "react";
import burger_icon from "../../../assets/burger_icon.svg";
import { SidebarContext } from "../../../Contexts/SidebarContext";

const Header = ({ children }) => {
  const [, setOpen] = useContext(SidebarContext);
  return (
    <header className="max-[500px]:flex max-[500px]:justify-between sticky px-6 2xl:py-6 xl:py-4 lg:py-3 py-3 shadow-[0px_2px_10px_0px] shadow-[#0000001A]">
      <h1 className="2xl:text-almostN xl:text-2xl lg:text-lg font-bold text-[#2C3E50]">
        {children}
      </h1>
      <button
        onClick={() => setOpen(true)}
        className="hidden duration-100 ease-in-out max-[500px]:block bg-primaryGreen active:bg-[#5f7731] p-2 rounded-lg"
      >
        <img src={burger_icon} className="w-4 h-4" />
      </button>
    </header>
  );
};

export default Header;
