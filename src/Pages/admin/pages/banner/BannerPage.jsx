// src/ProductForm.js
import React, { useState } from 'react';
import {
    Button,
    Container,
} from '@mui/material';
import { Link } from 'react-router-dom';
import BannersList from './BannersList';

export const locations = [
  { id: 1, name: 'Pune' }
];

const BannerPage = () => {

    return (
      <Container maxWidth="sm">
        <BannersList />
        <Button type="submit" variant="contained" color="primary" LinkComponent={Link} to="/admin/banners/new">
            Add New Banner
        </Button>
       </Container>
    );
};

export default BannerPage;
