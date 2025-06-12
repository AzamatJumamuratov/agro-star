const LanguageButtons = ({ additionalClass }) => {
  return (
    <div
      className={`flex justify-between items-center gap-3 ${additionalClass}`}
    >
      <button className="py-1 xl:py-3 px-2.5 xl:px-4 rounded-lg bg-white/30 text-white">
        RU
      </button>
      <button className="py-1 xl:py-3 px-2.5 xl:px-4 rounded-lg bg-white/30 text-white">
        UZ
      </button>
      <button className="py-1 xl:py-3 px-2.5 xl:px-4 rounded-lg bg-white/30 text-white">
        KK
      </button>
      <button className="py-1 xl:py-3 px-2.5 xl:px-4 rounded-lg bg-white/30 text-white">
        EN
      </button>
    </div>
  );
};

export default LanguageButtons;
