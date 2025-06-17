import { useLoaderData } from "react-router";
import AdminNewButton from "../../../Components/Common/AdminNewButton";
import { useState } from "react";
import AdminPartnersCard from "../../../Components/Admin/Admin Partners/AdminPartnersCard";
import AdminSearchInput from "../../../Components/Admin/AdminSearchInput";

const AdminPartners = () => {
  const loaderData = useLoaderData();
  const [searchData, setSearchData] = useState("");

  return (
    <div className="mb-30">
      <div className="flex items-center gap-6 mb-4">
        <AdminSearchInput
          value={searchData}
          placeholder={"Поиск Партнеров..."}
          onChange={(e) => setSearchData(e.target.value)}
        />
        <AdminNewButton to={"new"}>Создание Партнеров</AdminNewButton>
      </div>
      <div className="grid 2xl:grid-cols-4 min-[71.25rem]:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-8">
        {loaderData.results.map((item) => {
          if (searchData != "") {
            if (
              item.name &&
              item.name.toLowerCase().includes(searchData.toLowerCase())
            ) {
              return (
                <AdminPartnersCard
                  key={item.id}
                  name={item.name}
                  description={item.description}
                />
              );
            }
          } else {
            return (
              <AdminPartnersCard
                key={item.id}
                name={item.name}
                description={item.description}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default AdminPartners;
