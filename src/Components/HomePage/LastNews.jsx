import { Link, useLoaderData } from "react-router";
import NewsItem from "../Common/NewsItem.jsx";
import GetLastDates from "../../Utils/GetLastDates.js";

const LastNews = () => {
  const loaderData = useLoaderData();
  return (
    <div className="wrapper">
      <div className="flex justify-between items-center mt-14 mb-">
        <h2 className="xl:text-5xl lg:text-almostN md:text-2xl text-xl font-bold">
          Последние новости
        </h2>
        <Link to="/news">Посмотреть все</Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-14">
        {GetLastDates(loaderData.results).map((item) => {
          return (
            <NewsItem
              key={item.id}
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

export default LastNews;
