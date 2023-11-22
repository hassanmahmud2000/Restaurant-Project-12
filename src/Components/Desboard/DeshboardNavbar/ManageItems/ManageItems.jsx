import Swal from "sweetalert2";
import useHook from "../../../Hook/useHook";
import SectionTitle from "../../../SheardItem/SectionTitle/SectionTitle";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import useAxiosSecure from "../../../Hook/AxiosSecure";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const ManageItems = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const { data, refetch, loading } = useHook();
  const axiosSecure = useAxiosSecure();
  console.log(data);
  const dessert = data.filter((item) => item.category === "dessert");
  const pizza = data.filter((item) => item.category === "pizza");
  const salad = data.filter((item) => item.category === "salad");
  const soup = data.filter((item) => item.category === "soup");
  const drinks = data.filter((item) => item.category === "drinks");
  console.log(dessert, pizza, salad);

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
          refetch();
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
      <Helmet>
          <title>Bistro Boss | Manage Items</title>
      </Helmet>
      <SectionTitle
        heder="Manage All Items"
        subHeader="----Hurry Up----"
      ></SectionTitle>
      <div>
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-xl font-semibold">
            Total Menu Items: {data.length}
          </h1>
        </div>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="uppercase">
            <Tab>All</Tab>
            <Tab>Salad</Tab>
            <Tab>pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>desserts</Tab>
            <Tab>drinks</Tab>
          </TabList>
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
                </tr>
              </thead>
              <tbody>
                <TabPanel>
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
                        <Link to={`/dashboard/update/${item._id}`}>
                          <button
                            // onClick={}
                            className="btn bg-[#D1A054] hover:bg-green-400"
                          >
                            <FaRegEdit className="text-xl"></FaRegEdit>
                          </button>
                        </Link>
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
                </TabPanel>
                <TabPanel>
                  {/* row 1 */}
                  <p className="text-lg text-green-600 font-medium">Salad Item:{salad.length}</p>
                  {salad.map((item, index) => (
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
                        <Link to={`/dashboard/update/${item._id}`}>
                          <button
                            // onClick={}
                            className="btn bg-[#D1A054] hover:bg-green-400"
                          >
                            <FaRegEdit className="text-xl"></FaRegEdit>
                          </button>
                        </Link>
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
                </TabPanel>
                <TabPanel>
                <p className="text-lg text-green-600 font-medium">Salad Item:{pizza.length}</p>
                  {/* row 1 */}
                  {pizza.map((item, index) => (
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
                        <Link to={`/dashboard/update/${item._id}`}>
                          <button
                            // onClick={}
                            className="btn bg-[#D1A054] hover:bg-green-400"
                          >
                            <FaRegEdit className="text-xl"></FaRegEdit>
                          </button>
                        </Link>
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
                </TabPanel>
                <TabPanel>
                <p className="text-lg text-green-600 font-medium">Salad Item:{soup.length}</p>
                  {/* row 1 */}
                  {soup.map((item, index) => (
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
                        <Link to={`/dashboard/update/${item._id}`}>
                          <button
                            // onClick={}
                            className="btn bg-[#D1A054] hover:bg-green-400"
                          >
                            <FaRegEdit className="text-xl"></FaRegEdit>
                          </button>
                        </Link>
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
                </TabPanel>
                <TabPanel>
                <p className="text-lg text-green-600 font-medium">Salad Item:{dessert.length}</p>
                  {/* row 1 */}
                  {dessert.map((item, index) => (
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
                        <Link to={`/dashboard/update/${item._id}`}>
                          <button
                            // onClick={}
                            className="btn bg-[#D1A054] hover:bg-green-400"
                          >
                            <FaRegEdit className="text-xl"></FaRegEdit>
                          </button>
                        </Link>
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
                </TabPanel>
                <TabPanel>
                <p className="text-lg text-green-600 font-medium">Salad Item:{drinks.length}</p>
                  {/* row 1 */}
                  {drinks.map((item, index) => (
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
                        <Link to={`/dashboard/update/${item._id}`}>
                          <button
                            // onClick={}
                            className="btn bg-[#D1A054] hover:bg-green-400"
                          >
                            <FaRegEdit className="text-xl"></FaRegEdit>
                          </button>
                        </Link>
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
                </TabPanel>
              </tbody>
            </table>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default ManageItems;
