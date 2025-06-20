import { useLoaderData } from "react-router";
import PageTitle from "../Components/Common/PageTitle";
import AboutItem from "../Components/About/AboutItem";
import { GlobalLanguageContext } from "../Contexts/LanguageGlobalContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const loaderData = useLoaderData();
  const { t } = useTranslation();
  const { currentLanguage } = useContext(GlobalLanguageContext);

  // Фильтруем только те, у кого есть перевод
  const filteredItems = loaderData.results.filter(
    (item) => item.translations?.[currentLanguage]
  );

  return (
    <main>
      <div className="wrapper">
        <PageTitle
          title={t("about_company_title")}
          desc={t("about_company_desc")}
        />

        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <AboutItem
              key={item.id}
              title={item.translations[currentLanguage].title}
              desc={item.translations[currentLanguage].description}
            />
          ))
        ) : (
          <p className="xl:text-lg lg:text-sm text-xs text-gray-500 mt-4">
            {"Информации нет на выбранном языке."}
          </p>
        )}
      </div>
    </main>
  );
};

export default About;
