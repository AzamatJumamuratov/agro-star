import message_icon from "./message_icon.svg";
import phone_icon from "./phone_icon.svg";
import location_icon from "./location_icon.svg";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useLoaderData } from "react-router";

const Contacts = () => {
  const { t } = useTranslation();
  const loaderData = useLoaderData().contacts;

  // useEffect(() => {
  //   fetchContacts();
  // }, []);
  return (
    <address className="text-white xl:text-2xl text-base xl:mb-0 mb-8">
      <h3 className="xl:text-2xl text-lg xl:mb-8 mb-5 font-bold">
        {t("footer_contacts")}
      </h3>
      <div className="flex gap-2 mb-6">
        <img src={message_icon} alt="Message Icon" className="xl:h-auto h-5" />
        <span className="xl:text-xl lg:text-sm text-xs">
          {loaderData.email}
        </span>
      </div>
      <div className="flex gap-2 mb-6">
        <img src={phone_icon} alt="Phone Icon" className="xl:h-auto h-5" />
        <span className="xl:text-xl lg:text-sm text-xs">
          {loaderData.phone}
        </span>
      </div>
      <div className="flex gap-2">
        <img src={location_icon} alt="Message Icon" className="xl:h-auto h-5" />
        <span className="xl:text-xl lg:text-sm text-xs">
          {loaderData.address}
        </span>
      </div>
    </address>
  );

  // async function fetchContacts() {
  //   const response = await FetchData("contact-info/");

  //   if (response.ok) {
  //     return await response.json();
  //   } else {
  //     console.error("Error fetching data");
  //   }
  // }
};

export default Contacts;
