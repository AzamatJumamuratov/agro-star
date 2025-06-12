const FormInput = ({ name, id, type, autoComplete, placeholder, required }) => {
  return (
    <input
      name={name}
      id={id}
      type={type}
      autoComplete={autoComplete}
      placeholder={placeholder}
      required={required}
      className="mb-6 w-full border-2 border-[#F1F1F1] bg-white rounded-lg lg:rounded-2xl xl:placeholder:text-2xl xl:text-2xl lg:text-base lg:placeholder:text-base text-sm xl:py-6 lg:py-4 py-2 xl:px-9 lg:px-6 px-2"
    />
  );
};

export default FormInput;
