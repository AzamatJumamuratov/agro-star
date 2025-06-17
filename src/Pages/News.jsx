import { useLoaderData } from "react-router";
import NewsItem from "../Components/Common/NewsItem";
import PageTitle from "../Components/Common/PageTitle";
import { useTranslation } from "react-i18next";

const News = () => {
  const loaderData = useLoaderData();
  const { t } = useTranslation();
  return (
    <main>
      <div className="wrapper">
        <PageTitle title={t("news_title")} />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 xl:mt-14 lg:mt-9 mt-5">
          {loaderData.results.map((item) => {
            return (
              <NewsItem
                key={item.id}
                id={item.id}
                title={item.title}
                content={item.content}
                image={item.image}
                date={item.published_at}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default News;
