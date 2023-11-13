import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/SheardItem/Footer/Footer";
import Navbar from "../Components/SheardItem/Navbar/Navbar";

const MainRoot = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('signup')
    // Jokhon SignUp page a jabo tokhon Header and Footer option Daykhabo na
    
    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter|| <Footer></Footer>}
        </div>
    );
};

export default MainRoot;