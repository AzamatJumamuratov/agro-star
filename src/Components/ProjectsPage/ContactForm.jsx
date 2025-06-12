import { useRef } from "react";
import { useActionData } from "react-router";
import CustomForm from "../Common/CustomForm";
import FormInput from "../Common/FormInput";
import CustomTextArea from "../Common/CustomTextArea";

const ContactForm = () => {
  const actionData = useActionData();
  const formRef = useRef(null);
  if (actionData) {
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
          name="projectName"
          id="projectName"
          type="text"
          autoComplete="projectName"
          placeholder="Название проекта"
          required
        />
        <CustomTextArea
          name="message"
          id="message"
          required
          placeholder="Ваше сообщение"
        />
      </CustomForm>
    </>
  );
};

export default ContactForm;
