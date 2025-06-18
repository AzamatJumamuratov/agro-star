import { Form, useActionData } from "react-router";
import FormInput from "../../../Components/Common/FormInput";
import AdminTitle from "../../../Components/Admin/AdminTitle";
import CustomTextArea from "../../../Components/Common/CustomTextArea";
import { useEffect, useRef } from "react";
import Notification from "../../../Components/Common/Notification";

const AdminPartnersForm = () => {
  const actionData = useActionData();
  const formRef = useRef(null);
  useEffect(() => {
    if (actionData?.success) {
      formRef.current.reset();
    }
  }, [actionData]);
  return (
    <>
      <Notification result={actionData} />
      <AdminTitle type="h1">Создание Информации О Новом Партнере</AdminTitle>
      <Form
        ref={formRef}
        method="POST"
        className="2xl:p-9 xl:p-6 lg:p-4 p-3 rounded-3xl  shadow-[0px_0px_10px_0] shadow-black/10"
      >
        <label htmlFor="title" className="">
          <span className="2xl:text-2xl xl:text-xl lg:text-base text-sm text-[#666666]">
            Имя Партнера
          </span>
          <FormInput
            type={"text"}
            name={"name"}
            id={"name"}
            autoComplete={"name"}
            required={true}
            additionalClass={"mt-3"}
          />
        </label>
        <label htmlFor="description" className="">
          <span className="2xl:text-2xl xl:text-xl lg:text-base text-sm text-[#666666]">
            Описание
          </span>
          <CustomTextArea
            type={"text"}
            name={"description"}
            id={"description"}
            autoComplete={"description"}
            required={true}
            additionalClass={"mt-3 lg:min-h-40 min-h-24"}
          />
        </label>
        <div className="flex gap-6 mt-9 text-white">
          <button
            type="submit"
            className="2xl:py-6 xl:py-4 lg:py-3 py-2 2xl:px-9 xl:px-8 lg:px-4 px-3 2xl:text-almostN xl:text-xl lg:text-sm text-xs rounded-xl bg-[#6877E0] active:bg-[#424b91]"
          >
            Опубликовать Партнера
          </button>
          <button
            type="reset"
            onClick={() => setPreviewImage(null)}
            className="2xl:py-6 xl:py-4 lg:py-3 py-2 2xl:px-9 xl:px-8 lg:px-4 px-3 2xl:text-almostN xl:text-xl lg:text-sm text-xs rounded-xl bg-[#999999] active:bg-[#5a5a5a]"
          >
            Очистить
          </button>
        </div>
      </Form>
    </>
  );
};

export default AdminPartnersForm;
