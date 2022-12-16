import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import "./DogBreedImage.css";

function DogBreedImage() {

  const navigate = useNavigate();
  
  const [imageList, setImageList] = useState([]);

  const { state } = useLocation();
  const { value } = state;
  let random = 0;
  useEffect(() => {
    const images = async () => {
      const response = await fetch(`https://dog.ceo/api/breed/${value}/images`);
      const jsonData = await response.json();
      setImageList(jsonData.message);
      console.log(jsonData.message);
      random = imageList[Math.random() * (imageList.length - 1)];
    };
    images();
  }, [value]);

  const handleLogOut=()=>{
    localStorage.removeItem("UserRegisteredData")
    alert("Logged out successfully")
    navigate("/")
  }

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
          <ImageList
            sx={{ width: "30%", height: "30%" }}
            cols={1}
            className="imgList"
          >
            {/* {imageList.map((item) => (
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


          ))} */}
            {imageList.length == 0 ? (
              <h3>No Image Found</h3>
            ) : (
              <div className="imgItem">
                <ImageListItem key={imageList[random]?.img}>
                  <img
                    className="dogImg"
                    src={`${imageList[random]}`}
                    srcSet={`${imageList[random]}`}
                    alt={imageList[random].title}
                    loading="lazy"
                  />
                </ImageListItem>
              </div>
            )}
          </ImageList>
        </Box>
      </Container>
    </div>
  );
}

export default DogBreedImage;
