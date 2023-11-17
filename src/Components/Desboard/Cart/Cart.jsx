import React, { useContext } from "react";
import useCart from "../../Hook/useCart";
import SectionTitle from "../../SheardItem/SectionTitle/SectionTitle";
import { RiDeleteBin5Line } from "react-icons/ri";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../SheardItem/AuthProvider/AuthProvider";
import useAxiosSecure from "../../Hook/AxiosSecure";
import { Helmet } from "react-helmet-async";
import { CgAdd } from "react-icons/cg";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  console.log(cart);
  const totalPrice = cart.reduce(
    (accumulator, items) => accumulator + items.price,
    0
  );

  const deleteHandler = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Dashboard/cart</title>
      </Helmet>
      <SectionTitle
        heder="WANNA ADD MORE?"
        subHeader="---My Cart---"
      ></SectionTitle>
      <div className="flex items-center justify-evenly">
        <h2 className="text-5xl font-semibold">Items: {cart.length}</h2>
        <h2 className="text-5xl font-semibold">Total Price: {totalPrice}</h2>
        <button className="btn btn-outline px-20 text-lg">Pay</button>
      </div>
      <div>
        <div className="overflow-x-auto mt-6">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] text-white text-base font-semibold">
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p>{item.name}</p>
                  </td>
                  <td>${item.price}</td>
                  {/* <th>
                      <button className="btn bg-[#D1A054]"><FaRegEdit className="text-xl"></FaRegEdit></button>
                    </th> */}
                  <th>
                    <button
                      onClick={() => deleteHandler(item._id)}
                      className="btn bg-red-600"
                    >
                      <RiDeleteBin5Line className="text-xl"></RiDeleteBin5Line>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to='/ourshop'>
            <button className="btn btn-outline my-6 w-full">
              <CgAdd className=" font-medium text-xl hover:text-white"></CgAdd>{" "}
              More Food
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
