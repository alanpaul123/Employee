import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    status: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://employeeserver-1.onrender.com/users", inputData)
      .then((res) => {
        alert("Data Posted SuccessFully!");
        navigate("/");
      });
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 create text-white p-5">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
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
            {" "}
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
