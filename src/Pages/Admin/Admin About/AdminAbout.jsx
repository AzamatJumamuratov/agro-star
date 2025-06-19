import { useLoaderData } from "react-router";
import AdminNewButton from "../../../Components/Common/AdminNewButton";
import { useState } from "react";
import AdminAboutCard from "../../../Components/Admin/Admin About/AdminAboutCard";
import AdminSearchInput from "../../../Components/Admin/AdminSearchInput";
import Notification from "../../../Components/Common/Notification";

const AdminAbout = () => {
  const loaderData = useLoaderData();
  const [searchData, setSearchData] = useState("");
  const [notifyResult, setNotifyResult] = useState(null);
  return (
    <div className="mb-30">
      <div className="flex sm:flex-row flex-col sm:items-center items-baseline gap-6 mb-4">
        <AdminSearchInput
          value={searchData}
          placeholder={"Поиск Информации"}
          onChange={(e) => setSearchData(e.target.value)}
        />
        <AdminNewButton to={"new"}>
          Создание Информации О Компании
        </AdminNewButton>
      </div>
      <Notification result={notifyResult} durationMilliSeconds={3000} />
      <div className="grid 2xl:grid-cols-4 min-[71.25rem]:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-8">
        {loaderData.results.map((item) => {
          if (searchData != "") {
            if (
              item.title &&
              item.title.toLowerCase().includes(searchData.toLowerCase())
            ) {
              return (
                <AdminAboutCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  created_at={item.created_at}
                  notifyFn={setNotifyResult}
                />
              );
            }
          } else {
            return (
              <AdminAboutCard
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                created_at={item.created_at}
                notifyFn={setNotifyResult}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default AdminAbout;
