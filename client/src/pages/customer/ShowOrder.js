import React, { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../context/auth";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ShowOrder() {
  const [result, setResult] = useState([]);
  const { user } = useContext(AuthContext);
  const customerId = user._id;

  const storedToken = localStorage.getItem("authToken");

  const orderArr = [...result].map((order) => {
    const { _id, content } = order;
    let status = "";
    if (!order?.driverId) {
      status = "Processing";
    } else {
      status = "On the way";
    }

    return (
      <tr key={_id}>
        <td>{_id.slice(-5)}</td>
        <td>{content}</td>
        <td>{status}</td>
        {status === "Processing" && (
          <td>
            <Link to={`/customer/order/${_id}`}>Edit</Link>
          </td>
        )}
      </tr>
    );
  });

  useEffect(() => {
    axios
      .get(`/customer/${customerId}`, {
        headers: { Authorization: `Bearer ${storedToken}` }
      })
      .then((response) => setResult(response.data));
  }, []);

  if (result.length === 0) return <></>;
  return (
    <div className="center-div">
      <table className="customer-order">
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Content</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{orderArr}</tbody>
      </table>
    </div>
  );
}
