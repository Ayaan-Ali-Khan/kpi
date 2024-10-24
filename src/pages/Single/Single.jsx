import "./Single.css";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Chart from "../../components/Chart/Chart.jsx";
import Table from "../../components/Table/Table.jsx";

export default function Single() {
    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="singleTop">
                    <div className="singleLeft">
                        <button className="edit">Edit</button>
                        <h3 className="singleTitle">Information</h3>
                        <div className="singleItem">
                            <img src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                            <div className="details">
                                <h1 className="itemTitle">Jane Doe</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email: </span>
                                    <span className="itemValue">janedoe@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone: </span>
                                    <span className="itemValue">+91 9971650974</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address: </span>
                                    <span className="itemValue">Elton St. 234 Garden Yd. New York</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country: </span>
                                    <span className="itemValue">USA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="singleRight">
                        <Chart aspect={3 / 1} title="User Spending (Last 6 Months)" />
                    </div>
                </div>
                <div className="singleBottom">
                    <h3 className="singleBottomTitle">Last Transactions</h3>
                    <Table />
                </div>
            </div>
        </div>
    );
}