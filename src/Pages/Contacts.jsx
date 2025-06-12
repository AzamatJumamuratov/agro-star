import { useActionData } from "react-router";
import CustomForm from "../Components/Common/CustomForm";
import CustomTextArea from "../Components/Common/CustomTextArea";
import FormInput from "../Components/Common/FormInput";
import PageTitle from "../Components/Common/PageTitle";

const Contacts = () => {
  const actionData = useActionData();
  return (
    <main>
      <div className="wrapper">
        <PageTitle title={"Свяжитесь с нами"} />
        <CustomForm
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
