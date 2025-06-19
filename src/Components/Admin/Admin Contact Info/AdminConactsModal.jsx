import { useRef, useState } from "react";
import FormInput from "../../Common/FormInput";
import { Form } from "react-router";
import ErrorMessage from "../../Auth/ErrorMessage";

const AdminContactsModal = ({ email, phone, address, closeFN, submitFN }) => {
  const [isSubmitting, setSubmitting] = useState(false);
  const emailRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const [error, setError] = useState();
  return (
    <div className="z-50 fixed flex justify-center items-center left-0 top-0 w-full h-full bg-black/30">
      <div className="p-4 bg-white rounded-xl shadow-[0px_4px_15px_0px] shadow-black/10">
        <div className="flex md:flex-row flex-col">
          <div className="p-3">
            {error &&
              parseErrorMessages(error).map((errorString) => {
                return <ErrorMessage message={errorString} />;
              })}
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitting(true);
                submitFN(
                  {
                    email: emailRef.current.value,
                    phone: phoneRef.current.value,
                    address: addressRef.current.value,
                  },
                  () => {
                    closeFN();
                    setSubmitting(false);
                  },
                  (error) => {
                    setSubmitting(false);
                    setError(error);
                  }
                );
              }}
            >
              <FormInput
                ref={emailRef}
                type={"email"}
                name={"email"}
                id={"email"}
                defaultValue={email}
                placeholder={"Email"}
                additionalClass={"mt-4"}
              />
              <FormInput
                ref={phoneRef}
                type={"phone"}
                name={"phone"}
                id={"phone"}
                defaultValue={phone}
                placeholder={"Номер Телефона"}
              />{" "}
              <FormInput
                ref={addressRef}
                type={"text"}
                name={"address"}
                id={"address"}
                defaultValue={address}
                placeholder={"Адрес"}
              />
              <div className="flex gap-4">
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => closeFN()}
                  className={`2xl:py-4 xl:py-4 lg:py-3 py-2 2xl:px-8 xl:px-6 lg:px-4 px-3 2xl:text-xl xl:text-base lg:text-sm text-xs rounded-xl text-white bg-[#DC3545]  ${
                    isSubmitting ? "" : "active:bg-[#83373f] "
                  } disabled:opacity-40 `}
                >
                  Отменить
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`2xl:py-4 xl:py-4 lg:py-3 py-2 2xl:px-8 xl:px-6 lg:px-4 px-3 2xl:text-xl  xl:text-base lg:text-sm text-xs rounded-xl text-white bg-primaryGreen ${
                    isSubmitting ? "" : "active:bg-[#59712d] "
                  } disabled:opacity-40 `}
                >
                  {isSubmitting ? "Сохранение.." : "Сохранить"}
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );

  function parseErrorMessages(errorJson) {
    const result = [];

    for (const key in errorJson) {
      if (Array.isArray(errorJson[key])) {
        errorJson[key].forEach((message) => {
          result.push(`${message}`);
        });
      }
    }

    return result;
  }
};

export default AdminContactsModal;
