import "./Sidebar.css";
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import GroupIcon from '@mui/icons-material/Group';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo" >KPI Dashboard</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul type="none" >
                    <p className="title">MAIN</p>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <li>
                            <SpaceDashboardIcon className="icon" />
                            <span className="list-itm">Dashboard</span>
                        </li>
                    </Link>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <GroupIcon className="icon" />
                            <span className="list-itm">Users</span>
                        </li>
                    </Link>
                    <Link to="/products" style={{ textDecoration: "none" }}>
                        <li>
                            <StoreIcon className="icon" />
                            <span className="list-itm">Products</span>
                        </li>
                    </Link>
                    <li>
                        <CreditCardIcon className="icon" />
                        <span className="list-itm">Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className="icon" />
                        <span className="list-itm">Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <InsertChartIcon className="icon" />
                        <span className="list-itm">Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className="icon" />
                        <span className="list-itm">Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamIcon className="icon" />
                        <span className="list-itm">System Health</span>
                    </li>
                    <li>
                        <PsychologyIcon className="icon" />
                        <span className="list-itm">Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className="icon" />
                        <span className="list-itm">Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleIcon className="icon" />
                        <span className="list-itm">Profile</span>
                    </li>
                    <li>
                        <ExitToAppIcon className="icon" />
                        <span className="list-itm">Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};