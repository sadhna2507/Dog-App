import React from "react";

import { TextField, Button, Box, Alert } from "@mui/material";
import { useState, useContext } from "react";

import UserLogin from "./UserLogin";
import Typography from "@mui/material/Typography";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {UserContext} from "../../Context/ContextData"

function Reg() {
  const [user, setUser] = useState({
    names: "",
    email: "",
    password: "",
  });
  const [data, setData] = useState([]);
  const {login, setLogin} = useContext(UserContext);
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  // console.log(user)
  const handleSubmit = (e) => {
    e.preventDefault();
    const { names, email, password } = user;

    if (!names || !email || !password) {
      setError({ status: true, msg: "All Fields are Required", type: "error" });
    } else if (!email.includes("@")) {
      setError({ status: true, msg: "enter valid email", type: "error" });
    } else if (password == "") {
      setError({ status: true, msg: "password is required", type: "error" });
    } else if (password.length < 6) {
      setError({
        status: true,
        msg: "password length must be greater than 6",
        type: "error",
      });
    } else {
      localStorage.setItem(
        "UserRegisteredData",
        JSON.stringify([...data, user])
      );
      setLogin(!login);
      toast.success("Successfully Registered", {
        position: "top-center",
      });
    }
  };

  const handleClick = () => {
    setLogin(!login);
  };

  return (
    <>
      {login ? (
        <Box>
          <Box>
            <Typography
              variant="h5"
              sx={{ borderBottom: 1, borderColor: "divider", mt: 3 }}
            >
              Register
            </Typography>
          </Box>
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            id="registration-form"
            onClick={handleSubmit}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              name="names"
              label="Name"
              onChange={handleChange}
            />
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
                Join
              </Button>
            </Box>
            <Typography variant="h6">
              Already a user?<Button onClick={handleClick}> Login</Button>
            </Typography>
            {error.status ? (
              <Alert severity={error.type}>{error.msg}</Alert>
            ) : (
              ""
            )}
          </Box>
        </Box>
      ) : (
        <UserLogin />
      )}
      <ToastContainer />
    </>
  );
}

export default Reg;
