import { Form } from "react-router";
import Notification from "./Notification";

const CustomForm = ({
  ref,
  action,
  method,
  buttonText,
  result,
  formTitle,
  children,
  ...props
}) => {
  console.log(result);
  return (
    <>
      <Notification result={result} durationSeconds={3000} />

      <div className="bg-almostWhite rounded-2xl border-2 border-[#F1F1F1] px-6 py-8">
        <h2 className="xl:text-4xl lg:text-2xl text-xl font-bold xl:mb-12 lg:mb-8 mb-4">
          {formTitle}
        </h2>
        <Form
          ref={ref}
          action={action}
          method={method}
          className="flex flex-col items-start"
          {...props}
        >
          {children}
          <button
            type="submit"
            className="bg-primary xl:text-2xl lg:text-sm text-xs text-white rounded-lg xl:px-14 lg:px-6 md:px-5 px-4 xl:py-4 lg:py-3 py-2"
          >
            {buttonText || "Submit"}
          </button>
        </Form>
      </div>
    </>
  );
};

export default CustomForm;
