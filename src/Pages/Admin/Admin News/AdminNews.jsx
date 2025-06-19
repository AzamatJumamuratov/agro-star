import { useLoaderData } from "react-router";
import NewsSortOptions from "../../../Components/Admin/Admin News/NewsSortOptions/NewsSortOptions";
import { useState } from "react";
import AdminNewButton from "../../../Components/Common/AdminNewButton";
import AdminNewsCard from "../../../Components/Admin/Admin News/AdminNewsCard";
import AdminSearchInput from "../../../Components/Admin/AdminSearchInput";
import Notification from "../../../Components/Common/Notification";

const AdminNews = () => {
  const loaderData = useLoaderData();
  const [searchData, setSearchData] = useState("");
  const [notifyResult, setNotifyResult] = useState(null);
  return (
    <div className="mb-30">
      <div className="flex sm:flex-row flex-col sm:items-center items-baseline gap-6 mb-4">
        <AdminSearchInput
          value={searchData}
          placeholder={"Поиск Новостей..."}
          onChange={(e) => setSearchData(e.target.value)}
        />
        <AdminNewButton to={"new"}>Создание Новости</AdminNewButton>
      </div>

      <NewsSortOptions />
      <Notification result={notifyResult} durationMilliSeconds={3000} />
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
                  id={item.id}
                  title={item.title}
                  content={item.content}
                  published_at={item.published_at}
                  image={item.image}
                  views={item.views}
                  notifyFn={setNotifyResult}
                />
              );
            }
          } else {
            return (
              <AdminNewsCard
                key={item.id}
                id={item.id}
                title={item.title}
                content={item.content}
                published_at={item.published_at}
                image={item.image}
                views={item.views}
                notifyFn={setNotifyResult}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default AdminNews;
