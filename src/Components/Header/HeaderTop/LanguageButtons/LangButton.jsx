const LangButton = ({ language, onClick, current, children }) => {
  let isActive = language == current;
  return (
    <button
      onClick={(e) => onClick(language)}
      className={`${
        isActive ? "bg-red-400" : "bg-white/30"
      } py-1 xl:py-3 px-2.5 xl:px-4 active:scale-110 duration-100 ease-in-out rounded-lg  text-white`}
    >
      {children}
    </button>
  );
};

export default LangButton;
