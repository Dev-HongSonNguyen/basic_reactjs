import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = ({ update }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({
    name: "",
    description: "",
  });
  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then(({ data }) => setProduct(data));
  }, []);
  const handelChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };
  const handelSubmit = (event) => {
    event.preventDefault();
    update(product);
    navigate("/admin/products");
  };
  return (
    <div>
      <form action="" onSubmit={handelSubmit}>
        <label htmlFor="">Name</label>
        <br />
        <input
          type="text"
          onChange={handelChange}
          name="name"
          value={product.name}
        />
        <br />
        <label htmlFor="">Description</label>
        <br />
        <input
          type="text"
          onChange={handelChange}
          name="description"
          value={product.description}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
