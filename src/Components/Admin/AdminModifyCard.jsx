import edit_icon from "../../assets/edit.svg";
import bin_icon from "../../assets/trash_bin.svg";
import { redirect, useRevalidator } from "react-router";
import { createPortal } from "react-dom";
import UpdateValuesModal from "../Admin/UpdateValuesModal";
import { useState } from "react";
import FetchData from "../../Data Fetching/FetchData";
import ConvertToJSonFormData from "../../Utils/FromDataToJson";

const AdminModifyCard = ({
  id,
  header,
  mainContent,
  image,
  type,
  modifyPath,
  editable = true,
  notifyFn,
}) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isChanging, SetIsChanging] = useState(false);
  const { revalidate } = useRevalidator();

  return (
    <div className="flex flex-col items-start gap-3 mt-4">
      {editable && (
        <button
          onClick={() => {
            SetIsChanging(true);
          }}
          disabled={isDeleting}
          className={`flex items-center gap-2 px-6 py-2 xl:text-base lg:text-sm text-xs rounded-xl text-white bg-[#6877E0] ${
            !isDeleting && "active:bg-[#3f488a]"
          } disabled:opacity-40`}
        >
          <img src={edit_icon} className="xl:size-5 lg:h-4 h-3" />
          Редактировать
        </button>
      )}
      <button
        disabled={isDeleting}
        onClick={() => OnDelete(id)}
        className={`flex items-center gap-2 px-10 py-2 lg:px-4 xl:text-base lg:text-sm text-xs rounded-xl text-white bg-[#DC3545] ${
          isDeleting ? "" : "active:bg-[#98313b] "
        } disabled:opacity-40 `}
      >
        <img src={bin_icon} className="xl:size-5 lg:h-4 h-3" />
        {isDeleting ? "Удаление...." : "Удалить"}
      </button>
      {isChanging &&
        createPortal(
          <UpdateValuesModal
            id={id}
            header={header}
            mainContent={mainContent}
            image={type == "news" || type == "projects" ? image : "none"}
            submitFN={OnUpdate}
            closeFN={() => SetIsChanging(false)}
          />,
          document.body
        )}
    </div>
  );

  async function OnDelete(id) {
    const token = localStorage.getItem("token");
    if (!token) {
      return redirect("/login");
    }
    setIsDeleting(true);
    let response = await FetchData(`${modifyPath}/${id}/`, {
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
      if (response.status == 401) {
        redirect("/login");
      }
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
    const updateDataArr = GetType(type);
    formdata.append(updateDataArr[0], body.title);
    formdata.append(updateDataArr[1], body.mainContent);
    if (updateDataArr[2]) {
      formdata.append(updateDataArr[2], body.image);
    }

    console.log(body);

    const headers = {
      Authorization: `Token ${token}`,
    };

    let bodyData;
    if (type == "news" || type == "projects") {
      bodyData = formdata; // не указываем Content-Type
    } else {
      headers["Content-Type"] = "application/json";
      bodyData = ConvertToJSonFormData(formdata); // важно!
    }

    let response = await FetchData(`${modifyPath}/${id}/`, {
      method: "PATCH",
      headers,
      body: bodyData,
    });
    if (response.ok) {
      notifyFn({ success: true });
      revalidate();
    } else {
      notifyFn({ success: false });
      if (response.status == 401) {
        redirect("/login");
      }
      console.error(
        `Error Deleting News ${id} Item. Code : ` +
          response.status +
          " Text : " +
          response.statusText
      );
    }

    callback();
  }

  function GetType(type) {
    if (!type) console.error("you did'nt specify type of card, idiot");
    switch (type) {
      case "news":
        return ["title", "content", "image"];
      case "projects":
        return ["title", "description", "image"];
      case "partners":
        return ["name", "description"];
      case "company-info":
        return ["title", "description"];
    }
  }
};

export default AdminModifyCard;
