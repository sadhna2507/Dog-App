import React from "react";

import { Grid, Card, Box } from "@mui/material";

import dog from "../../Assets/Images/dog.png";
import Reg from "./Reg";

function LoginReg() {
  return (
    <Grid container sx={{ height: "90vh" }}>
      <Grid
        item
        lg={7}
        sm={5}
        sx={{
          backgroundImage: `url(${dog})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: { xs: "none", sm: "block" },
        }}
      />

      <Grid item lg={5} sm={7} xs={12}>
        <Card sx={{ width: "100%", height: "100%" }}>
          <Box sx={{ mx: 3, height: 530 }}>
            <Box>
              <Reg />
            </Box>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default LoginReg;
