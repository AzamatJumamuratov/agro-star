import { useLoaderData, useLocation } from "react-router";
import NewsItem from "../Components/Common/NewsItem";
import PageTitle from "../Components/Common/PageTitle";
import { useTranslation } from "react-i18next";
import truncateString from "../Utils/TruncateString";
import GetLastDates from "../Utils/GetLastDates";

const News = () => {
  const loaderData = useLoaderData();
  const { t } = useTranslation();

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchQuery = params.get("search")?.toLowerCase() || "";

  const sortedResults = GetLastDates(loaderData.results);
  const filteredResults = sortedResults.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery) ||
      item.content.toLowerCase().includes(searchQuery)
  );

  return (
    <main>
      <div className="wrapper">
        <PageTitle title={t("news_title")} />
        {searchQuery && (
          <p className="text-gray-500 mt-2">
            {`Найдено: ${filteredResults.length} новостей по запросу "${searchQuery}"`}
          </p>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-8 xl:mt-14 lg:mt-9 mt-5">
          {filteredResults.map((item) => (
            <NewsItem
              key={item.id}
              id={item.id}
              title={item.title}
              content={truncateString(item.content, 300)}
              image={item.image}
              date={item.published_at}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default News;
