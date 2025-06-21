import { useLoaderData } from "react-router";
import NewsItem from "../Components/Common/NewsItem";
import PageTitle from "../Components/Common/PageTitle";
import GetLastDates from "../Utils/GetLastDates";
import truncateString from "../Utils/TruncateString";
import { useTranslation } from "react-i18next";
import { GlobalLanguageContext } from "../Contexts/LanguageGlobalContext";
import { useContext } from "react";

const NewsItemPage = () => {
  const loaderData = useLoaderData();
  const { t } = useTranslation();
  const { currentLanguage } = useContext(GlobalLanguageContext);

  const otherNews = GetLastDates(
    loaderData.news.results,
    3,
    loaderData.item.id
  );

  const translations = loaderData.item.translations || {};
  const currentTranslation = translations[currentLanguage];
  const fallbackTranslation = translations["ru"];

  const title =
    currentTranslation?.title ||
    fallbackTranslation?.title ||
    "Нет заголовка на выбранном языке";

  const content =
    currentTranslation?.content ||
    fallbackTranslation?.content ||
    "Нет содержимого на выбранном языке";

  const isFallback = !currentTranslation?.title || !currentTranslation?.content;

  return (
    <div className="wrapper">
      <PageTitle title={title} />

      {isFallback && (
        <p className="text-red-500 mt-3 text-sm">
          Перевод недоступен для языка {currentLanguage.toUpperCase()}. Показано
          на русском.
        </p>
      )}

      {loaderData.item.image && (
        <img src={loaderData.item.image} className="w-1/2 mx-auto rounded-lg" />
      )}

      <p className="xl:text-largerN lg:text-sm text-xs mt-10 text-[#222222]">
        {content}
      </p>

      {otherNews.length > 0 && (
        <>
          <hr className="h-0.5 bg-primary xl:mb-9 lg:mb-6 mb-3 mt-16" />
          <h3 className="xl:text-5xl lg:text-2xl text-lg font-bold mb-16">
            {t("news_item_others_text")}
          </h3>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {otherNews.map((item) => {
              const trans =
                item.translations?.[currentLanguage] ||
                item.translations?.ru ||
                {};
              return (
                <NewsItem
                  key={item.id}
                  id={item.id}
                  title={trans.title || "Нет заголовка"}
                  content={truncateString(trans.content || "Нет описания", 200)}
                  image={item.image}
                  date={item.published_at}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default NewsItemPage;
