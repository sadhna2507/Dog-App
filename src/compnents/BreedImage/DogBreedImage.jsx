import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import axios from "axios";

import "./DogBreedImage.css";

function DogBreedImage() {
  const navigate = useNavigate();

  const [imageList, setImageList] = useState([]);

  const { state } = useLocation();
  const { value } = state;

  useEffect(() => {
    axios
      .get(`https://dog.ceo/api/breed/${value}/images/random`)
      .then((response) => {
        setImageList(response.data.message);
      });
  }, []);

  const handleLogOut = () => {
    alert("Logged out successfully");
    navigate("/");
  };

  return (
    <div>
      <Container maxWidth="100vw">
        <Box textAlign="end">
          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 2, mr: 3 }}
            onClick={handleLogOut}
          >
            Log Out
          </Button>
        </Box>
        <Box className="sub_heading">
          <Typography variant="h4">
            You selected <span className="dogbreed">{value}</span> breed!
          </Typography>
        </Box>

        <Box textAlign="center" className="imgcont">

        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={`${imageList}`}
        alt="green iguana"
      />
      
    </Card>




          {/* <ImageList
            sx={{ width: "30%", height: "30%" }}
            cols={1}
            className="imgList"
          >
            <div className="imgItem">
              <ImageListItem>
                <img
                  className="dogImg"
                  src={`${imageList}`}
                  srcSet={`${imageList}`}
                  loading="lazy"
                />
              </ImageListItem>
            </div>
          </ImageList> */}
        </Box>
      </Container>
    </div>
  );
}

export default DogBreedImage;
