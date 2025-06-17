import { useLoaderData } from "react-router";
import NewsItem from "../Components/Common/NewsItem";
import PageTitle from "../Components/Common/PageTitle";
import GetLastDates from "../Utils/GetLastDates";

const NewsItemPage = () => {
  const loaderData = useLoaderData();
  console.log(loaderData);
  return (
    <div className="wrapper">
      <PageTitle title={loaderData.item.title || "Пусто"} />
      {loaderData.item.image && (
        <img src={loaderData.item.image} className="px-10" />
      )}
      <p className="xl:text-largerN lg:text-sm text-xs mt-10 text-[#222222]">
        {loaderData.item.content || "Описание Пусто"}
      </p>
      <hr className="h-0.5 bg-primary xl:mb-9 lg:mb-6 mb-3 mt-16" />
      <h3 className="xl:text-5xl lg:text-2xl text-lg font-bold mb-16">
        Другие интересные новости
      </h3>
      <div className="grid grid-cols-3 gap-8">
        {GetLastDates(loaderData.news.results, 3).map((item) => {
          return (
            <NewsItem
              id={item.id}
              title={item.title}
              content={item.content}
              date={item.published_at}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewsItemPage;
