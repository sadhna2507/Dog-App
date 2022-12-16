import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import "./DogBreedImage.css";


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

        <ImageList sx={{ width: "100vw", height: "100vh" }} cols={3}>
          {imageList.map((item) => (
            // console.log(item),
            <ImageListItem key={item.img}>
              <img
                src={`${item}`}
                srcSet={`${item}`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </div>
  );
}

export default DogBreedImage;
