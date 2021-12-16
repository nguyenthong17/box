import axios from "axios";
import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/auth";
import {useNavigate} from 'react-router-dom'

export default function CreateOrder() {
  const [content, setContent] = useState("");

  const { user,headers, setErrMessage } = useContext(AuthContext);
  const navigate = useNavigate()
  const {_id,address} = user
  const customerId = _id
  const reqBody = {content, customerId, address}  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/customer/order', reqBody,{headers})
        .then(response => navigate('/customer/orders'))
        .catch(err => setErrMessage(err.response.data.message))
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Order content
          <textarea
            cols="30"
            rows="10"
            value={content}
            placeholder="Please enter your order"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
