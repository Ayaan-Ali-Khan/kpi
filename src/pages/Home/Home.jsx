import "./Home.css";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Widget from "../../components/Widget/Widget.jsx";
import Featured from "../../components/Featured/Featured.jsx";
import Chart from "../../components/Chart/Chart.jsx";
import Table from "../../components/Table/Table.jsx"

export default function Home() {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />
                </div>
                <div className="charts">
                    <Featured />
                    <Chart aspect={2/1} title="Last 6 Months Revenue" />
                </div>
                <div className="listContainer">
                    <h2 className="listTitle">Latest Transactions</h2>
                    <Table />
                </div>
            </div>
        </div>
    );
}