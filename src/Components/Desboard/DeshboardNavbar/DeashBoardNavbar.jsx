import { NavLink } from "react-router-dom";
import {
  FaAlignJustify,
  FaBookmark,
  FaCalendar,
  FaHome,
  FaMoneyBill,
  FaShoppingBag,
  FaShoppingCart,
  FaUsers,
  FaBell,
} from "react-icons/fa";
import { Button } from "antd";
import { MdEmail, MdRestaurantMenu, MdReviews } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import useAxiosSecure from "../../Hook/AxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAdmin from "../../Hook/useAdmin";

const DeashBoardNavbar = () => {
  const axiosSecure = useAxiosSecure();
  const [isAdmin] = useAdmin();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      refetch();
      return res.data;
    },
  });
  return (
    <div className="w-64 bg-[#D1A054] min-h-[90vh] sticky z-10">
      <ul>
        {isAdmin ? (
          <>
            <li>
              <Button className="btn btn-ghost btn-wide">
                <NavLink
                  to="/dashboard/adminhome"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-white bg-blue-200 px-16 rounded-lg flex items-center justify-center "
                      : "flex p-2 items-center justify-start text-xl font-medium uppercase"
                  }
                >
                  <FaHome className="p-2 text-4xl"></FaHome>Admin Home
                </NavLink>
              </Button>
            </li>

            <li>
              <Button className="btn btn-ghost btn-wide">
                <NavLink
                  to="/dashboard/additems"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-white bg-blue-200 px-16 rounded-lg flex items-center justify-center "
                      : "flex p-2 items-center justify-start text-xl font-medium uppercase"
                  }
                >
                  <MdRestaurantMenu className="p-2 text-4xl"></MdRestaurantMenu>
                  Add Items
                </NavLink>
              </Button>
            </li>

            <li>
              <Button className="btn btn-ghost btn-wide">
                <NavLink
                  to="/dashboard/items"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-white bg-blue-200 px-16 rounded-lg flex items-center justify-center "
                      : "flex p-2 items-center justify-start text-xl font-medium uppercase"
                  }
                >
                  <TfiMenuAlt className="p-2 text-4xl"></TfiMenuAlt>manage items
                </NavLink>
              </Button>
            </li>

            <li>
              <Button className="btn btn-ghost btn-wide">
                <NavLink
                  to="/dashboard/bookings"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-white bg-blue-200 px-16 rounded-lg flex items-center justify-center "
                      : "flex p-2 items-center justify-start text-xl font-medium uppercase"
                  }
                >
                  <FaBookmark className="p-2 text-4xl"></FaBookmark>Manage
                  bookings
                </NavLink>
              </Button>
            </li>
            <li>
              <Button className="btn btn-ghost btn-wide">
                <NavLink
                  to="/dashboard/allusers"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-white bg-blue-200 px-16 rounded-lg flex items-center justify-center "
                      : "flex p-2 items-center justify-start text-xl font-medium uppercase"
                  }
                >
                  <FaUsers className="p-2 text-4xl"></FaUsers> all Users
                  <div className="badge badge-success gap-2 z-10 shadow-md
                  "><FaBell className="text-yellow-300"></FaBell> {users.length}</div>
                </NavLink>
              </Button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Button className="btn btn-ghost btn-wide">
                <NavLink
                  to="/dashboard/userhome"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-white bg-blue-200 px-16 rounded-lg flex items-center justify-center "
                      : "flex p-2 items-center justify-start text-xl font-medium uppercase"
                  }
                >
                  <FaHome className="p-2 text-4xl"></FaHome>User Home
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
                      ? "text-white bg-blue-200 px-16 rounded-lg flex items-center justify-center "
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
                      ? "text-white bg-blue-200 px-16 rounded-lg flex items-center justify-center "
                      : "flex p-2 items-center justify-start text-xl font-medium uppercase"
                  }
                >
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
                      ? "text-white bg-blue-200 px-16 rounded-lg flex items-center justify-center "
                      : "flex p-2 items-center justify-start text-xl font-medium uppercase"
                  }
                >
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
                      ? "text-white bg-blue-200 px-16 rounded-lg flex items-center justify-center "
                      : "flex p-2 items-center justify-start text-xl font-medium uppercase"
                  }
                >
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
                      ? "text-white bg-blue-200 px-16 rounded-lg flex items-center justify-center "
                      : "flex p-2 items-center justify-start text-xl font-medium uppercase"
                  }
                >
                  <FaBookmark className="p-2 text-4xl"></FaBookmark>My Booking
                </NavLink>
              </Button>
            </li>
          </>
        )}
        {/* Common NavLink */}

        <div className="divider"></div>
        <li>
          <Button className="btn btn-ghost btn-wide">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white bg-blue-200 px-16 rounded-lg flex items-center justify-center "
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
              to="/menu"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white bg-blue-200 px-16 rounded-lg flex items-center justify-center "
                  : "flex p-2 items-center justify-start text-xl font-medium uppercase"
              }
            >
              <FaAlignJustify className="p-2 text-4xl"></FaAlignJustify>Menu
            </NavLink>
          </Button>
        </li>
        <li>
          <Button className="btn btn-ghost btn-wide">
            <NavLink
              to="/ourshop"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white bg-blue-200 px-16 rounded-lg flex items-center justify-center "
                  : "flex p-2 items-center justify-start text-xl font-medium uppercase"
              }
            >
              <FaShoppingBag className="p-2 text-4xl"></FaShoppingBag>Shop
            </NavLink>
          </Button>
        </li>
        <li>
          <Button className="btn btn-ghost btn-wide">
            <NavLink
              to="/contactus"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white bg-blue-200 px-16 rounded-lg flex items-center justify-center "
                  : "flex p-2 items-center justify-start text-xl font-medium uppercase"
              }
            >
              <MdEmail className="p-2 text-4xl"></MdEmail>Contact
            </NavLink>
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default DeashBoardNavbar;
