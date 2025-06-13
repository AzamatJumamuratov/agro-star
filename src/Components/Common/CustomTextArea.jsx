const CustomTextArea = ({
  name,
  id,
  required,
  placeholder,
  minLength,
  ...props
}) => {
  return (
    <textarea
      name={name}
      id={id}
      required={required}
      placeholder={placeholder}
      minLength={minLength}
      {...props}
      className="w-full xl:min-h-96 lg:min-h-72 md:min-h-64 min-h-48 mb-8 border-2 border-[#F1F1F1] bg-white rounded-lg lg:rounded-2xl xl:placeholder:text-2xl  lg:placeholder:text-sm placeholder:text-xs xl:text-2xl lg:text-sm text-xs xl:py-6 lg:py-4 py-2 xl:px-9 lg:px-6 px-2"
    />
  );
};

export default CustomTextArea;
