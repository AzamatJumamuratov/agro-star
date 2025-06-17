import { useLoaderData } from "react-router";
import AdminProjectsCard from "../../../Components/Admin/Admin Projects/AdminProjectsCard";
import AdminNewButton from "../../../Components/Common/AdminNewButton";
import { useState } from "react";
import AdminSearchInput from "../../../Components/Admin/AdminSearchInput";

const AdminProjects = () => {
  const loaderData = useLoaderData();
  const [searchData, setSearchData] = useState("");

  return (
    <div className="mb-30">
      <div className="flex items-center gap-6 mb-4">
        <AdminSearchInput
          value={searchData}
          placeholder={"Поиск Проекта..."}
          onChange={(e) => setSearchData(e.target.value)}
        />
        <AdminNewButton to={"new"}>Создание Проекта</AdminNewButton>
      </div>
      <div className="grid 2xl:grid-cols-4 min-[71.25rem]:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-8">
        {loaderData.results.map((item) => {
          if (searchData != "") {
            if (
              item.title &&
              item.title.toLowerCase().includes(searchData.toLowerCase())
            ) {
              return (
                <AdminProjectsCard
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  image_url={item.image_url}
                />
              );
            }
          } else {
            return (
              <AdminProjectsCard
                key={item.id}
                title={item.title}
                description={item.description}
                image_url={item.image_url}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default AdminProjects;
