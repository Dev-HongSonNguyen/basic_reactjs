import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ListProductAdmin = ({ data, remove, setProduct }) => {
  const handelRemove = (id) => {
    remove(id);
  };
  //call lai sua khi them sua xoa
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then(({ data }) => setProduct(data));
  });
  return (
    <div>
      <Link to="/admin/products/add">ADD</Link>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        {data.map((item, index) => {
          return (
            <tbody>
              <tr>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
                  <button onClick={() => handelRemove(item.id)}>DELETE</button>
                  <Link to={`/admin/products/update/${item.id}`}>Update</Link>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default ListProductAdmin;
