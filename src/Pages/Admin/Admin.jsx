import { Outlet } from "react-router";
import Sidebar from "../../Components/Admin/Sidebar/Sidebar";

const Admin = () => {
  return (
    <div className="flex">
      <div className="xl:w-[280px] md:w-[240px] w-[180px]">
        <Sidebar />
      </div>
      <div className="xl:w-[calc(100%-280px)] md:w-[calc(100%-240px)] w-[calc(100%-180px)]">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
