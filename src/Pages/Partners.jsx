import { useLoaderData } from "react-router";
import PageTitle from "../Components/Common/PageTitle";
import { useTranslation } from "react-i18next";
import { GlobalLanguageContext } from "../Contexts/LanguageGlobalContext";
import { useContext } from "react";

const Partners = () => {
  const loaderData = useLoaderData();
  const { t } = useTranslation();
  const { currentLanguage } = useContext(GlobalLanguageContext);

  // Отфильтруем только те, у кого есть перевод на текущем языке
  const filteredItems = loaderData.results.filter(
    (item) => item.translations?.[currentLanguage]
  );

  return (
    <main>
      <div className="wrapper">
        <PageTitle title={t("partners_title")} desc={t("partners_desc")} />
        <h3 className="xl:text-2xl lg:text-xl text-lg font-bold mb-6">
          {t("partners_title")}
        </h3>

        <ul className="list-disc xl:text-lg lg:text-sm text-xs pl-8 mb-12">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <li key={item.id}>{item.translations[currentLanguage].name}</li>
            ))
          ) : (
            <p className="xl:text-lg lg:text-sm text-xs text-gray-500 p-2">
              {"Нет партнеров для текущего языка..."}
            </p>
          )}
        </ul>

        <h3 className="xl:text-2xl lg:text-xl text-lg font-bold mb-6">
          {t("partners_info")}
        </h3>
        <p className="xl:text-lg lg:text-sm text-xs">
          {t("partners_info_text")}
        </p>
      </div>
    </main>
  );
};

export default Partners;
