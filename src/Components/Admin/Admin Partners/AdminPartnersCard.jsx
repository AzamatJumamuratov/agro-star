import { useRevalidator } from "react-router";
import { createPortal } from "react-dom";
import { useState } from "react";
import edit_icon from "../../../assets/edit.svg";
import bin_icon from "../../../assets/trash_bin.svg";
import arrowUpFill_icon from "../../../assets/arrow_up_fill.svg";
import xMark_icon from "../../../assets/xmark.svg";
import FetchData from "../../../Data Fetching/FetchData";
import UpdateValuesModal from "../UpdateValuesModal";
import AdminModifyCard from "../AdminModifyCard";

const AdminPartnersCard = ({ id, name, description, notifyFn }) => {
  const [cardOptions, setCardOptions] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isChanging, SetIsChanging] = useState(false);
  const { revalidate } = useRevalidator();
  return (
    <div className="min-h-56 flex flex-col relative overflow-hidden  bg-white rounded-xl shadow-[0px_4px_15px_0px] shadow-black/10 pb-4">
      <div className="xl:px-5 lg:px-5  px-5 pt-5  pb-6">
        <h3 className="xl:text-xl lg:text-base text-base font-bold mb-1.5 break-words">
          {name || "Пусто"}
        </h3>
        <p className="xl:text-sm text-xs text-[#666666] mb-4 break-words">
          {description || "Описание Пусто."}
        </p>
        <AdminModifyCard
          id={id}
          header={name}
          mainContent={description}
          modifyPath={"partners"}
          type={"partners"}
          notifyFn={notifyFn}
        />
      </div>
    </div>
  );
};

export default AdminPartnersCard;
