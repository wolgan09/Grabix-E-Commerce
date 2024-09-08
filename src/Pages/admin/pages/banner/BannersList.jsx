import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Container, Typography, CircularProgress, Card, CardContent, CardMedia, Grid, IconButton, CardActions } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const BannersList = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'banners'));
        const fetchedCollections = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setCollections(fetchedCollections);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching collections: ", error);
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);


  const handleEdit = (index) => {
    console.log(`Edit clicked for tile ${index + 1}`);
    // Add your edit logic here
  };

  const handleDelete = (index) => {
    console.log(`Delete clicked for tile ${index + 1}`);
    // Add your delete logic here
  };


  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div>
      <Container sx={{ marginTop: "20px" }} maxWidth={false}>
      {collections.length == 0 ? (
          <Typography gutterBottom variant="h5" component="div">
            No Records found
          </Typography>) : 
        <div>
        <Typography gutterBottom variant="h5" component="div">
          Banners List
        </Typography>
        <Grid container spacing={3}>
          {collections.map((tile, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={tile.image}
                  alt={tile.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {tile.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {tile.description}
                  </Typography>
                </CardContent>
                <CardActions>
                <IconButton onClick={() => handleEdit(index)} color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(index)} color="secondary">
                  <DeleteIcon />
                </IconButton>
              </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid> </div>}

      </Container>
    </div>
  );
};

export default BannersList;
