import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StoreRoundedIcon from "@mui/icons-material/StoreRounded";
import PaymentRoundedIcon from "@mui/icons-material/PaymentRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import PollRoundedIcon from "@mui/icons-material/PollRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import Diversity1RoundedIcon from "@mui/icons-material/Diversity1Rounded";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">FFadmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreRoundedIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <PaymentRoundedIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingRoundedIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>

          <li>
            <PollRoundedIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneRoundedIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <Diversity1RoundedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsRoundedIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>

          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
