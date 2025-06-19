const LangButton = ({ language, onClick, current, children }) => {
  let isActive = language == current;
  return (
    <button
      onClick={(e) => onClick(language)}
      className={`${
        isActive ? "bg-[#F39C12]" : "bg-white/30"
      } py-1  px-2.5  active:scale-110 duration-100 ease-in-out rounded-lg  text-white`}
    >
      {children}
    </button>
  );
};

export default LangButton;
