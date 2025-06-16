import Logo from "./Logo";
import Navigation from "./Navigation";

const Sidebar = () => {
  return (
    <div className="max-[500px]:hidden fixed overflow-y-auto l-0 t-0 h-dvh xl:w-[280px] md:w-[240px] w-[180px]  shadow-[2px_0px_10px_0px] shadow-[#0000001A] z-50 bg-white">
      <Logo />
      <Navigation />
    </div>
  );
};

export default Sidebar;
