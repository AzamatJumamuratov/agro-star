import LanguageButtons from "./LanguageButtons/LanguageButtons";
import LogoComponent from "./Logo/Logo";
import SearchBar from "./SearchBar/SearchBar";
import burger_icon from "../../../assets/burger_icon.svg";
import { createPortal } from "react-dom";
import { useState } from "react";
import CustomSideBar from "./Sidebar/CustomSideBar";

const HeaderTop = () => {
  const [sidebarOpened, OpenSidebar] = useState(false);
  return (
    <div className="bg-linear-to-r from-bg-start to-bg-end shadow-[0_2px_10px_0_rgba(0,0,0,0.1)]">
      <div className="wrapper">
        <div className="flex items-center lg:flex-nowrap flex-wrap lg:gap-8 gap-x-12 gap-y-4 justify-between  md:justify-center lg:justify-between lg:py-[18px] xl:py-[27px] py-4">
          <LogoComponent />
          <button
            onClick={() => OpenSidebar(!sidebarOpened)}
            className="md:hidden"
          >
            <img src={burger_icon} className="w-8 h-8" />
          </button>
          <CustomSideBar opened={sidebarOpened} OpenSidebarFn={OpenSidebar} />
          <SearchBar additionalClass={"hidden md:flex"} />
          <LanguageButtons additionalClass={"hidden md:flex"} />
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
