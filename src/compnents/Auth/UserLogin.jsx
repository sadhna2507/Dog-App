import React from "react";

import { Button, Box, Alert } from "@mui/material";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { ToastContainer, toast } from "react-toastify";

function UserLogin() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const getUserArr = localStorage.getItem("UserRegisteredData");

    const { email, password } = user;

    if (!email || !password) {
      setError({ status: true, msg: "All Fields are Required", type: "error" });
    } else if (!email.includes("@")) {
      setError({ status: true, msg: "enter valid email", type: "error" });
    } else if (password.length < 6) {
      setError({
        status: true,
        msg: "password length must be greater than 6",
        type: "error",
      });
    } else {
      if (getUserArr && getUserArr.length) {
        const userData = JSON.parse(getUserArr);
        const userLogin = userData.filter((el, k) => {
          return el.email === email && el.password === password;
        });
        if (userLogin.length === 0) {
          setError({
            status: true,
            msg: "Credentials not Matched",
            type: "error",
          });
        } else {
          toast.success("Successfully Registered", {
            position: "top-center",
          });
          alert("logged in ");

          navigate("/BreedList");
        }
      }
    }
  };

  return (
    <>
      <Box>
        <Box>
          <Typography
            variant="h5"
            sx={{ borderBottom: 1, borderColor: "divider", mt: 3 }}
          >
            Login
          </Typography>
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
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            onChange={handleChange}
          />
          <Box textAlign="center">
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 7, mb: 2, px: 5 }}
            >
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
      <ToastContainer />
    </>
  );
}

export default UserLogin;
