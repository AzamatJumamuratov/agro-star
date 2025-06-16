import AdminSearchNews from "../../Components/Admin/Admin News/AdminSearchNews";
import AdminHeader from "../../Components/Admin/Header/Header";
import NewsSortOptions from "../../Components/Admin/Admin News/NewsSortOptions/NewsSortOptions";
import NewsCard from "../../Components/Admin/Admin News/NewsCard";
import { useLoaderData } from "react-router";
import { useState } from "react";

const AdminNews = () => {
  const [searchData, setSearchData] = useState("");
  const loaderData = useLoaderData();
  return (
    <div>
      <AdminHeader>Новости</AdminHeader>
      <main className="xl:pl-6 lg:pl-4 pl-3 2xl:pt-6 xl:pt-5 lg:pt-4 pt-3 2xl:pr-10 xl:pr-8 lg:pr-6 md:pr-5 pr-3 mb-30">
        <AdminSearchNews
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
        />
        <NewsSortOptions />
        <div className="grid 2xl:grid-cols-4 min-[71.25rem]:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-8">
          {loaderData.results.map((item) => {
            if (searchData != "") {
              if (
                item.title &&
                item.title.toLowerCase().includes(searchData.toLowerCase())
              ) {
                return (
                  <NewsCard
                    key={item.id}
                    title={item.title}
                    content={item.content}
                    published_at={item.published_at}
                  />
                );
              }
            } else {
              return (
                <NewsCard
                  key={item.id}
                  title={item.title}
                  content={item.content}
                  published_at={item.published_at}
                />
              );
            }
          })}
        </div>
      </main>
    </div>
  );
};

export default AdminNews;
