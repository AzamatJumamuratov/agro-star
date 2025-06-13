import { useContext } from "react";
// In our components or hooks
import { useTranslation } from "react-i18next";
import { GlobalLanguageContext } from "../../../../Contexts/LanguageGlobalContext";

import LangButton from "./langButton";

const LanguageButtons = ({ additionalClass }) => {
  const { currentLanguage, languageSwitchHandler } = useContext(
    GlobalLanguageContext
  );
  const { i18n } = useTranslation();
  const activeLocale = i18n.resolvedLanguage;

  return (
    <div
      className={`flex justify-between items-center xl:text-base lg:text-sm text-xs gap-3 ${additionalClass}`}
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
        language={"kaa"}
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
