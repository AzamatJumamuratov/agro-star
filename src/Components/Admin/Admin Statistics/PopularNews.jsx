import { useLoaderData } from "react-router";
import PopularNewsItem from "./PopularNewsItem";

const PopularNews = () => {
  const loaderData = useLoaderData();
  return (
    <div className="2xl:p-9 xl:p-6 p-5 rounded-3xl  shadow-[0px_0px_10px_0] shadow-black/10">
      <h1 className="2xl:text-4xl xl:text-2xl lg:text-lg text-base font-bold">
        Популярные новости
      </h1>
      <div className="flex flex-col gap-6 mt-6">
        {loaderData.results.map((item, index) => {
          return (
            <PopularNewsItem
              key={item.id}
              index={index + 1}
              title={item.title}
              published_at={item.published_at}
              tags_display={item.tags_display}
              views={item.views}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PopularNews;
