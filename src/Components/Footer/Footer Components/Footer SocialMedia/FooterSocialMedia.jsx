import logo from "../../../../assets/logo.svg";
import instagramIcon from "./instagram_icon.svg";
import telegramIcon from "./telegram_icon.svg";
import facebookIcon from "./facebook_icon.svg";

const FooterSocialMedia = () => {
  return (
    <div className="max-md:mb-6">
      <div className="flex items-center mb-6 xl:mb-12 gap-4">
        <img src={logo} className="xl:h-auto h-8" />
        <h3 className="xl:text-2xl text-lg text-white font-bold">
          АгроКомпания
        </h3>
      </div>
      <div className="flex gap-6">
        <button className="">
          <img src={telegramIcon} className="lg:h-8 md:h-6 sm:h-4 h-4" />
        </button>
        <button className="">
          <img src={instagramIcon} className="lg:h-8 md:h-6 sm:h-4 h-4" />
        </button>
        <button className="">
          <img src={facebookIcon} className="lg:h-8 md:h-6 sm:h-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default FooterSocialMedia;
