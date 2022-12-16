import React from "react";
import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import { Row, Col, Alert, Container, Card } from "react-bootstrap";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./DogBreedImage.css";

// import axios from 'axios';

function DogBreedImage() {
  const [imageList, setImageList] = useState([]);

  const { state } = useLocation();
  const { value } = state;

  useEffect(() => {
    const images = async () => {
      const response = await fetch(`https://dog.ceo/api/breed/${value}/images`);
      const jsonData = await response.json();
      setImageList(jsonData.message);
      console.log(jsonData.message);
    };
    images();
  }, [value]);

  return (
    <div>
      <Container maxWidth="100vw">
        <Box className="sub_heading">
          <Typography variant="h4">You selected {value} breed!</Typography>
        </Box>

        <ImageList sx={{ width: "100%" }} cols={4} className="imgList">
          {imageList.map((item) => (
            // console.log(item),
            <div className="imgItem">
              <ImageListItem key={item.img}>
              <img className="dogImg"
                src={`${item}`}
                srcSet={`${item}`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
            </div>
          ))}
        </ImageList>
      </Container>
    </div>
  );
}

export default DogBreedImage;
