import { useLoaderData } from "react-router";
import PageTitle from "../Components/Common/PageTitle";
import AboutItem from "../Components/About/AboutItem";
import { GlobalLanguageContext } from "../Contexts/LanguageGlobalContext";
import { useContext } from "react";
// React hook that ensures components are
// re-rendered when locale changes.
import { useTranslation } from "react-i18next";

const About = () => {
  const loaderData = useLoaderData();
  const { t } = useTranslation();
  const { currentLanguage, languageSwitchHandler } = useContext(
    GlobalLanguageContext
  );
  return (
    <main className="">
      <div className="wrapper">
        <PageTitle
          title={t("about_company_title")}
          desc={t("about_company_desc")}
        />

        {loaderData.results.map((item) => {
          return (
            <AboutItem
              key={item.id}
              // title={item.translations[currentLanguage].title}
              // desc={item.translations[currentLanguage].description}
              title={item.title}
              desc={item.description}
            />
          );
        })}
      </div>
    </main>
  );
};

export default About;
