import { MdOutlineFastfood } from 'react-icons/md';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navOptions = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#EEFF25] mr-3" : "mr-3"
        }
      >
        <li>HOME</li>
      </NavLink>
      <NavLink
        to="/contactus"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#EEFF25] mr-3" : "mr-3"
        }
      >
        <li>CONTACT US</li>
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#EEFF25] mr-3" : "mr-3"
        }
      >
        <li>DASHBOARD</li>
      </NavLink>
      <NavLink
        to="/ourmenu"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#EEFF25] mr-3" : "mr-3"
        }
      >
        <li>OUR MENU</li>
      </NavLink>
      <NavLink
        to="/ourshop"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#EEFF25] mr-3" : "mr-3"
        }
      >
        <li>OUR SHOP</li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar fixed z-20 max-w-screen-xl bg-black bg-opacity-30">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 font-semibold rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case font-bold text-white text-3xl">
          Bistro <br /><span className="text-yellow-500">Restaurant</span> <MdOutlineFastfood></MdOutlineFastfood>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu font-semibold menu-horizontal px-1 text-white">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
