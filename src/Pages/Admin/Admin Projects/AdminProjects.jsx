import { useLoaderData } from "react-router";
import AdminProjectsCard from "../../../Components/Admin/Admin Projects/AdminProjectsCard";
import AdminNewButton from "../../../Components/Common/AdminNewButton";
import { useState } from "react";
import AdminSearchInput from "../../../Components/Admin/AdminSearchInput";
import Notification from "../../../Components/Common/Notification";

const AdminProjects = () => {
  const loaderData = useLoaderData();
  const [searchData, setSearchData] = useState("");
  const [notifyResult, setNotifyResult] = useState(null);

  // Берем только проекты с русским переводом
  const russianProjects = loaderData.results.filter(
    (item) => item.translations?.ru
  );

  // Применяем фильтрацию по поисковому запросу
  const filteredProjects = russianProjects.filter((item) => {
    const title = item.translations.ru.title;
    return title.toLowerCase().includes(searchData.toLowerCase());
  });

  return (
    <div className="mb-30">
      <div className="flex sm:flex-row flex-col sm:items-center items-baseline gap-6 mb-4">
        <AdminSearchInput
          value={searchData}
          placeholder="Поиск Проекта..."
          onChange={(e) => setSearchData(e.target.value)}
        />
        <AdminNewButton to="new">Создание Проекта</AdminNewButton>
      </div>

      <Notification result={notifyResult} durationMilliSeconds={3000} />

      <div className="grid 2xl:grid-cols-4 min-[71.25rem]:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {filteredProjects.map((item) => {
          const { title, description } = item.translations.ru;
          return (
            <AdminProjectsCard
              key={item.id}
              id={item.id}
              title={title}
              description={description}
              image_url={item.image_url}
              notifyFn={setNotifyResult}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AdminProjects;
