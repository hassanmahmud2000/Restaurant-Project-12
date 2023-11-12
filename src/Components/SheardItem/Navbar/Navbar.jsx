import { MdOutlineFastfood } from 'react-icons/md';
import { Link, NavLink } from "react-router-dom";
import icon from '../../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png'
import { BiSolidUserCircle } from 'react-icons/bi';

const Navbar = () => {
  const navOptions = (
    <>
      <NavLink
        title='Home'
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#EEFF25] mr-4" : "mr-4"
        }
      >
        <li>HOME</li>
      </NavLink>
      <NavLink
        title='Contact Us'
        to="/contactus"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#EEFF25] mr-4" : "mr-4"
        }
      >
        <li>CONTACT US</li>
      </NavLink>
      <NavLink
      title='Dashboard'
        to="/dashboard"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#EEFF25] mr-4" : "mr-4"
        }
      >
        <li>DASHBOARD</li>
      </NavLink>
      <NavLink
      title='Our Menu'
        to="/menu"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#EEFF25] mr-4" : "mr-4"
        }
      >
        <li>OUR MENU</li>
      </NavLink>
      <NavLink
      title='Our Shop'
        to="/ourshop"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#EEFF25] mr-4" : "mr-4"
        }
      >
        <div className='flex justify-center items-center'><li>OUR SHOP</li> <img src={icon} alt="" className='w-[55px] h-[43px]'/></div>
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
            className="menu menu-sm dropdown-content justify-center items-center mt-3 z-[1] p-2 shadow bg-base-100 font-semibold rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case font-bold text-white text-3xl">
          Bistro <br /><span className="text-yellow-500">Restaurant</span> <MdOutlineFastfood></MdOutlineFastfood>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu font-semibold justify-center items-center menu-horizontal px-1 text-white">{navOptions}</ul>
        <button className='flex gap-2 justify-center items-center'>
          <p className='text-white font-medium'>SIGN OUT</p>
          <BiSolidUserCircle className='text-4xl text-white mr-2'></BiSolidUserCircle>
        </button>
      </div>
      
    </div>
  );
};

export default Navbar;
