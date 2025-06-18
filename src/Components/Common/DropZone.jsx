import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const DropZone = ({ onFileSelect }) => {
  const onDrop = useCallback(
    (acceptedFiles, fileRejections) => {
      if (fileRejections.length > 0) {
        alert("Только изображения (jpg, png, jpeg, webp) разрешены!");
        return;
      }

      const file = acceptedFiles[0];
      if (file) {
        // const previewUrl = URL.createObjectURL(file);
        // setPreview(previewUrl);
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
            "border-2 border-dashed border-primaryGreen bg-primaryGreen/10 rounded-xl 2xl:h-40 xl:h-30 lg:h-20 h-20 flex items-center justify-center mt-3 p-2",
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
    </>
  );
};

export default DropZone;
