import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { GlobalLanguageContext } from "../../../../Contexts/LanguageGlobalContext";

import LangButton from "./LangButton";

const LanguageButtons = ({ additionalClass }) => {
  const { currentLanguage, languageSwitchHandler } = useContext(
    GlobalLanguageContext
  );
  const { i18n } = useTranslation();

  return (
    <div
      className={`flex justify-between items-center xl:text-base lg:text-sm text-xs gap-1 ${additionalClass}`}
    >
      <LangButton
        current={currentLanguage}
        onClick={OnChangeLanguage}
        language={"ru"}
      >
        RU
      </LangButton>
      <LangButton
        current={currentLanguage}
        onClick={OnChangeLanguage}
        language={"uz"}
      >
        UZ
      </LangButton>
      <LangButton
        current={currentLanguage}
        onClick={OnChangeLanguage}
        language={"kk"}
      >
        KK
      </LangButton>
      <LangButton
        current={currentLanguage}
        onClick={OnChangeLanguage}
        language={"en"}
      >
        EN
      </LangButton>
    </div>
  );

  function OnChangeLanguage(newL) {
    languageSwitchHandler(newL);
    i18n.changeLanguage(newL);
  }
};

export default LanguageButtons;
