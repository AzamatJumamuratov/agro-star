const LanguageSwitcher = ({ active, setActive, additionalClass }) => {
  const languages = ["ru", "uz", "kaa", "en"];

  return (
    <div className={`flex justify-around gap-2 ${additionalClass || ""}`}>
      {languages.map((lang) => (
        <button
          key={lang}
          onClick={() => setActive(lang)}
          className={`px-4 py-2 rounded-md font-semibold transition-colors
            ${
              active === lang
                ? "bg-orange-400 text-white"
                : "bg-[#96C140] text-white hover:bg-green-400"
            }`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
