import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://employeeserver-qdbh.onrender.com/users")
      .then((res) => {
        console.log(res.data);
        return setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleDelete(id) {
    const confirm = window.confirm("Do you Like To Delte");
    if (confirm) {
      axios
        .delete("https://employeeserver-qdbh.onrender.com/users" + id)
        .then((res) => {
          alert("Record Deleted");
          navigate("/");
        });
    }
  }

  return (
    <div className="container ">
      <h2 className="text-center a">Employe Management App</h2>
      <Link to="/create" className="btn btn-success my-3">
        Create +
      </Link>
      <div className="box">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.status}</td>
                <td>
                  <Link
                    className="text-decoration-none btn btn-sm btn-success"
                    to={`/update/${d.id}`}
                  >
                    Update
                  </Link>

                  <button
                    className="text-decoration-none btn btn-sm btn-danger"
                    onClick={(e) => handleDelete(d.id)}
                  >
                    Delete
                  </button>

                  <Link
                    className="text-decoration-none btn btn-sm btn-primary"
                    to={`/read/${d.id}`}
                  >
                    Read
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
