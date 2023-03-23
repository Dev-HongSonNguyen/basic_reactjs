import axios from "axios";
import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import AddProductAdmin from "./pages/admin/AddProductAdmin";
import Dashboard from "./pages/admin/Dashboard";
import ListProductAdmin from "./pages/admin/ListProductAdmin";
import UpdateProduct from "./pages/admin/UpdateProduct";

const App = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then(({ data }) => setProduct(data));
  }, []);

  const handelRemove = (id) => {
    if (confirm("ban co chac chan muon xoa khong !")) {
      axios.delete(`http://localhost:3000/products/${id}`).then(() => {
        const newProduct = product.filter((item) => item.id !== id);
        setProduct(newProduct);
      });
    }
  };
  const addProduct = async (product) => {
    try {
      await axios.post("http://localhost:3000/products", product);
    } catch (error) {
      console.log(error);
    }
  };
  const updateProduct = async (product) => {
    try {
      await axios.put(`http://localhost:3000/products/${product.id}`, product);
      alert("update thanh cong");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="app">
      <Routes>
        {/* ADMIN */}
        <Route path="admin">
          <Route index element={<Dashboard />} />
          <Route path="products">
            <Route
              index
              element={
                <ListProductAdmin
                  data={product}
                  remove={handelRemove}
                  setProduct={setProduct}
                />
              }
            />
            <Route path="add" element={<AddProductAdmin add={addProduct} />} />
            <Route
              path="update/:id"
              element={<UpdateProduct update={updateProduct} />}
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
