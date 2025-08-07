import logo from "../../../../assets/Beruniy - Agrostar.png";
// import instagramIcon from "./instagram_icon.svg";
import telegramIcon from "./telegram_icon.svg";
import facebookIcon from "./facebook_icon.svg";
import linkedinIcon from "./linkedin_icon.svg";
import { Link, useLoaderData } from "react-router";
import Logo from "../../../Header/HeaderTop/Logo/Logo";

const FooterSocialMedia = () => {
  const social_links = useLoaderData().social_links;
  return (
    <div className="max-md:mb-6">
      <div className="flex items-center mb-6 xl:mb-12 gap-4">
        {/* <img src={logo} className="xl:h-11 lg:h-9  h-8" /> */}
        <Logo />
      </div>
      <div className="flex gap-6">
        <Link to={social_links.telegram} type="_blank" className="">
          <img src={telegramIcon} className="lg:h-8 md:h-6 h-6" />
        </Link>
        {/* <Link to={social_links.instagram} type="_blank" className="">
          <img src={instagramIcon} className="lg:h-8 md:h-6 h-6" />
        </Link>
        <Link to={social_links.facebook} type="_blank" className="">
          <img src={facebookIcon} className="lg:h-8 md:h-6 h-6" />
        </Link> */}
        <Link to={social_links.linkedin} type="_blank" className="">
          <img src={linkedinIcon} className="lg:h-8 md:h-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default FooterSocialMedia;
