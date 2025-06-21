import { useEffect, useRef, useState } from "react";
import CustomTextArea from "../Common/CustomTextArea";
import FormInput from "../Common/FormInput";
import DropZone from "../Common/DropZone";
import ErrorMessage from "../Auth/ErrorMessage";
import LanguageSwitcher, {
  languages as data_languages,
} from "../Admin/LanguageSwitcher";

const UpdateValuesModal = ({
  id,
  headerKey,
  mainContentKey,
  translations,
  image,
  closeFN,
  submitFN,
}) => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [imageUrl, setImageUrl] = useState(
    image === "none" || !image ? null : image
  );
  const imageFileRef = useRef(null);

  const [localTranslations, setLocalTranslations] = useState({});
  const [activeLang, setActiveLang] = useState("ru");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const initial = {};
    data_languages.forEach((lang) => {
      initial[lang] = {
        [headerKey]: translations?.[lang]?.[headerKey] || "",
        [mainContentKey]: translations?.[lang]?.[mainContentKey] || "",
      };
    });
    setLocalTranslations(initial);
  }, [translations, headerKey, mainContentKey]);

  const handleChange = (key, value) => {
    setLocalTranslations((prev) => ({
      ...prev,
      [activeLang]: {
        ...prev[activeLang],
        [key]: value,
      },
    }));
  };

  const validateAllFields = () => {
    const newErrors = [];

    for (let lang of data_languages) {
      const title = localTranslations[lang]?.[headerKey]?.trim();
      const desc = localTranslations[lang]?.[mainContentKey]?.trim();
      if (!title || !desc) {
        newErrors.push(`Заполните все поля для языка: ${lang.toUpperCase()}`);
      }
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSave = () => {
    if (!validateAllFields()) return;

    setSubmitting(true);
    submitFN(
      id,
      {
        translations: localTranslations,
        image:
          image != "none" && imageUrl !== null && imageFileRef.current === null
            ? "unchanged"
            : imageFileRef.current === null &&
              imageUrl === null &&
              image !== "none"
            ? ""
            : imageFileRef.current !== null
            ? imageFileRef.current
            : "none",
      },
      () => {
        closeFN();
        setSubmitting(false);
      }
    );
  };

  return (
    <div className="z-50 fixed flex justify-center items-center left-0 top-0 w-full h-full bg-black/30">
      <div className="p-4 bg-white rounded-xl shadow-[0px_4px_15px_0px] shadow-black/10 max-h-[90vh] overflow-auto">
        <div className="flex md:flex-row flex-col gap-6">
          {/* Image section */}
          {imageUrl && image !== "none" ? (
            <div>
              <img src={imageUrl} className="max-h-40 rounded-lg" />
              <button
                disabled={isSubmitting}
                onClick={() => {
                  setImageUrl(null);
                  imageFileRef.current = null;
                }}
                className={`text-white xl:text-base lg:text-sm text-xs rounded-xl bg-[#DC3545] p-2 mt-4 ${
                  isSubmitting ? "" : "active:bg-[#83373f]"
                } disabled:opacity-40`}
              >
                Убрать
              </button>
            </div>
          ) : (
            image !== "none" && (
              <DropZone
                onFileSelect={(file) => {
                  setImageUrl(URL.createObjectURL(file));
                  imageFileRef.current = file;
                }}
              />
            )
          )}

          {/* Form section */}
          <div className="p-3 w-full">
            <LanguageSwitcher
              active={activeLang}
              setActive={setActiveLang}
              additionalClass="mb-4"
            />

            {errors.length > 0 && (
              <div className="mb-4 space-y-2">
                {errors.map((err, idx) => (
                  <ErrorMessage key={idx} message={err} />
                ))}
              </div>
            )}

            <FormInput
              type="text"
              value={localTranslations[activeLang]?.[headerKey] || ""}
              onChange={(e) => handleChange(headerKey, e.target.value)}
              placeholder="Заголовок"
            />
            <CustomTextArea
              type="text"
              value={localTranslations[activeLang]?.[mainContentKey] || ""}
              onChange={(e) => handleChange(mainContentKey, e.target.value)}
              placeholder="Содержание"
              additionalClass="mt-2 lg:min-h-40 min-h-24"
            />

            <div className="flex gap-4 mt-6">
              <button
                disabled={isSubmitting}
                onClick={closeFN}
                className={`2xl:py-4 xl:py-4 lg:py-3 py-2 2xl:px-8 xl:px-6 lg:px-4 px-3 2xl:text-xl xl:text-base lg:text-sm text-xs rounded-xl text-white bg-[#DC3545] ${
                  isSubmitting ? "" : "active:bg-[#83373f]"
                } disabled:opacity-40`}
              >
                Отменить
              </button>
              <button
                disabled={isSubmitting}
                onClick={handleSave}
                className={`2xl:py-4 xl:py-4 lg:py-3 py-2 2xl:px-8 xl:px-6 lg:px-4 px-3 2xl:text-xl xl:text-base lg:text-sm text-xs rounded-xl text-white bg-primaryGreen ${
                  isSubmitting ? "" : "active:bg-[#59712d]"
                } disabled:opacity-40`}
              >
                {isSubmitting ? "Сохранение.." : "Сохранить"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateValuesModal;
