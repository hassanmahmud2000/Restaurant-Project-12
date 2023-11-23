import { useContext } from "react";
import { AuthContext } from "../../SheardItem/AuthProvider/AuthProvider";
import useAxiosSecure from "../../Hook/AxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaDollarSign, FaProductHunt, FaUsers } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";

const AdminHome = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get("/admin-stats");
        console.log(res.data);
        return res.data; // Return the data fetched by axios
      } catch (error) {
        // Handle errors if any
        console.error("Error fetching data:", error);
        throw new Error("Failed to fetch data");
      }
    },
  });
  return (
    <div>
      <h1 className="text-3xl font-bold mb-1">
        Hi! Welcome {user?.displayName ? user.displayName : "Back"}
      </h1>

      <div className="mt-10">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaDollarSign className="text-4xl"></FaDollarSign>
            </div>
            <div className="stat-title">Revenue</div>
            <div className="stat-value">${stats?.revenue}</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUsers className="text-4xl"></FaUsers>
            </div>
            <div className="stat-title">Users</div>
            <div className="stat-value">{stats?.users}</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaProductHunt className="text-4xl"></FaProductHunt>
            </div>
            <div className="stat-title">Total Menu Items</div>
            <div className="stat-value">{stats?.menuItems}</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <CiDeliveryTruck className="text-5xl"></CiDeliveryTruck>
            </div>
            <div className="stat-title">Orders</div>
            <div className="stat-value">{stats?.orders}</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
