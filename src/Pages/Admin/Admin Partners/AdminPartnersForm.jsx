import { Form, useActionData, useSubmit } from "react-router";
import FormInput from "../../../Components/Common/FormInput";
import AdminTitle from "../../../Components/Admin/AdminTitle";
import CustomTextArea from "../../../Components/Common/CustomTextArea";
import Notification from "../../../Components/Common/Notification";
import LanguageSwitcher from "../../../Components/Admin/LanguageSwitcher";
import ErrorMessage from "../../../Components/Auth/ErrorMessage";
import { useEffect, useRef, useState } from "react";

const REQUIRED_LANGUAGES = ["ru", "en", "uz", "kaa"];

const AdminPartnersForm = () => {
  const actionData = useActionData();
  const submit = useSubmit();
  const formRef = useRef(null);

  const [translations, setTranslations] = useState({});
  const [activeLanguage, setActiveLanguage] = useState("ru");
  const [formErrors, setFormErrors] = useState([]);

  useEffect(() => {
    if (actionData?.success) {
      formRef.current.reset();
      setTranslations({});
      setFormErrors([]);
    }
  }, [actionData]);

  const handleInputChange = (lang, field, value) => {
    setTranslations((prev) => ({
      ...prev,
      [lang]: {
        ...prev[lang],
        [field]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = [];
    const filteredTranslations = {};

    REQUIRED_LANGUAGES.forEach((lang) => {
      const name = translations[lang]?.name?.trim();
      const description = translations[lang]?.description?.trim();

      if (!name || !description) {
        errors.push(`Поля не заполнены для языка: ${lang.toUpperCase()}`);
      } else {
        filteredTranslations[lang] = { name, description };
      }
    });

    if (errors.length > 0) {
      setFormErrors(errors);
      return;
    }

    const formData = new FormData();
    formData.append("translations", JSON.stringify(filteredTranslations));

    setFormErrors([]);
    submit(formData, {
      method: "post",
      encType: "multipart/form-data",
      action: "/admin/partners/new",
    });
  };

  return (
    <>
      <Notification result={actionData} />
      <AdminTitle type="h1">Создание Информации О Новом Партнере</AdminTitle>
      <Form
        ref={formRef}
        method="POST"
        className="2xl:p-9 xl:p-6 lg:p-4 p-3 rounded-3xl shadow-[0px_0px_10px_0] shadow-black/10"
        onSubmit={handleSubmit}
      >
        <LanguageSwitcher
          active={activeLanguage}
          setActive={setActiveLanguage}
          additionalClass="mb-6"
          filledLanguages={Object.keys(translations)}
        />

        <label htmlFor="name">
          <span className="2xl:text-2xl xl:text-xl lg:text-base text-sm text-[#666666]">
            Имя Партнера: {activeLanguage.toUpperCase()}
          </span>
          <FormInput
            type="text"
            name={`name-${activeLanguage}`}
            id={`name-${activeLanguage}`}
            value={translations[activeLanguage]?.name || ""}
            onChange={(e) =>
              handleInputChange(activeLanguage, "name", e.target.value)
            }
            additionalClass="mt-3"
          />
        </label>

        <label htmlFor="description">
          <span className="2xl:text-2xl xl:text-xl lg:text-base text-sm text-[#666666]">
            Описание: {activeLanguage.toUpperCase()}
          </span>
          <CustomTextArea
            name={`description-${activeLanguage}`}
            id={`description-${activeLanguage}`}
            value={translations[activeLanguage]?.description || ""}
            onChange={(e) =>
              handleInputChange(activeLanguage, "description", e.target.value)
            }
            additionalClass="mt-3 lg:min-h-40 min-h-24"
          />
        </label>

        {formErrors.length > 0 && (
          <div className="mt-4 space-y-2">
            {formErrors.map((err, idx) => (
              <ErrorMessage key={idx} message={err} />
            ))}
          </div>
        )}

        <div className="flex gap-6 mt-9 text-white">
          <button
            type="submit"
            className="2xl:py-6 xl:py-4 lg:py-3 py-2 2xl:px-9 xl:px-8 lg:px-4 px-3 2xl:text-almostN xl:text-xl lg:text-sm text-xs rounded-xl bg-[#6877E0] active:bg-[#424b91]"
          >
            Опубликовать Партнера
          </button>
          <button
            type="reset"
            onClick={() => {
              setTranslations({});
              setFormErrors([]);
            }}
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
