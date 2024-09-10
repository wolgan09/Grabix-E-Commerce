import AdminRoutes from "../../Routes/AdminRoutes";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./Admin.scss";
// import { Outlet } from "react-router-dom";

function Admin() {
  return (
    <div className="flex ">
      <div className="">
        <Sidebar />
      </div>
      <div className="w-full">
        <Navbar />
        <div className="bg-[#ece8ff] p-4 h-[calc(100vh_-_3.2rem)]">
          <div className="h-full w-full bg-white rounded-xl p-3 shadow-lg ">
            <AdminRoutes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
