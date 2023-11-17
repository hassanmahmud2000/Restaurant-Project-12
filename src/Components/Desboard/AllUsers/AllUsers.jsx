import React from "react";
import SectionTitle from "../../SheardItem/SectionTitle/SectionTitle";
import useAxiosSecure from "../../Hook/AxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaUsers } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const deleteUserHandler = (user) => {
    console.log(user);
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
        axiosSecure.delete(`/users/${user}`).then((res) => {
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

  const makeAdminHendler = (user) => {
    console.log(user);

    axiosSecure.patch(`/users/admin/${user}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${res.data.name} || ${res.data.displayName} Make an Admin!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <SectionTitle
        heder="MANAGE ALL USERS"
        subHeader="---How many??---"
      ></SectionTitle>
      <div className="flex">
        <h2 className="text-5xl font-bold mb-2">Items: {users.length}</h2>
      </div>
      <div>
        <div className="overflow-x-auto ">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] text-white text-base font-semibold rounded-t-xl">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>

                  <td>
                    <p className="text-lg font-semibold">{user.name ||  <Skeleton count={10} />}</p>
                  </td>
                  <td>{user.email || <Skeleton count={10} />}</td>
                  <th>
                    {user.role === "Admin" ? (
                      <div className="badge badge-secondary">Admin</div>
                    ) : (
                      <button
                        onClick={() => makeAdminHendler(user._id)}
                        className="btn bg-[#D1A054]"
                      >
                        <FaUsers className="text-xl"></FaUsers>
                      </button>
                    )}
                  </th>
                  <th>
                    {/* {user.role === "Admin" ? (
                      ""
                    ) : ( */}
                      <button
                        onClick={() => deleteUserHandler(user._id)}
                        className="btn bg-red-600"
                      >
                        <RiDeleteBin5Line className="text-xl text-white hover:text-red-600"></RiDeleteBin5Line>
                      </button>
                    {/* )} */}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
