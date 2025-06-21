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
  translations,
  image,
  type,
  modifyPath,
  editable = true,
  deletable = true,
  notifyFn,
}) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isChanging, SetIsChanging] = useState(false);
  const { revalidate } = useRevalidator();

  const typeKeys = GetType(type);

  return (
    <div className="flex flex-col items-stretch gap-3 mt-4">
      {/* Edit button */}
      {editable && (
        <button
          onClick={() => SetIsChanging(true)}
          disabled={isDeleting}
          className={`flex items-center justify-center gap-2 px-6 py-2 xl:text-base lg:text-sm text-xs rounded-xl text-white bg-[#6877E0] ${
            !isDeleting && "active:bg-[#3f488a]"
          } disabled:opacity-40`}
        >
          <img src={edit_icon} className="xl:size-5 lg:h-4 h-3" alt="edit" />
          Редактировать
        </button>
      )}

      {/* Delete button */}
      {deletable && (
        <button
          disabled={isDeleting}
          onClick={() => OnDelete(id)}
          className={`flex items-center justify-center gap-2 px-10 py-2 lg:px-4 mb-4 xl:text-base lg:text-sm text-xs rounded-xl text-white bg-[#DC3545] ${
            isDeleting ? "" : "active:bg-[#98313b]"
          } disabled:opacity-40`}
        >
          <img src={bin_icon} className="xl:size-5 lg:h-4 h-3" alt="delete" />
          {isDeleting ? "Удаление..." : "Удалить"}
        </button>
      )}

      {/* Modal */}
      {isChanging &&
        createPortal(
          <UpdateValuesModal
            id={id}
            headerKey={typeKeys[0]}
            mainContentKey={typeKeys[1]}
            translations={translations}
            image={type === "news" || type === "projects" ? image : "none"}
            submitFN={OnUpdate}
            closeFN={() => SetIsChanging(false)}
          />,
          document.body
        )}
    </div>
  );

  // Delete handler
  async function OnDelete(id) {
    const token = localStorage.getItem("token");
    if (!token) return redirect("/login");

    setIsDeleting(true);

    const response = await FetchData(`${modifyPath}/${id}/`, {
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
      if (response.status === 401) redirect("/login");
      console.error(`Ошибка удаления (${id}): ${response.statusText}`);
    }

    setIsDeleting(false);
  }

  // Update handler
  async function OnUpdate(id, body, callback) {
    const token = localStorage.getItem("token");
    if (!token) return redirect("/login");

    const formdata = new FormData();
    formdata.append("translations", JSON.stringify(body.translations));

    if (typeKeys[2] && body.image !== "unchanged" && body.image !== "none") {
      formdata.append(typeKeys[2], body.image);
    }

    const headers = {
      Authorization: `Token ${token}`,
    };

    let bodyData;
    if (type === "news" || type === "projects") {
      bodyData = formdata;
    } else {
      headers["Content-Type"] = "application/json";
      bodyData = JSON.stringify(body);
    }

    const response = await FetchData(`${modifyPath}/${id}/`, {
      method: "PATCH",
      headers,
      body: bodyData,
    });

    if (response.ok) {
      notifyFn({ success: true });
      revalidate();
    } else {
      notifyFn({ success: false });
      if (response.status === 401) redirect("/login");
      console.error(`Ошибка обновления (${id}): ${response.statusText}`);
    }

    callback();
  }

  function GetType(type) {
    switch (type) {
      case "news":
        return ["title", "content", "image"];
      case "projects":
        return ["title", "description", "image"];
      case "partners":
        return ["name", "description"];
      case "company-info":
        return ["title", "description"];
      default:
        console.error("Не указан тип карточки");
        return [];
    }
  }
};

export default AdminModifyCard;
