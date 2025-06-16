import logo from "../../../assets/admin_logo.svg";

const Logo = () => {
  return (
    <div className="flex items-center gap-3 xl:px-10 lg:px-6 px-4 xl:py-11 lg:py-6 py-4">
      <img src={logo} className="xl:h-auto lg:h-11 h-8" />
      <span className="xl:text-xl lg:text-base text-sm font-bold">
        BERUNIY <br /> AGRO STAR
      </span>
    </div>
  );
};

export default Logo;
