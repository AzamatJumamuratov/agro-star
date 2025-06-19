import email_icon from "../../../Components/Footer/Footer Components/Contacts/message_icon.svg";
import phone_icon from "../../../Components/Footer/Footer Components/Contacts/phone_icon.svg";
import location_icon from "../../../Components/Footer/Footer Components/Contacts/location_icon.svg";
import telegram_icon from "../../../assets/telegram_icon.svg";
import instagram_icon from "../../../assets/instagram_icon.svg";
import facebook_icon from "../../../assets/facebook_icon.svg";

import { useLoaderData } from "react-router";
import { useState } from "react";
import Notification from "../../../Components/Common/Notification";
import AdminContactItem from "../../../Components/Admin/Admin Contact Info/AdminContactItem";
import AdminContactsModify from "../../../Components/Admin/Admin Contact Info/AdminContactsModify";
import AdminSocialLinksModify from "../../../Components/Admin/Admin Contact Info/AdminSocialLinksModify";

const AdminContactInfo = () => {
  const loaderData = useLoaderData();
  const contacts = loaderData.contacts;
  const social_links = loaderData.socialLinks;
  const [notifyResult, setNotifyResult] = useState(null);
  return (
    <div className="mb-30">
      <Notification result={notifyResult} durationMilliSeconds={3000} />
      <div className="flex relative overflow-hidden flex-col bg-white rounded-xl shadow-[0px_4px_15px_0px] shadow-black/10 p-5">
        <AdminContactItem
          Icon={<img src={email_icon} className="size-5" />}
          content={contacts.email}
        />
        <AdminContactItem
          Icon={<img src={phone_icon} className="size-5" />}
          content={contacts.phone}
        />
        <AdminContactItem
          Icon={<img src={location_icon} className="size-5" />}
          content={contacts.address}
        />
        <AdminContactsModify
          email={contacts.email}
          phone={contacts.phone}
          address={contacts.address}
          deletable={false}
          modifyPath={"contact-info/"}
          notifyFn={setNotifyResult}
        />
      </div>
      <div>
        <div className="mt-4 min-h-56 flex relative overflow-hidden flex-col bg-white rounded-xl shadow-[0px_4px_15px_0px] shadow-black/10 p-5">
          <AdminContactItem
            Icon={<img src={telegram_icon} className="size-5" />}
            content={social_links.telegram}
          />
          <AdminContactItem
            Icon={<img src={instagram_icon} className="size-5" />}
            content={social_links.instagram}
          />
          <AdminContactItem
            Icon={<img src={facebook_icon} className="size-5" />}
            content={social_links.facebook}
          />
          <AdminSocialLinksModify
            telegram={social_links.telegram}
            instagram={social_links.instagram}
            facebook={social_links.facebook}
            deletable={false}
            notifyFn={setNotifyResult}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminContactInfo;
