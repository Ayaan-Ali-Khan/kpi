import "./Widget.css";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

export default function Widget({ type }) {
    let data;
    const amount = 100;
    const diff = 20;
    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all Users",
                icon: (
                    <PersonOutlineIcon
                        className="poi"
                        style={{
                            color: "crimson",
                            backgroundColor: "rgba(255, 0, 0, 0.2)",
                        }}
                    />
                ),
            };
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all Orders",
                icon: (
                    <ShoppingCartOutlinedIcon
                        className="poi"
                        style={{
                            backgroundColor: "rgba(218, 165, 32, 0.2)",
                            color: "goldenrod",
                        }}
                    />
                ),
            };
            break;
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View net Earnings",
                icon: (
                    <MonetizationOnOutlinedIcon
                        className="poi"
                        style={{
                            backgroundColor: "rgba(0, 128, 0, 0.2)",
                            color: "green"
                        }}
                    />
                ),
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "View net Earnings",
                icon: (
                    <AccountBalanceWalletOutlinedIcon
                        className="poi"
                        style={{
                            backgroundColor: "rgba(128, 0, 128, 0.2)",
                            color: "purple",
                        }}
                    />
                ),
            };
            break;
    }
    return (
        <div className="widget">
            <div className="left">
                <span className="title-wgt">{data.title}</span>
                <span className="counter-wgt">{data.isMoney && "$"} {amount}</span>
                <span className="link-wgt">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    );
};