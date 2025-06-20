import { useLoaderData } from "react-router";
import AdminNewButton from "../../../Components/Common/AdminNewButton";
import { useState } from "react";
import AdminPartnersCard from "../../../Components/Admin/Admin Partners/AdminPartnersCard";
import AdminSearchInput from "../../../Components/Admin/AdminSearchInput";
import Notification from "../../../Components/Common/Notification";

const AdminPartners = () => {
  const loaderData = useLoaderData();
  const [searchData, setSearchData] = useState("");
  const [notifyResult, setNotifyResult] = useState(null);

  // Отфильтровываем только партнеров с переводом на русском
  const russianPartners = loaderData.results.filter(
    (item) => item.translations?.ru
  );

  // Фильтрация по поиску
  const filteredPartners = russianPartners.filter((item) =>
    item.translations.ru.name.toLowerCase().includes(searchData.toLowerCase())
  );

  return (
    <div className="mb-30">
      <div className="flex sm:flex-row flex-col sm:items-center items-baseline gap-6 mb-4">
        <AdminSearchInput
          value={searchData}
          placeholder="Поиск Партнеров..."
          onChange={(e) => setSearchData(e.target.value)}
        />
        <AdminNewButton to="new">Создание Партнеров</AdminNewButton>
      </div>

      <Notification result={notifyResult} durationMilliSeconds={3000} />

      <div className="grid 2xl:grid-cols-4 min-[120rem]:grid-cols-5 min-[71.25rem]:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {filteredPartners.map((item) => {
          const { name, description } = item.translations.ru;
          return (
            <AdminPartnersCard
              key={item.id}
              id={item.id}
              name={name}
              description={description}
              notifyFn={setNotifyResult}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AdminPartners;
