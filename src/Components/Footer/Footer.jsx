import Contacts from "./Footer Components/Contacts/Contacts";
import FooterSocialMedia from "./Footer Components/Footer SocialMedia/FooterSocialMedia";
import QuickLinks from "./Footer Components/QuickLinks/QuickLinks";

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-bg-start to-bg-end lg:mt-24 md:mt-10 mt-4">
      <div className="wrapper">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 max-[540px]:grid-cols-1 pt-6  pb-4">
          <FooterSocialMedia />
          <Contacts />
          <QuickLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
