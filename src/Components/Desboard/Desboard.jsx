
import { Outlet } from "react-router-dom";
import DeashBoardNavbar from "./DeshboardNavbar/DeashBoardNavbar";

const Desboard = () => {
  const isAdmin = true;
  return (
    <div className="flex mt-6">
      <div className="">
        <DeashBoardNavbar></DeashBoardNavbar>
      </div>
      <div className="flex-1 ml-12">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Desboard;
