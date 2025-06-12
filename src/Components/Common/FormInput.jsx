const FormInput = ({ name, id, type, autoComplete, placeholder, required }) => {
  return (
    <input
      name={name}
      id={id}
      type={type}
      autoComplete={autoComplete}
      placeholder={placeholder}
      required={required}
      className="xl:mb-6 lg:mb-4 mb-2 w-full border-2 border-[#F1F1F1] bg-white rounded-lg lg:rounded-2xl xl:placeholder:text-2xl lg:placeholder:text-sm placeholder:text-xs xl:text-2xl lg:text-sm text-sm   xl:py-6 lg:py-3 py-2 xl:px-9 lg:px-6 px-2"
    />
  );
};

export default FormInput;
