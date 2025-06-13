import Logo from "./Sidebar/Logo";
import Navigation from "./Sidebar/Navigation";

const Sidebar = () => {
  return (
    <div className="w-[280px] h-dvh shadow-[2px_0px_10px_0px] shadow-[#0000001A]">
      <Logo />
      <Navigation />
    </div>
  );
};

export default Sidebar;
