import React, { useEffect, useState } from "react";
import { changeStatus, getOrders } from "../../functions/admin";
import { useDispatch, useSelector } from "react-redux";

import AdminNav from "../../components/nav/AdminNav";
import Orders from "../../components/order/Orders";
import { toast } from "react-toastify";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = () =>
    getOrders(user.token).then((res) => {
      console.log(JSON.stringify(res.data, null, 4));
      setOrders(res.data);
    });

  const handleStatusChange = (orderId, orderStatus) => {
    changeStatus(orderId, orderStatus, user.token).then((res) => {
      toast.success("Status updated");
      loadOrders();
    });
  };

  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-md-2">
          <AdminNav />
        </div>

        <div className="col-md-10">
          <h2>Admin Dashboard</h2>
          <hr />
          {/* {JSON.stringify(orders)} */}
          <Orders orders={orders} handleStatusChange={handleStatusChange} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
