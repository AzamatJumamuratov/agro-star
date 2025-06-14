import { useActionData } from "react-router";
import { useRef } from "react";
import CustomForm from "../Components/Common/CustomForm";
import CustomTextArea from "../Components/Common/CustomTextArea";
import FormInput from "../Components/Common/FormInput";
import PageTitle from "../Components/Common/PageTitle";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const actionData = useActionData();
  const { t } = useTranslation();
  const formRef = useRef(null);
  if (actionData) {
    formRef.current.reset();
  }
  return (
    <main>
      <div className="wrapper">
        <PageTitle title={t("contacts_title")} />
        <CustomForm
          ref={formRef}
          method={"post"}
          result={actionData}
          formTitle={"Форма для связи по проектам"}
          buttonText={"Отправить сообщение"}
        >
          <FormInput
            name={"name"}
            id={"name"}
            type={"text"}
            required={true}
            placeholder={"Имя*"}
          />
          <FormInput
            name={"email"}
            id={"email"}
            type={"email"}
            required={true}
            placeholder={"Email*"}
          />
          <FormInput
            name={"phone"}
            id={"phone"}
            type={"number"}
            required={true}
            placeholder={"Телефон*"}
          />
          <CustomTextArea
            required={true}
            name={"message"}
            placeholder={"Сообщение*"}
          />
        </CustomForm>
      </div>
    </main>
  );
};

export default Contacts;
