import { redirect, useRevalidator } from "react-router";
import { createPortal } from "react-dom";
import { useState } from "react";
import edit_icon from "../../../assets/edit.svg";
import bin_icon from "../../../assets/trash_bin.svg";
import arrowUpFill_icon from "../../../assets/arrow_up_fill.svg";
import xMark_icon from "../../../assets/xmark.svg";
import FetchData from "../../../Data Fetching/FetchData";
import UpdateValuesModal from "../UpdateValuesModal";

const AdminProjectsCard = ({
  id,
  title,
  description,
  image_url,
  deleteResultFN,
}) => {
  const [cardOptions, setCardOptions] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isChanging, SetIsChanging] = useState(false);
  const { revalidate } = useRevalidator();
  return (
    <div className="min-h-56 flex relative overflow-hidden flex-col bg-white rounded-xl shadow-[0px_4px_15px_0px] shadow-black/10">
      {image_url && (
        <img
          src={image_url}
          alt="news image"
          className="max-h-64 mx-auto rounded-md  mb-4"
        />
      )}
      <div className="flex-1 flex flex-col xl:px-5 lg:px-3 mt-4 px-4 pb-6">
        <h3 className="xl:text-xl lg:text-base text-base font-bold mb-1.5 break-words">
          {title || "Пусто"}
        </h3>
        <p className="xl:text-sm text-xs text-[#666666] mb-4 break-words">
          {/* {content != "" ? content.slice(0, 60) + "...."} */}
          {description || "Описание Пусто."}
        </p>
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
            onClick={() => SetIsChanging(true)}
            disabled={isDeleting}
            className={`flex items-center gap-2.5 2xl:py-6 xl:py-4 lg:py-3 py-2 2xl:px-9 xl:px-6 lg:px-4 px-3 xl:text-base lg:text-sm text-xs rounded-xl text-white bg-[#6877E0] ${
              !isDeleting && "active:bg-[#3f488a]"
            } disabled:opacity-40`}
          >
            <img src={edit_icon} className="xl:h-auto lg:h-4 h-3" />
            Редактировать
          </button>
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
      {isChanging &&
        createPortal(
          <UpdateValuesModal
            id={id}
            title={title}
            description={description}
            image={image_url}
            closeFN={() => SetIsChanging(false)}
            submitFN={OnUpdate}
          />,
          document.body
        )}
    </div>
  );

  async function OnDelete(id) {
    setIsDeleting(true);
    let response = await FetchData(`projects/${id}/`, {
      method: "DELETE",
      headers: {
        Authorization: "5ff1802d2f84309a0b0c1dcec0b572e9047eace3",
      },
    });
    if (response.ok) {
      deleteResultFN({ success: true });
      revalidate();
    } else {
      deleteResultFN({ success: false });
      console.error(
        `Error Deleting News ${id} Item. Code : ` +
          response.status +
          " Text : " +
          response.statusText
      );
    }
    setIsDeleting(false);
  }

  async function OnUpdate(id, body, callback) {
    const token = localStorage.getItem("token");
    if (!token) {
      return redirect("/login");
    }
    const formdata = new FormData();
    formdata.append("title", body.title);
    formdata.append("description", body.mainContent);
    if (body.image) {
      formdata.append("image", body.image);
    }

    let response = await FetchData(`projects/${id}/`, {
      method: "PATCH",
      headers: {
        Authorization: `Token ${token}`,
      },
      body: formdata,
    });
    if (response.ok) {
      deleteResultFN({ success: true });
      revalidate();
      callback();
    } else {
      deleteResultFN({ success: false });
      console.error(
        `Error Deleting News ${id} Item. Code : ` +
          response.status +
          " Text : " +
          response.statusText
      );
    }
  }
};

export default AdminProjectsCard;
