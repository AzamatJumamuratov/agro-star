import { Link } from "react-router";
import LogoIcon from "../../../../assets/logo.svg";

const Logo = () => {
  return (
    <div className="flex items-center gap-3  h-auto lg:w-auto md:w-full md:justify-center">
      <img src={LogoIcon} alt="Logo" className="lg:h-8" />
      <Link to="/" className="xl:text-[28px] lg:text-lg  text-white font-bold">
        Beruniy - Agro Star
      </Link>
    </div>
  );
};

export default Logo;
