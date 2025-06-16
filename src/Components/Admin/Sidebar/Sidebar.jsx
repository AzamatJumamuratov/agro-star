import Logo from "./Logo";
import Navigation from "./Navigation";

const Sidebar = () => {
  return (
    <div className="h-full shadow-[2px_0px_10px_0px] shadow-[#0000001A]">
      <Logo />
      <Navigation />
    </div>
  );
};

export default Sidebar;
