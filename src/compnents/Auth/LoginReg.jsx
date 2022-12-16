import React from "react";

import { Grid, Card,Box } from "@mui/material";

import Dog from "../../image/Dog.png";
import Reg from "./Reg";



function LoginReg() {

    

  return (
    <Grid container sx={{ height: "90vh" }}>
      <Grid
        item
        lg={7}
        sm={5}
        sx={{
          backgroundImage: `url(${Dog})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: { xs: "none", sm: "block" },
        }}
      ></Grid>

      <Grid item lg={5} sm={7} xs={12}>
        <Card sx={{ width: "100%", height: "100%" }}>
          <Box sx={{ mx: 3, height: 530 }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
             <Reg/>
            </Box>
          </Box>
          
        </Card>
      </Grid>
    </Grid>
  );
}

export default LoginReg;
