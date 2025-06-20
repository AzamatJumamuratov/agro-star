import edit_icon from "../../assets/edit.svg";
import bin_icon from "../../assets/trash_bin.svg";
import { redirect, useRevalidator } from "react-router";
import { createPortal } from "react-dom";
import UpdateValuesModal from "../Admin/UpdateValuesModal";
import { useState } from "react";
import FetchData from "../../Data Fetching/FetchData";
import ConvertToJSonFormData from "../../Utils/FromDataToJson";
import LanguageSwitcher from "../Admin/LanguageSwitcher";

const AdminModifyCard = ({
  id,
  header,
  mainContent,
  image,
  type,
  modifyPath,
  editable = true,
  deletable = true,
  notifyFn,
  activeLanguage,
  setActiveLanguage, // <--- добавлено
}) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isChanging, SetIsChanging] = useState(false);
  const { revalidate } = useRevalidator();

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

      {/* Language switcher */}
      <LanguageSwitcher
        active={activeLanguage}
        setActive={setActiveLanguage}
        additionalClass={" w-full"}
      />

      {/* Modal */}
      {isChanging &&
        createPortal(
          <UpdateValuesModal
            id={id}
            header={header}
            mainContent={mainContent}
            image={type === "news" || type === "projects" ? image : "none"}
            submitFN={OnUpdate}
            closeFN={() => SetIsChanging(false)}
            activeLanguage={activeLanguage}
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

    const updateDataArr = GetType(type);
    const formdata = new FormData();
    formdata.append(updateDataArr[0], body.title);
    formdata.append(updateDataArr[1], body.mainContent);
    if (updateDataArr[2]) {
      formdata.append(updateDataArr[2], body.image);
    }

    const headers = {
      Authorization: `Token ${token}`,
    };

    let bodyData;
    if (type === "news" || type === "projects") {
      bodyData = formdata;
    } else {
      headers["Content-Type"] = "application/json";
      bodyData = ConvertToJSonFormData(formdata);
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
