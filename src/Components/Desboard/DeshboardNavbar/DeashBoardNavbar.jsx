import { NavLink } from "react-router-dom";

import {
    FaBookmark,
  FaCalendar,
  FaHome,
  FaMoneyBill,
  FaShoppingCart,
} from "react-icons/fa";
import { Button } from "antd";
import { MdReviews } from "react-icons/md";

const DeashBoardNavbar = () => {
    return (
        <div className="w-64 bg-[#D1A054] min-h-[90vh] mb-14">
        <ul>
          <li>
            <Button className="btn btn-ghost btn-wide">
              <NavLink
                to="/dashboard/home"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white bg-sky-100 px-16 rounded-lg flex items-center justify-center "
                    : "flex p-2 items-center justify-start text-xl font-medium uppercase"
                }
              >
                <FaHome className="p-2 text-4xl"></FaHome> Home
              </NavLink>
            </Button>
          </li>

          <li>
            <Button className="btn btn-ghost btn-wide">
              <NavLink
                to="/dashboard/reservation"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white bg-sky-100 px-16 rounded-lg flex items-center justify-center "
                    : "flex p-2 items-center justify-start text-xl font-medium uppercase"
                }
              >
                <FaCalendar className="p-2 text-4xl"></FaCalendar>Reservation
              </NavLink>
            </Button>
          </li>

          <li>
            <Button className="btn btn-ghost btn-wide">
              <NavLink
                to="/dashboard/paymentHistory"
                className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white bg-sky-100 px-16 rounded-lg flex items-center justify-center "
                  : "flex p-2 items-center justify-start text-xl font-medium uppercase"
              }              >
                <FaMoneyBill className="p-2 text-4xl"></FaMoneyBill>Payment
                History
              </NavLink>
            </Button>
          </li>

          <li>
            <Button className="btn btn-ghost btn-wide">
              <NavLink
                to="/dashboard/cart"
                className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white bg-sky-100 px-16 rounded-lg flex items-center justify-center "
                  : "flex p-2 items-center justify-start text-xl font-medium uppercase"
              }              >
                <FaShoppingCart className="p-2 text-4xl"></FaShoppingCart> My
                Cart
              </NavLink>
            </Button>
          </li>
          <li>
            <Button className="btn btn-ghost btn-wide">
              <NavLink
                to="/dashboard/review"
                className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white bg-sky-100 px-16 rounded-lg flex items-center justify-center "
                  : "flex p-2 items-center justify-start text-xl font-medium uppercase"
              }              >
                <MdReviews className="p-2 text-4xl"></MdReviews> Add Review
              </NavLink>
            </Button>
          </li>
          <li>
            <Button className="btn btn-ghost btn-wide">
              <NavLink
                to="/dashboard/booking"
                className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white bg-sky-100 px-16 rounded-lg flex items-center justify-center "
                  : "flex p-2 items-center justify-start text-xl font-medium uppercase"
              }              >
                <FaBookmark className="p-2 text-4xl"></FaBookmark>My Booking
              </NavLink>
            </Button>
          </li>
          <div className="divider"></div>
          <li>
            <Button className="btn btn-ghost btn-wide">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white bg-sky-100 px-16 rounded-lg flex items-center justify-center "
                    : "flex p-2 items-center justify-start text-xl font-medium uppercase"
                }
              >
                <FaHome className="p-2 text-4xl"></FaHome> Home
              </NavLink>
            </Button>
          </li>
        </ul>
      </div>
    );
};

export default DeashBoardNavbar;