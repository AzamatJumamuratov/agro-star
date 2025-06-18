import { useState } from "react";
import bin_icon from "../../../assets/trash_bin.svg";
import arrowUpFill_icon from "../../../assets/arrow_up_fill.svg";
import xMark_icon from "../../../assets/xmark.svg";
import clock_icon from "../../../assets/clock.svg";
import formatDateToDDMMYYYY from "../../../Utils/formatDateToDDMMYYYY";
import FetchData from "../../../Data Fetching/FetchData";
import { redirect, useRevalidator } from "react-router";

const AdminContactsCard = ({
  id,
  name,
  email,
  phone,
  message,
  created_at,
  notifyFn,
}) => {
  const [cardOptions, setCardOptions] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const { revalidate } = useRevalidator();
  const formattedDate = formatDateToDDMMYYYY(created_at, "/");
  return (
    <div className="min-h-56 flex relative overflow-hidden flex-col bg-white rounded-xl shadow-[0px_4px_15px_0px] shadow-black/10">
      <div className={`flex-1 flex flex-col xl:px-5 lg:px-3 mt-4 px-4 pb-6`}>
        <h3 className="xl:text-xl lg:text-base text-base font-bold mb-1.5 break-words">
          {name || "Имя Пусто"}
        </h3>
        <p className="xl:text-sm text-xs text-[#666666] mb-4 break-words">
          {email || "Email Пусто."}
        </p>
        <p className="xl:text-sm text-xs text-[#666666] mb-4 break-words">
          {phone || "Номер Пусто."}
        </p>
        <p className="xl:text-sm text-xs text-[#666666] mb-4 break-words">
          {message || "Сообщение Пусто."}
        </p>
        <div className="mt-auto mb-4 flex justify-between text-[#999999] lg:text-sm text-xs">
          <div className="flex gap-1.5">
            <img src={clock_icon} alt="time icon" className="xl:h-auto h-5" />
            <time>{formattedDate}</time>
          </div>
        </div>
        <div
          className={`w-full left-0 absolute flex flex-col gap-3 bg-white  items-center justify-center duration-500 ease-in-out 
            ${cardOptions ? "top-0 h-full" : "top-[calc(100%-18px)]"}`}
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
              disabled={isDeleting}
              onClick={() => OnDelete(id)}
              className={`flex items-center gap-2.5 2xl:py-6 xl:py-4 lg:py-3 py-2 2xl:px-9 xl:px-6 lg:px-4 px-3 xl:text-base lg:text-sm text-xs rounded-xl text-white bg-[#DC3545] ${
                isDeleting ? "" : "active:bg-[#98313b] "
              } disabled:opacity-40 `}
            >
              <img src={bin_icon} className="xl:h-auto lg:h-4 h-3" />
              {isDeleting ? "Удаление...." : "Удалить"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  async function OnDelete(id) {
    const token = localStorage.getItem("token");
    if (!token) {
      return redirect("/login");
    }
    setIsDeleting(true);
    let response = await FetchData(`admin/project-contacts/${id}/`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${token}`,
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
};

export default AdminContactsCard;
