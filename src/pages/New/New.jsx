import "./New.css";
import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

export default function New({ inputs, title }) {
    let [file, setFile] = useState("");

    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="newTop">
                    <h2>{title}</h2>
                </div>
                <div className="newBottom">
                    <div className="newBottomLeft">
                        <img src={file?URL.createObjectURL(file):"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} />
                    </div>
                    <div className="newBottomRight">
                        <form action="">
                            <div className="formInput">
                                <label htmlFor="file">Image: <DriveFolderUploadOutlinedIcon className="fileIcon" /></label>
                                <input type="file" id="file" key={0} onChange={(e)=>setFile(e.target.files[0])} style={{ display: "none" }} />
                            </div>
                            {inputs.map((input) => (
                                <div className="formInput" key={input.key}>
                                    <label htmlFor={input.id}>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder} id={input.id} />
                                </div>
                            ))}
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};