import "./List.css";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Datatable from "../../components/Datatable/Datatable.jsx";

export default function List() {
    return (
        <div className="list">
            <Sidebar />
            <div className="list-container">
                <Navbar />
                <div className="datatable">
                    <Datatable />
                </div>
            </div>
        </div>
    );
};