import { Outlet } from "react-router";
import AdminMain from "../../Components/Admin/AdminMain";
import Sidebar from "../../Components/Admin/Sidebar";

const Admin = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Admin;
