// src/ProductForm.js
import React, { useState } from 'react';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import {
    TextField,
    Button,
    Container,
    Typography,
    Box,
    Select,
    MenuItem,
    InputLabel,
    IconButton
} from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export const locations = [
  { id: 1, name: 'Pune' }
];

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [error, setError] = useState('');
    const [location, setLocation] = useState('select');
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState('');
  
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setImage(file);
        setImagePreview(URL.createObjectURL(file));
      }
    };
    const handleLocation = (event) => {
      setLocation(event.target.value);
    }
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validate inputs
        if (!name || !price || !description) {
            setError('All fields are required');
            return;
        }
        try {
            const docRef = await addDoc(collection(db, 'products'), {
                name,
                price: parseFloat(price),
                description,
                category,
                location,
            });
            console.log("Document written with ID: ", docRef.id);
            // Clear fields after successful submission
            setName('');
            setPrice('');
            setDescription('');
            setImagePreview('')
            setCategory('')
            setLocation('select')
            setError('');
        } catch (e) {
            console.error("Error adding document: ", e);
            setError('Error adding product');
        }
    };

    return (
      <Container maxWidth="sm">
        <Typography variant="h4" component="h1" gutterBottom>
          Add New Product
        </Typography>
        <input
          accept="image/*"
          style={{ display: "none" }}
          id="upload-button"
          type="file"
          onChange={handleImageChange}
        />
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <span className="border-2">
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="border-4 rounded"
                style={{ marginTop: 20, maxWidth: 350 }}
              />
            )}
          </span>
          <label htmlFor="upload-button">
            <IconButton color="primary" component="span">
              <PhotoCamera />
            </IconButton>
          </label>
          <TextField
            label="Product Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Price"
            variant="outlined"
            fullWidth
            margin="normal"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
          />
          <TextField
            label="Category"
            variant="outlined"
            fullWidth
            margin="normal"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            multiline
          />
          <TextField
            label="Limit Qty(PU)"
            variant="outlined"
            fullWidth
            margin="normal"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            multiline
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            margin="normal"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            multiline
            rows={4}
          />
          <InputLabel id="category-label">Location</InputLabel>
          <Select
            labelId="location-select-label"
            value={location}
            label="Location"
            onChange={handleLocation}
            rows={1}
          >
            <MenuItem key="select" value="select">
              {" "}
              Select Location
            </MenuItem>
            {locations.map((loc) => (
              <MenuItem key={loc.id} value={loc.name}>
                {loc.name}
              </MenuItem>
            ))}
          </Select>

          <InputLabel id="discount-label">Dicsount</InputLabel>
          <Select
            labelId="discount-label"
            label="discount"
            onChange={handleLocation}
            rows={1}
          >
            <MenuItem key="10" value="10">
              10%
            </MenuItem>
            <MenuItem key="20" value="20">
              20%
            </MenuItem>
          </Select>

          {error && <Typography color="error">{error}</Typography>}
        </Box>
        <Button
          type="submit"
          variant="outlined"
          color="secondary"
          component={Link}
          to="/admin/products"
        >
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Add Product
        </Button>

        <TextField
          label="Product Policy"
          variant="outlined"
          fullWidth
          margin="normal"
          // value={description}
          // onChange={(e) => setDescription(e.target.value)}
          multiline
          rows={4}
        />
      </Container>
    );
};

export default AddProduct;
