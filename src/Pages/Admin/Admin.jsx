import { Outlet } from "react-router";
import Sidebar from "../../Components/Admin/Sidebar/Sidebar";

const Admin = () => {
  return (
    <div className="min-h-screen">
      <div className="h-screen flex">
        <div className="xl:w-[280px] md:w-[240px] w-[180px] max-[500px]:w-0">
          <Sidebar />
        </div>
        <div className="flex-1 flex flex-col">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
