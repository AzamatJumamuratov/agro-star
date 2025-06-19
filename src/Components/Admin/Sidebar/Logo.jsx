import logo from "../../../assets/admin_logo.svg";
import AdminQuit from "../AdminQuit";

const Logo = () => {
  return (
    <div className="flex  md:flex-nowrap max-[530px]:flex-wrap items-center gap-3 xl:px-8 lg:px-4 px-3 xl:py-11 lg:py-6 py-4 ">
      <img src={logo} className="xl:h-auto lg:h-11 h-8" />
      <span className="xl:text-xl lg:text-base text-sm font-bold">
        BERUNIY <br /> AGRO STAR
      </span>
      <AdminQuit />
    </div>
  );
};

export default Logo;
