
import { Outlet } from "react-router-dom";
import DeashBoardNavbar from "./DeshboardNavbar/DeashBoardNavbar";

const Desboard = () => {
  return (
    <div className="flex mt-12">
      <div>
        <DeashBoardNavbar></DeashBoardNavbar>
      </div>
      <div className="flex-1 ml-12 mb-14">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Desboard;
