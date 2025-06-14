import { Outlet } from "react-router";
import AdminMain from "../../Components/Admin/AdminMain";
import Sidebar from "../../Components/Admin/Sidebar";

const Admin = () => {
  return (
    <div className="flex">
      <div className="w-[280px]">
        <Sidebar />
      </div>
      <div className="w-[calc(100%-280px)]">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
