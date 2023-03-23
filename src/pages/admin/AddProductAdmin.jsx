import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProductAdmin = ({ add }) => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    description: "",
  });
  const handelChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };
  const handelSubmit = (event) => {
    event.preventDefault();
    add(product);
    navigate("/admin/products");
  };
  return (
    <div>
      <form action="" onSubmit={handelSubmit}>
        <label htmlFor="">Name</label>
        <br />
        <input type="text" onChange={handelChange} name="name" />
        <br />
        <label htmlFor="">Description</label>
        <br />
        <input type="text" onChange={handelChange} name="description" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddProductAdmin;
