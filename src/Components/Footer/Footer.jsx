import Contacts from "./Footer Components/Contacts/Contacts";
import FooterSocialMedia from "./Footer Components/Footer SocialMedia/FooterSocialMedia";
import QuickLinks from "./Footer Components/QuickLinks/QuickLinks";

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-bg-start to-bg-end mt-24">
      <div className="wrapper">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-9  xl:pt-14 xl:pb-[72px] pb-12">
          <FooterSocialMedia />
          <Contacts />
          <QuickLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
