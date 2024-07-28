import AdminRoutes from "../../Routes/AdminRoutes";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./Admin.scss";
import { Outlet } from "react-router-dom";

function Admin() {
  return (
    <div>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="widgets"></div>
          <AdminRoutes />
        </div>
      </div>
    </div>
  );
}

export default Admin;
