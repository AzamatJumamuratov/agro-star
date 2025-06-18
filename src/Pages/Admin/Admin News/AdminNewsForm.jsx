import { Form, useActionData, useSubmit } from "react-router";
import FormInput from "../../../Components/Common/FormInput";
import DropZone from "../../../Components/Common/DropZone";
import { useEffect, useRef, useState } from "react";
import AdminTitle from "../../../Components/Admin/AdminTitle";
import CustomTextArea from "../../../Components/Common/CustomTextArea";
import Notification from "../../../Components/Common/Notification";
import NewsTags from "../../../Components/Admin/NewsTags"; // 💡 Импорт компонента тегов

const AdminNewsForm = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [tags, setTags] = useState([]); // 🆕 Состояние тегов

  const imageFileRef = useRef(null);
  const formRef = useRef(null);
  const submit = useSubmit();
  const actionData = useActionData();

  const handleFileSelect = (file) => {
    setPreviewImage(URL.createObjectURL(file));
    imageFileRef.current = file;
  };

  useEffect(() => {
    if (actionData?.success) {
      formRef.current.reset();
      imageFileRef.current = null;
      setPreviewImage(null);
      setTags([]); // 🆕 очищаем теги
    }
  }, [actionData]);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    if (imageFileRef.current) {
      formData.set("image", imageFileRef.current, imageFileRef.current.name);
    }

    // 🆕 Добавим теги в formData
    formData.set("tags", JSON.stringify(tags));

    submit(formData, {
      method: "post",
      encType: "multipart/form-data",
      action: "/admin/news/new",
    });
  }

  return (
    <>
      <Notification result={actionData} />
      <AdminTitle type="h1">Создание новости</AdminTitle>
      <Form
        ref={formRef}
        method="POST"
        className="2xl:p-9 xl:p-6 lg:p-4 p-3 rounded-3xl  shadow-[0px_0px_10px_0] shadow-black/10"
        onSubmit={handleSubmit}
      >
        <label htmlFor="title">
          <span className="2xl:text-2xl xl:text-xl lg:text-base text-sm text-[#666666]">
            Заголовок новости
          </span>
          <FormInput
            type="text"
            name="title"
            id="title"
            autoComplete="title"
            required
            additionalClass="mt-3"
          />
        </label>

        <label htmlFor="description">
          <span className="2xl:text-2xl xl:text-xl lg:text-base text-sm text-[#666666]">
            Содержание
          </span>
          <CustomTextArea
            type="text"
            name="content"
            id="content"
            autoComplete="content"
            required
            additionalClass="mt-3 lg:min-h-40 min-h-24"
          />
        </label>

        <label htmlFor="image">
          <span className="2xl:text-2xl xl:text-xl lg:text-base text-sm text-[#666666]">
            Фотографии
          </span>
          <DropZone onFileSelect={handleFileSelect} />
          <div className="mt-4">
            {previewImage && (
              <>
                <span>Предпросмотр</span>
                <div className="flex gap-6 items-center">
                  <img src={previewImage} className="w-1/2 rounded-lg mt-3" />
                  <button
                    onClick={() => setPreviewImage(null)}
                    className="xl:p-3 lg:p-2 p-2 2xl:text-3xl xl:text-xl lg:text-base text-xs rounded-xl bg-red-400 text-white"
                  >
                    Убрать
                  </button>
                </div>
              </>
            )}
          </div>
        </label>

        {/* 🆕 Компонент тегов */}
        <div className="mt-6">
          <NewsTags tags={tags} setTags={setTags} />
        </div>

        <div className="flex gap-6 mt-9 text-white">
          <button
            type="submit"
            className="2xl:py-6 xl:py-4 lg:py-3 py-2 2xl:px-9 xl:px-8 lg:px-4 px-3 2xl:text-almostN xl:text-xl lg:text-sm text-xs rounded-xl bg-[#6877E0] active:bg-[#424b91]"
          >
            Опубликовать новость
          </button>
          <button
            type="reset"
            onClick={() => {
              setPreviewImage(null);
              setTags([]); // 🆕 очищаем теги при очистке
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

export default AdminNewsForm;
