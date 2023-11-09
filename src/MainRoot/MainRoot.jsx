import { Outlet } from "react-router-dom";
import Footer from "../Components/SheardItem/Footer/Footer";
import Navbar from "../Components/SheardItem/Navbar/Navbar";

const MainRoot = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainRoot;