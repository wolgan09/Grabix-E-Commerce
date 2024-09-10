import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
// import InsertChartIcon from "@mui/icons-material/InsertChart";
// import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
// import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import {
  Link,
  NavLink
  // useLocation
} from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { sidebarList } from "./sidebarData";

const Sidebar = () => {
  // eslint-disable-next-line no-unused-vars
  const { dispatch } = useContext(DarkModeContext);
  // const location = useLocation();

  const getSidebarIcon = (item) => {
    // const isActive = location.pathname.indexOf(encodeURI(item.route)) !== -1;
    switch (item.icon) {
      case "dashboard":
        return <DashboardIcon className="icon" />;
      case "users":
        return <PersonOutlineIcon className="icon" />;
      case "products":
        return <StoreIcon className="icon" />;
      case "orders":
        return <CreditCardIcon className="icon" />;
      case "banners":
        return <LocalShippingIcon className="icon" />;
      case "profile":
        return <AccountCircleOutlinedIcon className="icon" />;
      case "logout":
        return <ExitToAppIcon className="icon" />;
      default:
        return <></>;
    }
  };

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/admin" style={{ textDecoration: "none" }}>
          <span className="logo">GRABIX</span>
          {/* <img src="../../assets/logo.png" /> */}
        </Link>
      </div>
      {/* <hr /> */}
      <div className="center">
        <ul>
          {sidebarList.map((item) => {
            return (
              <NavLink
                className="link"
                to={item.route}
                style={{ textDecoration: "none" }}
              >
                <li className="my-2">
                  {getSidebarIcon(item)}
                  <span>{item.moduleName}</span>
                </li>
              </NavLink>
            );
          })}
        </ul>
      </div>
      {/* <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div> */}
    </div>
  );
};

export default Sidebar;
