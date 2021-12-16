import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth";
import { useNavigate, useParams } from "react-router-dom";

export default function CreateOrder() {
  const [newContent, setContent] = useState("");
  const [oldContent, setOldContent] = useState("");
  const { setErrMessage } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const storedToken = localStorage.getItem("authToken");

  const handleSubmit = (e) => {
    e.preventDefault();
    const reqBody = { newContent };

    axios
      .put(`/customer/order/${id}`, reqBody, {
        headers: { Authorization: `Bearer ${storedToken}` }
      })
      .then((response) => navigate("/customer/orders"));
  };

  useEffect(() => {
    axios
      .get(`/customer/order/${id}`, {
        headers: { Authorization: `Bearer ${storedToken}` }
      })
      .then((response) => {
        setOldContent(response.data.content);
        setContent(response.data.content);
      })
      .catch((err) => setErrMessage(err.response.data.message));
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Old order content
          <textarea cols="30" rows="10" value={oldContent} readOnly></textarea>
        </label>
        <label>
          New order content
          <textarea
            cols="30"
            rows="10"
            value={newContent}
            placeholder="Please enter your order"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
