import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import "./addProduct.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";

const AddProduct = () => {
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [productPrice, setPrice] = useState("");
  const [productDescription, setDescription] = useState("");
  const [productImage, setImage] = useState("");

  const handleChange = (ev) => {
    const { value, name } = ev.target;
    if (name == "productName") {
      setProductName(value);
    }
    if (name == "productPrice") {
      setPrice(value);
    }
    if (name == "productDescription") {
      setDescription(value);
    }
  };

  const handleUpload = async (ev) => {
    const file = ev.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    const response = await fetch("/upload", {
      // local
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    setImage(data.path);
  };

  const handleSubmit = async () => {
    // const productData = { productName, productPrice, productDescription, productImage };
    const productData = { productName, productPrice, productDescription };
    const response = await fetch("/products/add", {
      // local
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization:
        // "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGJjYWZlY2MyYTM1M2NlMzgzNmE2Y2EiLCJpYXQiOjE2OTAwOTQ1NjQsImV4cCI6MTY5MjY4NjU2NH0.mRRJfx_UvpCPq0cxJSeOt7W12XfQyThQT3gORPxFmE0",
      },
      body: JSON.stringify(productData),
    });
    // console.log("body", body);
    console.log("response", response);
  };

  useEffect(() => {
    // const user = localStorage.getItem("user");
    const user = false;
    if (!user) {
      navigate("/login");
    }
  });

  return (
    <div>
      <Container className="rootContainer">
        <h4>ADD PRODUCT FORM.</h4>
        <TextField
          fullWidth
          value={productName}
          onChange={handleChange}
          name="productName"
          label="product Name"
          variant="outlined"
        />
        <TextField
          fullWidth
          onChange={handleChange}
          value={productPrice}
          name="productPrice"
          label="productPrice"
          variant="outlined"
        />
        <TextField
          fullWidth
          value={productDescription}
          onChange={handleChange}
          multiline
          rows={4}
          name="productDescription"
          id="outlined-basic"
          label="productDescription"
          variant="outlined"
        />
        {/* <TextField
          fullWidth
          onChange={handleUpload}
          name="image"
          type="file"
          id="outlined-basic"
          variant="outlined"
        /> */}
        <Button onClick={handleSubmit} fullWidth variant="contained">
          Add Product
        </Button>
      </Container>
    </div>
  );
};

export default AddProduct;
