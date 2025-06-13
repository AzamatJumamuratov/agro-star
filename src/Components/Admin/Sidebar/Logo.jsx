import logo from "../../../assets/admin_logo.svg";

const Logo = () => {
  return (
    <div className="flex items-center gap-3 px-10 py-11">
      <img src={logo} />
      <span className="text-xl font-bold">
        BERUNIY <br /> AGRO STAR
      </span>
    </div>
  );
};

export default Logo;
