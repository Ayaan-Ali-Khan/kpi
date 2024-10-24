import "./Datatable.css";
import { Link } from "react-router-dom";

export default function Datatable() {
    const rows = [
        {
            id: 1143159,
            username: "John Snow",
            img: "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            email: "issnow@gmail.com",
            age: "35",
            status: "Active",
        },
        {
            id: 1143158,
            username: "Jamie Lannister",
            img: "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            email: "issnow@gmail.com",
            age: "42",
            status: "Pending",
        },
        {
            id: 1143157,
            username: "John Snow",
            img: "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            email: "issnow@gmail.com",
            age: "35",
            status: "Passive",
        },
        {
            id: 1143156,
            username: "John Snow",
            img: "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            email: "issnow@gmail.com",
            age: "35",
            status: "Active",
        },
        {
            id: 1143155,
            username: "John Snow",
            img: "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            email: "issnow@gmail.com",
            age: "35",
            status: "Active",
        },
    ];

    return (
        <div className="dataTable">
            <div className="datatableTitle">
                Add New User
                <Link to="/users/new" className="link" >
                    Add New
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td className="cellWrapper">
                                <img src={row.img} alt="" />
                                {row.username}
                            </td>
                            <td>{row.email}</td>
                            <td>{row.age}</td>
                            <td className={`status ${row.status}`}>{row.status}</td>
                            <td>
                                <Link to="/users/aak">
                                    <button className="view">View</button>
                                </Link>
                                <button className="delete">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};