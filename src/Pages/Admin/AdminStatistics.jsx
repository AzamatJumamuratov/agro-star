import CountableStatistics from "../../Components/Admin/Admin Statistics/CountableStatistics";
import AdminTitle from "../../Components/Admin/AdminTitle";
import Header from "../../Components/Admin/Header/Header";
import PopularNews from "../../Components/Admin/Admin Statistics/PopularNews";

const AdminStatistics = () => {
  return (
    <>
      <Header>Cтатистика портала</Header>
      <main className="overflow-y-auto px-6 xl:pt-9 lg:pt-6 pt-3 mb-6">
        <AdminTitle>Статистики</AdminTitle>
        <CountableStatistics />
        <PopularNews />
      </main>
    </>
  );
};

export default AdminStatistics;
