import { useRevalidator } from "react-router";
import { createPortal } from "react-dom";
import { useState } from "react";
import edit_icon from "../../../assets/edit.svg";
import bin_icon from "../../../assets/trash_bin.svg";
import arrowUpFill_icon from "../../../assets/arrow_up_fill.svg";
import xMark_icon from "../../../assets/xmark.svg";
import FetchData from "../../../Data Fetching/FetchData";
import UpdateValuesModal from "../UpdateValuesModal";

const AdminPartnersCard = ({ id, name, description, notifyFN }) => {
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
      </div>
      <div
        className={`w-full left-0 absolute flex flex-col gap-3 bg-white  items-center justify-center duration-500 ease-in-out 
                        ${
                          cardOptions ? "top-0 h-full" : "top-[calc(100%-18px)]"
                        }`}
      >
        <button
          onClick={() => setCardOptions(!cardOptions)}
          className="w-10 bg-primaryGreen px-3 py-1 rounded-lg"
        >
          <img
            src={cardOptions ? xMark_icon : arrowUpFill_icon}
            className="w-5 h-5"
          />
        </button>
        <div className="flex flex-col gap-4 ">
          <button
            onClick={() => SetIsChanging(true)}
            disabled={isDeleting}
            className={`flex items-center gap-2.5 2xl:py-2 xl:py-4 lg:py-3 py-2 2xl:px-6 xl:px-6 lg:px-4 px-3 xl:text-base lg:text-sm text-xs rounded-xl text-white bg-[#6877E0] ${
              !isDeleting && "active:bg-[#3f488a]"
            } disabled:opacity-40`}
          >
            <img src={edit_icon} className="xl:h-auto lg:h-4 h-3" />
            Редактировать
          </button>
          <button
            disabled={isDeleting}
            onClick={() => OnDelete(id)}
            className={`flex items-center gap-2.5 2xl:py-2 xl:py-4 lg:py-3 py-2 2xl:px-6 xl:px-6 lg:px-4 px-3 xl:text-base lg:text-sm text-xs rounded-xl text-white bg-[#DC3545] ${
              isDeleting ? "" : "active:bg-[#98313b] "
            } disabled:opacity-40 `}
          >
            <img src={bin_icon} className="xl:h-auto lg:h-4 h-3" />
            {isDeleting ? "Удаление...." : "Удалить"}
          </button>
        </div>
      </div>
      {isChanging &&
        createPortal(
          <UpdateValuesModal
            id={id}
            title={name}
            description={description}
            closeFN={() => SetIsChanging(false)}
            submitFN={OnUpdate}
          />,
          document.body
        )}
    </div>
  );

  async function OnDelete(id) {
    setIsDeleting(true);
    let response = await FetchData(`partners/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: "5ff1802d2f84309a0b0c1dcec0b572e9047eace3",
      },
    });
    if (response.ok) {
      notifyFN({ success: true });
      revalidate();
    } else {
      notifyFN({ success: false });
      console.error(
        `Error Deleting News ${id} Item. Code : ` +
          response.status +
          " Text : " +
          response.statusText
      );
    }
    setIsDeleting(false);
  }

  async function OnUpdate(id, body, callbackFn) {
    const data = JSON.stringify({
      name: body.title,
      description: body.mainContent,
    });
    let response = await FetchData(`/partners/${id}/`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        "Accept-Language": "ru",
      },
      body: data,
    });

    let result;
    if (response.ok) {
      result = {
        success: true,
      };
      notifyFN(result);
      revalidate();
      callbackFn();
      return result;
    } else {
      console.error(
        "Error Updating Partners Item. Code : " +
          response.status +
          " Text : " +
          response.statusText
      );
      result = {
        success: false,
      };
      notifyFN(result);
      return result;
    }
  }
};

export default AdminPartnersCard;
