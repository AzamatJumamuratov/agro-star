import { Link, useLoaderData } from "react-router";
import NewsItem from "../Common/NewsItem.jsx";
import GetLastDates from "../../Utils/GetLastDates.js";
import { useTranslation } from "react-i18next";
import truncateString from "../../Utils/TruncateString.js";
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
      <div className="flex justify-between items-center lg:mt-14 md:mt-8 mt-4">
        <h2 className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-lg text-base font-bold">
          {t("lastNews_title")}
        </h2>
        <Link to="/news" className="md:text-sm text-xs">
          {t("lastNews_link")}
        </Link>
      </div>
      <div className="grid grid-cols-1 max-md:justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  gap-8 mt-14">
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
              content={truncateString(item.content, 200)}
              image={item.image}
              date={item.published_at}
              additionalClass={"max-md:w-100 max-[28rem]:w-80"}
            />
          );
          // }
        })}
      </div>
    </div>
  );
};

export default LastNews;
