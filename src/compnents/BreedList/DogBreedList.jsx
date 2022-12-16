import React from "react";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { experimentalStyled as styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import axios from "axios";
import Container from '@mui/material/Container';

import "./DogBreedList.css"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: " rgb(237, 155, 237)",
  padding: theme.spacing(2),
  textAlign: "center",
  color: "black",
  fontWeight:"bold",
  border : "1px solid rgb(145, 28, 145)",
  boxShadow: "5px 5px 5px #aaaaaa"
}));

function DogBreedList() {
  const navigate = useNavigate();

  const [dogsList, setDogsList] = useState([]);

  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/list/all").then((response) => {
      setDogsList(response.data.message);
      //   console.log(response.data.message)
    });
  }, []);
  console.log(dogsList);

  return (
    <>

      <Container  maxWidth="100vw">
        <Box className="sub_heading" >
      <Typography variant="h4" >Select the Breed below!!</Typography>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 6 }}
          columns={{ xs: 4, sm: 8, md: 24 }}
        >
          {Object.keys(dogsList)?.map((value, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item onClick={()=> navigate("/breedImage", { state: { value: value } }) } className="breed_name">{value}</Item>
            </Grid>
          ))}
        </Grid>
        </Box>
      </Container>

      



    </>
  );
}

export default DogBreedList;
