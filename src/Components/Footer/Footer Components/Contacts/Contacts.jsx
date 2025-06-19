import message_icon from "./message_icon.svg";
import phone_icon from "./phone_icon.svg";
import location_icon from "./location_icon.svg";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const { t } = useTranslation();
  return (
    <address className="text-white xl:text-2xl text-base xl:mb-0 mb-8">
      <h3 className="xl:text-2xl text-lg xl:mb-8 mb-5 font-bold">
        {t("footer_contacts")}
      </h3>
      <div className="flex gap-2 mb-6">
        <img src={message_icon} alt="Message Icon" className="xl:h-auto h-5" />
        <span className="xl:text-xl lg:text-sm text-xs">info@company.uz</span>
      </div>
      <div className="flex gap-2 mb-6">
        <img src={phone_icon} alt="Phone Icon" className="xl:h-auto h-5" />
        <span className="xl:text-xl lg:text-sm text-xs">+99890 123 45 67</span>
      </div>
      <div className="flex gap-2">
        <img src={location_icon} alt="Message Icon" className="xl:h-auto h-5" />
        <span className="xl:text-xl lg:text-sm text-xs">
          Каракалпакстан, Нукус
        </span>
      </div>
    </address>
  );
};

export default Contacts;
