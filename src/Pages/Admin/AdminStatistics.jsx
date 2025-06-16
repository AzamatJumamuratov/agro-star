import CountableStatistics from "../../Components/Admin/Admin Statistics/CountableStatistics";
import AdminTitle from "../../Components/Admin/AdminTitle";
import Header from "../../Components/Admin/Header/Header";
import PopularNews from "../../Components/Admin/Admin Statistics/PopularNews";

const AdminStatistics = () => {
  return (
    <div>
      <Header>Cтатистика портала</Header>
      <main className="px-6 xl:pt-9 lg:pt-6 pt-3 mb-6">
        <AdminTitle>Статистики</AdminTitle>
        <CountableStatistics />
        <PopularNews />
      </main>
    </div>
  );
};

export default AdminStatistics;
