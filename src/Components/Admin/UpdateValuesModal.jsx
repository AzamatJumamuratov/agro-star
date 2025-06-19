import { useEffect, useRef, useState } from "react";
import trashBin from "../../assets/trash_bin.svg";
import CustomTextArea from "../Common/CustomTextArea";
import FormInput from "../Common/FormInput";
import DropZone from "../Common/DropZone";
import FetchData from "../../Data Fetching/FetchData";

const UpdateValuesModal = ({
  id,
  header,
  mainContent,
  image,
  closeFN,
  submitFN,
}) => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [imageUrl, setImageUrl] = useState(
    image == "none" || !image ? null : image
  );
  const imageFileRef = useRef(null);
  const mainContentRef = useRef();
  const titleRef = useRef();
  return (
    <div className="z-50 fixed flex justify-center items-center left-0 top-0 w-full h-full bg-black/30">
      <div className="p-4 bg-white rounded-xl shadow-[0px_4px_15px_0px] shadow-black/10">
        <div className="flex md:flex-row flex-col">
          {imageUrl && image != "none" ? (
            <div className="">
              <img src={imageUrl} className="max-h-40  rounded-lg" />
              <button
                disabled={isSubmitting}
                onClick={() => {
                  setImageUrl(null);
                  imageFileRef.current = null;
                }}
                className={`text-white xl:text-base lg:text-sm text-xs rounded-xl bg-[#DC3545] p-2 mt-4  ${
                  isSubmitting ? "" : "active:bg-[#83373f] "
                } disabled:opacity-40`}
              >
                Убрать
              </button>
            </div>
          ) : (
            image != "none" && (
              <DropZone
                onFileSelect={(file) => {
                  setImageUrl(URL.createObjectURL(file));
                  imageFileRef.current = file;
                }}
              />
            )
          )}
          <div className="p-3">
            <FormInput
              ref={titleRef}
              type={"text"}
              name={"title"}
              id={"title"}
              defaultValue={header}
              placeholder={"Заголовок"}
            />
            <CustomTextArea
              ref={mainContentRef}
              type={"text"}
              name={"title"}
              id={"title"}
              defaultValue={mainContent}
              placeholder={"Содержание"}
              additionalClass={"mt-3 lg:min-h-40 min-h-24"}
            />
            <div className="flex gap-4">
              <button
                disabled={isSubmitting}
                onClick={() => closeFN()}
                className={`2xl:py-4 xl:py-4 lg:py-3 py-2 2xl:px-8 xl:px-6 lg:px-4 px-3 2xl:text-xl xl:text-base lg:text-sm text-xs rounded-xl text-white bg-[#DC3545]  ${
                  isSubmitting ? "" : "active:bg-[#83373f] "
                } disabled:opacity-40 `}
              >
                Отменить
              </button>
              <button
                disabled={isSubmitting}
                onClick={() => {
                  setSubmitting(true);
                  submitFN(
                    id,
                    {
                      title: titleRef.current.value,
                      mainContent: mainContentRef.current.value,
                      image: imageFileRef.current || "",
                    },
                    () => {
                      closeFN();
                      setSubmitting(false);
                    }
                  );
                }}
                className={`2xl:py-4 xl:py-4 lg:py-3 py-2 2xl:px-8 xl:px-6 lg:px-4 px-3 2xl:text-xl  xl:text-base lg:text-sm text-xs rounded-xl text-white bg-primaryGreen ${
                  isSubmitting ? "" : "active:bg-[#59712d] "
                } disabled:opacity-40 `}
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
