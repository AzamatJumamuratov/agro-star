import { useEffect, useRef, useState } from "react";
import trashBin from "../../assets/trash_bin.svg";
import CustomTextArea from "../Common/CustomTextArea";
import FormInput from "../Common/FormInput";
import DropZone from "../Common/DropZone";
import FetchData from "../../Data Fetching/FetchData";

const UpdateValuesModal = ({
  id,
  title,
  description,
  content,
  image,
  closeFN,
  submitFN,
  ...props
}) => {
  const [imgHovered, SetImgHovered] = useState(false);
  const [imageUrl, setImageUrl] = useState(image || null);
  const imageFileRef = useRef(null);
  const mainContent = description != "" && description ? description : content;
  const mainContentRef = useRef();
  const titleRef = useRef();
  return (
    <div className="z-50 fixed flex justify-center items-center left-0 top-0 w-full h-full bg-black/30">
      <div className="p-4 bg-white rounded-xl shadow-[0px_4px_15px_0px] shadow-black/10">
        <div className="flex md:flex-row flex-col">
          {imageUrl ? (
            <div
              onMouseEnter={() => SetImgHovered(true)}
              onMouseLeave={() => SetImgHovered(false)}
              className="relative max-h-40 flex justify-center"
            >
              {imgHovered && (
                <div className="absolute left-0 top-0 w-full h-full flex justify-center items-center  bg-black/30">
                  <button
                    onClick={() => {
                      setImageUrl(null);
                      imageFileRef.current(null);
                      SetImgHovered(false);
                    }}
                    className="2xl:py-4 xl:py-4 lg:py-3 py-2 2xl:px-8 xl:px-6 lg:px-3 px-3 2xl:text-xl  xl:text-base lg:text-sm text-xs rounded-xl bg-[#DC3545] text-white active:bg-[#7c3038]"
                  >
                    <img src={trashBin} className="w-4 h-4" />
                  </button>
                </div>
              )}

              <img src={imageUrl} className="max-h-40 rounded-lg" />
            </div>
          ) : (
            image && (
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
              defaultValue={title}
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
                onClick={() => closeFN()}
                className="2xl:py-4 xl:py-4 lg:py-3 py-2 2xl:px-8 xl:px-6 lg:px-4 px-3 2xl:text-xl xl:text-base lg:text-sm text-xs rounded-xl text-white bg-[#DC3545]"
              >
                Отменить
              </button>
              <button
                onClick={() =>
                  submitFN(
                    id,
                    {
                      title: titleRef.current.value,
                      mainContent: mainContentRef.current.value,
                      image: imageFileRef.current,
                    },
                    closeFN
                  )
                }
                className="2xl:py-4 xl:py-4 lg:py-3 py-2 2xl:px-8 xl:px-6 lg:px-4 px-3 2xl:text-xl  xl:text-base lg:text-sm text-xs rounded-xl text-white bg-primaryGreen"
              >
                Сохранить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateValuesModal;
