import {
  addDoc,
  // addDoc,
  collection
} from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../firebase"; // Import your Firebase configuration
import Snackbar from "@mui/material/Snackbar"; // , { SnackbarCloseReason }
import { Alert } from "@mui/material";
import TextField from "@mui/material/TextField";
const AddProduct = () => {
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if ("clickaway" === reason) return;
    setOpen(false);
  };

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState();
  const [productCategory, setProductCategory] = useState("");

  const handleSubmit = async (e) => {
    setOpen(true);
    e.preventDefault();

    // Add product to firebase collection
    // eslint-disable-next-line no-unused-vars
    const usersCollectionRef = collection(db, "products");
    await addDoc(usersCollectionRef, {
      name: productName,
      price: parseFloat(productPrice), // Ensure price is a number
      category: productCategory
    });

    // Reset form fields
    setProductName("");
    setProductPrice(0);
    setProductCategory("");

    // Optionally, display a success message
  };

  return (
    <div className="px-5">
      <p className="text-[#7451f8] font-bold text-xl">Add New Product</p>
      <div className="w-full">
        <div className="my-5">
          <TextField
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            label="Name"
            variant="standard"
          />
        </div>
        <div className="my-5">
          <TextField
            id="productPrice"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            label="Price"
            variant="standard"
            type="number"
          />
        </div>
        <div className="my-5">
          <TextField
            id="productCategory"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
            label="Category"
            variant="standard"
          />
        </div>
        <button
          className="border px-3 py-2 rounded-md text-[#7451f8] border-[#7451f8]"
          type="submit"
          onClick={handleSubmit}
        >
          Add Product
        </button>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          This is a success Alert inside a Snackbar!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AddProduct;
