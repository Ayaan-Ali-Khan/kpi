import { productInputs, userInputs } from "./formSource.js";
import Home from "./pages/Home/Home.jsx";
import List from "./pages/List/List.jsx";
import Login from "./pages/Login/Login.jsx";
import New from "./pages/New/New.jsx";
import Single from "./pages/Single/Single.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />}></Route>
                        <Route path="login" element={<Login />}></Route>
                        <Route path="users">
                            <Route index element={<List />} ></Route>
                            <Route path=":userId" element={<Single />} ></Route>
                            <Route path="new" element={<New inputs={userInputs} title="Add New User" />} ></Route>
                        </Route>
                        <Route path="products">
                            <Route index element={<List />} ></Route>
                            <Route path=":productId" element={<Single />} ></Route>
                            <Route path="new" element={<New inputs={productInputs} title="Add New Product" />} ></Route>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
