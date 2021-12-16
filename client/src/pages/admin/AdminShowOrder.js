import React, { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../context/auth";
import axios from "axios";

export default function AdminShowOrder() {
  const storedToken = localStorage.getItem("authToken");

  const [orderFromDB, setOrderFromDB] = useState([]);
  const [driversFromDB, setDriversFromDB] = useState([]);
  const [isSelected, setIsSelected] = useState(false)
  const [buttonClick, setButton] = useState(0);
  const { setErrMessage } = useContext(AuthContext);

  const visible = isSelected ? 'block' : 'none'

  const getDataFromDB = () => {
    axios
      .get("/admin/orders", {
        headers: { Authorization: `Bearer ${storedToken}` }
      })
      .then((response) => setOrderFromDB(response.data.ordersFromDB))
      .catch((err) => setErrMessage(err.response.data.message));

    axios
      .get("/admin/drivers", {
        headers: { Authorization: `Bearer ${storedToken}` }
      })
      .then((response) => setDriversFromDB(response.data.driversFromDB))
      .catch((err) => setErrMessage(err.response.data.message));
  };

  const handleSelect = (e) => {
    const selected = e.target.value
     if (selected) {
       setIsSelected(true)
     } else {
       setIsSelected(false)
     }
  };

  const handleSubmit = (orderId) => {
    const driverId = document.getElementById("driver").value;
    axios.put(
      `/admin/${orderId}`,
      { driverId },
      {
        headers: { Authorization: `Bearer ${storedToken}` }
      }
    );
    setButton(true);
  };

  const driversName = [...driversFromDB].map((driver) => {
    return (
      <option value={driver._id} key={driver._id}>
        {driver.firstName} {driver.lastName}
      </option>
    );
  });

  const orders = [...orderFromDB]
    .filter((order) => !order?.driverId)
    .map((order) => {
      const { _id, address } = order;
      return (
        <tr key={_id}>
          <td>{_id.slice(-5)}</td>
          <td>{address}</td>
          <td>
            <select id="driver" onChange={handleSelect}>
              <option value="" defaultValue={""}>
                {" "}
              </option>
              {driversName}
            </select>
          </td>
          <td>
            <button
              id="assign-button"
              type="submit"
              style={{ display: visible }}
              onClick={() => handleSubmit(_id)}
            >
              Assign
            </button>
          </td>
        </tr>
      );
    });

  useEffect(() => {
    getDataFromDB();
  }, [buttonClick]);

  useEffect(() => {
    getDataFromDB();
  }, []);

  if (orderFromDB.length === 0) return <></>;
  return (
    <div>
      <h2>Unassigned Orders</h2>
      <table className='driver-table'>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Address</th>
            <th>Pick a driver</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{orders}</tbody>
      </table>
    </div>
  );
}
