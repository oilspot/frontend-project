import { Outlet } from "react-router-dom";
import Login from "../login/Login";
import Navbar from "../navbar/Navbar";

const Layout = () => {
    return <div className="d-flex row m-0 justify-content-end">
    <div>
        <Navbar />
        <Outlet />
    </div>
<div className="col-md-10">
        <div>
            <Login />
        </div>
</div>
    </div>;
}

export default Layout;