import { useLoaderData } from "react-router";
import NewsSortOptions from "../../../Components/Admin/Admin News/NewsSortOptions/NewsSortOptions";
import { useState } from "react";
import AdminNewButton from "../../../Components/Common/AdminNewButton";
import AdminNewsCard from "../../../Components/Admin/Admin News/AdminNewsCard";
import AdminSearchInput from "../../../Components/Admin/AdminSearchInput";

const AdminNews = () => {
  const loaderData = useLoaderData();
  const [searchData, setSearchData] = useState("");
  return (
    <div className="mb-30">
      <div className="flex items-center gap-6 mb-4">
        <AdminSearchInput
          value={searchData}
          placeholder={"Поиск Новостей..."}
          onChange={(e) => setSearchData(e.target.value)}
        />
        <AdminNewButton to={"new"}>Создание Новости</AdminNewButton>
      </div>

      <NewsSortOptions />
      <div className="grid 2xl:grid-cols-4 min-[71.25rem]:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-8">
        {loaderData.results.map((item) => {
          if (searchData != "") {
            if (
              item.title &&
              item.title.toLowerCase().includes(searchData.toLowerCase())
            ) {
              return (
                <AdminNewsCard
                  key={item.id}
                  title={item.title}
                  content={item.content}
                  published_at={item.published_at}
                  image={item.image}
                />
              );
            }
          } else {
            return (
              <AdminNewsCard
                key={item.id}
                title={item.title}
                content={item.content}
                published_at={item.published_at}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default AdminNews;
