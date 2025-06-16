import { Link, useLoaderData } from "react-router";
import NewsItem from "../Common/NewsItem.jsx";
import GetLastDates from "../../Utils/GetLastDates.js";
import { useTranslation } from "react-i18next";
// import { GlobalLanguageContext } from "../../Contexts/LanguageGlobalContext";
// import { useContext } from "react";

const LastNews = () => {
  const loaderData = useLoaderData();
  const { t } = useTranslation();
  // const { currentLanguage, languageSwitchHandler } = useContext(
  //   GlobalLanguageContext
  // );
  return (
    <div className="wrapper">
      <div className="flex justify-between items-center mt-14">
        <h2 className="2xl:text-5xl xl:text-3xl lg:text-2xl md:text-2xl text-xl font-bold">
          {t("lastNews_title")}
        </h2>
        <Link to="/news">{t("lastNews_link")}</Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-8 mt-14">
        {GetLastDates(loaderData.results, 6).map((item) => {
          // let dataByLanguage = item.translations?.[currentLanguage];
          // if (dataByLanguage) {
          return (
            <NewsItem
              key={item.id}
              id={item.id}
              // title={dataByLanguage.title}
              // content={dataByLanguage.content}
              title={item.title}
              content={item.content}
              date={item.published_at}
            />
          );
          // }
        })}
      </div>
    </div>
  );
};

export default LastNews;
