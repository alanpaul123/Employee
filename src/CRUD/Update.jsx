import React, { useEffect, useState } from "react";
import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";

function Update() {
  const { id } = useParams();
  const [inputData, setInputData] = useState({
    id: id,
    name: "",
    email: "",
    status: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://employeeserver-qdbh.onrender.com/users" + id)
      .then((res) => setInputData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put("https://employeeserver-qdbh.onrender.com/users" + id, inputData)
      .then((res) => {
        alert("Data Updated SuccessFully!");
        navigate("/");
      });
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 create text-white p-5">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="id">ID: </label>
            <input
              type="number"
              name="id"
              className="form-control"
              value={inputData.id}
              disabled
            />
          </div>

          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
              value={inputData.name}
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
              value={inputData.email}
            />
          </div>

          <div className="sta">
            <label htmlFor="status">Status: </label>
            <select
              name="status "
              id="status"
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  status: e.target.value == 1 ? "Active" : "Inactive",
                })
              }
            >
              <option value="">-select-</option>
              <option value="1">Active</option>
              <option value="2">Inactive</option>
            </select>
          </div>

          <br />

          <button
            className="btn "
            style={{ color: "white", backgroundColor: "#868e96" }}
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default Update;
