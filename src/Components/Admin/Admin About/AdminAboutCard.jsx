import clock_icon from "../../../assets/clock.svg";
import formatDateToDDMMYYYY from "../../../Utils/formatDateToDDMMYYYY";
import { useRevalidator } from "react-router";
import { createPortal } from "react-dom";
import { useState } from "react";
import edit_icon from "../../../assets/edit.svg";
import bin_icon from "../../../assets/trash_bin.svg";
import arrowUpFill_icon from "../../../assets/arrow_up_fill.svg";
import xMark_icon from "../../../assets/xmark.svg";
import FetchData from "../../../Data Fetching/FetchData";
import UpdateValuesModal from "../UpdateValuesModal";

const AdminAboutCard = ({ id, title, description, created_at, notifyFn }) => {
  const [cardOptions, setCardOptions] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isChanging, SetIsChanging] = useState(false);
  const { revalidate } = useRevalidator();
  const formattedDate = formatDateToDDMMYYYY(created_at, "/");
  return (
    <div className="min-h-56 flex flex-col relative overflow-hidden  bg-white rounded-xl shadow-[0px_4px_15px_0px] shadow-black/10 pb-4">
      <div className="xl:px-5 lg:px-3 mt-4 px-2 pb-6">
        <h3 className="xl:text-xl lg:text-base text-base font-bold mb-1.5 break-words">
          {title || "Пусто"}
        </h3>
        <p className="xl:text-sm text-xs text-[#666666] mb-4 break-words">
          {description || "Описание Пусто."}
        </p>
        <div className="flex justify-between text-[#999999] lg:text-sm text-xs">
          <div className="flex gap-1.5  ">
            <img src={clock_icon} alt="time icon" className="xl:h-auto h-5" />
            <time>{formattedDate}</time>
          </div>
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
              title={title}
              description={description}
              submitFN={OnUpdate}
              closeFN={() => SetIsChanging(false)}
            />,
            document.body
          )}
      </div>
    </div>
  );

  async function OnDelete(id) {
    setIsDeleting(true);
    let response = await FetchData(`company-info/${id}/`, {
      method: "DELETE",
      headers: {
        Authorization: "5ff1802d2f84309a0b0c1dcec0b572e9047eace3",
      },
    });
    if (response.ok) {
      notifyFn({ success: true });
      revalidate();
    } else {
      notifyFn({ success: false });
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
      title: body.title,
      description: body.mainContent,
    });
    let response = await FetchData(`/company-info/${id}/`, {
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
      notifyFn(result);
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
      notifyFn(result);
      return result;
    }
  }
};

export default AdminAboutCard;
