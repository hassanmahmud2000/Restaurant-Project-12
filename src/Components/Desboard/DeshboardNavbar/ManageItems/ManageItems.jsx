import Swal from "sweetalert2";
import useHook from "../../../Hook/useHook";
import SectionTitle from "../../../SheardItem/SectionTitle/SectionTitle";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import useAxiosSecure from "../../../Hook/AxiosSecure";

const ManageItems = () => {
  const { data } = useHook();
  const axiosSecure = useAxiosSecure();
  console.log(data);

  const itemDeleteHendler = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "Do You want Delete this Item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <div>
      <SectionTitle
        heder="Manage All Items"
        subHeader="----Hurry Up----"
      ></SectionTitle>
      <div>
        <h1 className="text-xl font-semibold">
          Total Menu Items: {data.length}
        </h1>
        <div className="overflow-x-auto rounded-t-lg">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] text-white text-base">
              <tr>
                <th>Product No:</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {data?.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-square w-14 h-1w-14">
                        <img src={item.image} alt="menu Image" />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price} </td>
                  <th>
                    <button className="btn bg-[#D1A054] hover:bg-green-400">
                      <FaRegEdit className="text-xl"></FaRegEdit>
                    </button>
                  </th>
                  <th>
                    <button
                      onClick={() => itemDeleteHendler(item._id)}
                      className="btn bg-red-600"
                    >
                      <RiDeleteBinLine className="text-xl"></RiDeleteBinLine>
                    </button>
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

export default ManageItems;
