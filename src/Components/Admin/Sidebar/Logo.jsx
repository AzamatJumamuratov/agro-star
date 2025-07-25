import logo from "../../../assets/Beruniy - Agrostar.png";
import AdminQuit from "../AdminQuit";

const Logo = () => {
  return (
    <div className="flex flex-col  md:flex-nowrap max-md:flex-wrap  gap-3 xl:px-8 lg:px-4 px-3 xl:py-11 lg:py-6 py-4 ">
      <img src={logo} className="xl:h-18 lg:h-11 h-8 mr-auto" />
      <div className="flex justify-between mt-2   items-center">
        <span className="xl:text-xl lg:text-base text-sm font-bold">
          BERUNIY <br /> AGRO STAR
        </span>
        <AdminQuit />
      </div>
    </div>
  );
};

export default Logo;
