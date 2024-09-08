// src/ProductForm.js
import React, { useState } from 'react';
import { db, storage } from '../../firebase';
import { collection, addDoc, setDoc, doc } from 'firebase/firestore';
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
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

export const locations = [
  { id: 1, name: 'Pune' }
];

const AddBanner = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [error, setError] = useState('');
    const [location, setLocation] = useState('select');
    const [image, setImage] = useState(null);
    const [imageUrl, setImageURL] = useState(null);
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

    const handleUpload = () => {
      if (image) {
        const storageRef = ref(storage, `images/banner/banner_${image.name}`);
        uploadBytes(storageRef, image).then((snapshot) => {
          getDownloadURL(snapshot.ref).then(async (url) => {
            setImageURL(url);
            // await saveImageUrl(url);
          });
        });
      }
    }
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validate inputs
        if (!name || !category || !description || !imageUrl) {
            setError('All fields are required');
            return;
        }
        try {
            const docRef = await addDoc(collection(db, 'banners'), {
                name,
                description,
                category,
                location,
                image: imageUrl
            });
            console.log("Document written with ID: ", 'BAN_' + docRef.id);
            // Clear fields after successful submission
            setName('');
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
          Add New Banner
        </Typography>
        <input
        accept="image/*"
        style={{ display: 'none' }}
        id="upload-button"
        type="file"
        onChange={handleImageChange}
      />
        <Button type="submit" variant="contained" color="primary" onClick={handleUpload}>
            Upload
        </Button>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <span className='border-2'>{imagePreview && <img src={imagePreview} alt="Preview" className='border-4 rounded' style={{ marginTop: 20, maxWidth: 350 }} />}</span>
        <label htmlFor="upload-button">
        <IconButton color="primary" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
          <TextField
            label="Banner Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            <MenuItem key="select" value="select"> Select Location</MenuItem>
            {locations.map((loc) => (
              <MenuItem key={loc.id} value={loc.name}>
                {loc.name}
              </MenuItem>
            ))}
          </Select>
          {error && <Typography color="error">{error}</Typography>}
        </Box>
        <Button className='mr-3' variant="outlined" color="secondary" component={Link} to="/admin/banners">
            Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
            Add Banner
        </Button>
       </Container>
    );
};

export default AddBanner;
