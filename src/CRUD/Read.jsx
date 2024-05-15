import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function Read() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [Data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://employeeserver-qdbh.onrender.com/users" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container big b">
      <div className="container p-5 sb">
        <p>ID : {Data.id}</p>
        <p>Name : {Data.name}</p>
        <p>Email : {Data.email}</p>
        <p>Status : {Data.status}</p>
        <Link className="text-decoration-none btn btn-secondary" to="/">
          Back
        </Link>
      </div>
    </div>
  );
}

export default Read;
