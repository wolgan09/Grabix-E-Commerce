import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../../firebase'; // Import your Firebase configuration
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import { Alert } from '@mui/material';


const AddProduct = () => {

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
      if ("clickaway" == reason) return;
      setOpen(false);
  };

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productCategory, setProductCategory] = useState('');

  const handleSubmit = async (e) => {
    setOpen(true);
    e.preventDefault();

    // Add product to firebase collection
      const usersCollectionRef = collection(db, 'products')
      //  await addDoc(usersCollectionRef, {
      //   name: productName,
      //   price: parseFloat(productPrice), // Ensure price is a number
      //   category: productCategory,
      // });
 
      // Reset form fields
      setProductName('');
      setProductPrice(0);
      setProductCategory('');

      // Optionally, display a success message


  };

  return (
    <div>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="productName">Name:</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="productPrice">Price:</label>
          <input
            type="number"
            id="productPrice"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="productCategory">Category:</label>
          <input
            type="text"
            id="productCategory"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
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