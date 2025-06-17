import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const DropZone = ({ preview, setPreview, onFileSelect }) => {
  const onDrop = useCallback(
    (acceptedFiles, fileRejections) => {
      if (fileRejections.length > 0) {
        alert("Только изображения (jpg, png, jpeg, webp) разрешены!");
        return;
      }

      const file = acceptedFiles[0];
      if (file) {
        const previewUrl = URL.createObjectURL(file);
        setPreview(previewUrl);
        onFileSelect(file);
      }
      // Do something with the files
    },
    [onFileSelect]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/jpg": [],
      "image/webp": [],
    },
    maxFiles: 1,
  });
  return (
    <>
      <div
        {...getRootProps({
          className:
            "border-2 border-dashed border-primaryGreen bg-primaryGreen/10 rounded-xl 2xl:h-40 xl:h-30 lg:h-20 h-20 flex items-center justify-center mt-3",
        })}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="z-40 2xl:text-largerN xl:text-almostN text-[#759933]">
            Поместите здесь!
          </p>
        ) : (
          <p className="z-40 2xl:text-largerN xl:text-almostN text-[#759933]">
            Загрузить фотографию
          </p>
        )}
      </div>
      <div className="mt-4">
        {preview && (
          <>
            <span>Предпросмотр</span>
            <div className="flex gap-6 items-center">
              <img src={preview} className="w-1/2  rounded-lg mt-3" />
              <button
                onClick={(e) => setPreview(null)}
                className="xl:p-3 lg:p-2 p-2 2xl:text-3xl xl:text-xl lg:text-base text-xs rounded-xl bg-red-400 text-white"
              >
                Убрать
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default DropZone;
