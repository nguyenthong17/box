import React, { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../context/auth";
import axios from "axios";

export default function Delivery() {
  const storedToken = localStorage.getItem("authToken");
  const [deliveries, setDeliveries] = useState([]);
  const [buttonClick, setButtonClick] = useState(0)

  const [chosenOrder, setChosenOrder] = useState('')


  const { user, setErrMessage } = useContext(AuthContext);

  const getOrder = () => {
    axios
      .get(`/driver/${user._id}`, {
        headers: { Authorization: `Bearer ${storedToken}` }
      })
      .then((ordersFromDB) => setDeliveries(ordersFromDB.data.orders))
      .catch((err) => setErrMessage(err.response.data.message));
  }

  const handleSelect = (e) => {
    const selected = e.target.value;
    setChosenOrder(selected)
  };

  const handleSubmit = (orderId) => {
    axios.put(`/driver/order/${orderId}`, {delivered: true},{
      headers: { Authorization: `Bearer ${storedToken}` }
    } )
    setButtonClick(buttonClick + 1)
  }

  const deliveryList = [...deliveries].map((delivery) => {
    const { _id, address } = delivery;

    return (
      <tr key={_id}>
        <td>{_id.slice(-5)}</td>
        <td>{address}</td>
        <td>
          <select className="delivered" onChange={handleSelect}>
            <option value="" defaultValue={""}></option>
            <option value={_id}>Delivered</option>
          </select>
        </td>
        <td>
          <button
            style={{display: _id === chosenOrder ? 'block' : 'none'}}
            onClick={() => handleSubmit(_id)}
          >
            Confirm
          </button>
        </td>
      </tr>
    );
  });

  useEffect(()=> {
    getOrder()
  },[buttonClick])

  useEffect(() => {
    getOrder()
  }, []);

  if (deliveries.length === 0) return <></>;
  return (
    <div className="center-div">
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Address</th>
            <th>Delivered?</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {deliveryList}
        </tbody>
      </table>
    </div>
  );
}
