import LanguageButtons from "./LanguageButtons/LanguageButtons";
import LogoComponent from "./Logo/Logo";
import SearchBar from "./SearchBar/SearchBar";
import burger_icon from "../../../assets/burger_icon.svg";
import sign_out_icon from "../../../assets/sign_out.svg";
import { useState } from "react";
import CustomSideBar from "./Sidebar/CustomSideBar";
import { useNavigate } from "react-router";

const HeaderTop = () => {
  const [sidebarOpened, OpenSidebar] = useState(false);
  const navigate = useNavigate();
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
          <button
            onClick={() => navigate("/login")}
            className="md:block hidden bg-white/30 py-1 xl:py-3 px-2.5 xl:px-4 active:scale-110 duration-100 ease-in-out rounded-lg  text-white"
          >
            <img src={sign_out_icon} className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
