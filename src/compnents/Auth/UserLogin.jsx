import React from "react";

import { Button, Box, Alert } from "@mui/material";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Typography from "@mui/material/Typography";


function UserLogin() {
  const [emailLog, setEmailLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");
  const [home, setHome] = useState(true);
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let mail = localStorage.getItem("Email").replace(/"/g, "");
    let pass = localStorage.getItem("Password").replace(/"/g, "");

    if (!emailLog || !passwordLog) {

      setError({ status: true, msg: "All Fields are Required", type: "error" });
    } else if (passwordLog !== pass || emailLog !== mail) {
      setError({
        status: true,
        msg: "Credentials not matched!! Try again!!",
        type: "error",
      });
      document.getElementById("login-form").reset();
    } else {
      setHome(!home);
      setError({ status: true, msg: "Login Success", type: "success" });
      alert("done");
      navigate("/BreedList")
    }
    console.log(emailLog);

  };

  return (
    <>
    
    <Box>
      <Box>
        <Typography variant='h5' sx={{ borderBottom: 1, borderColor: "divider", mt: 2 }}>Login</Typography>
      </Box>
      <Box
      component="form"
      noValidate
      sx={{ mt: 1 }}
      id="login-form"
      onSubmit={handleSubmit}
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        name="email"
        label="Email Address"
        onChange={(event) => setEmailLog(event.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="password"
        name="password"
        label="Password"
        type="password"
        onChange={(event) => setPasswordLog(event.target.value)}
      />
      <Box textAlign="center">
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, px: 5 }}>
          Login
        </Button>
      </Box>
      {error.status ? (
        <Alert severity={error.type} sx={{ mt: 3 }}>
          {error.msg}
        </Alert>
      ) : (
        ""
      )}
    </Box>
    </Box>
    
    </>
  );
}

export default UserLogin;
