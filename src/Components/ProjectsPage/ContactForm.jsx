import { useRef } from "react";
import { useActionData } from "react-router";
import CustomForm from "../Common/CustomForm";
import FormInput from "../Common/FormInput";
import CustomTextArea from "../Common/CustomTextArea";

const ContactForm = () => {
  const actionData = useActionData();
  const formRef = useRef(null);
  if (actionData) {
    console.log(actionData);
    formRef.current.reset();
  }
  return (
    <>
      <CustomForm
        ref={formRef}
        method="POST"
        result={actionData}
        buttonText={"Отправить Запрос"}
        formTitle={"Форма для связи по проектам"}
      >
        <FormInput
          name="name_project"
          id="name_project"
          type="text"
          autoComplete="name_project"
          placeholder="Название проекта"
          required
        />
        <CustomTextArea
          name="comment"
          id="comment"
          required
          minLength={10}
          placeholder="Ваше сообщение"
        />
      </CustomForm>
    </>
  );
};

export default ContactForm;
