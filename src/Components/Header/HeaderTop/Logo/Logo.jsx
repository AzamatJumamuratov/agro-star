import { Link } from "react-router";
import LogoIcon from "../../../../assets/Beruniy - Agrostar.png";

const Logo = () => {
  return (
    <div className="flex items-center gap-3  h-auto lg:w-auto  md:justify-center">
      <Link to={"/"}>
        <img src={LogoIcon} alt="Logo" className="xl:h-11 lg:h-9  h-8" />
      </Link>
    </div>
  );
};

export default Logo;
