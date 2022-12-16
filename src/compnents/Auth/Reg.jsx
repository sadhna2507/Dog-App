import React from 'react'

import { TextField, Button, Box, Alert } from '@mui/material';
import { useState } from 'react';

import UserLogin from './UserLogin';
import Typography from '@mui/material/Typography';


function Reg() {
    const[names, setNames] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const [login, setLogin]= useState(true)
    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
      })

      const handleSubmit = (e)=>{
        e.preventDefault()
        if(!names || !email || !password ){
            setError({ status: true, msg: "All Fields are Required", type: 'error'  })

        }else{
            console.log(names, email, password)
        document.getElementById('registration-form').reset()
        alert("Registered Successfully!!")
        localStorage.setItem("Name", JSON.stringify(names));
        localStorage.setItem("Email", JSON.stringify(email));
        localStorage.setItem("Password", JSON.stringify(password));
        setLogin(!login)



        }
      }

      const handleClick=()=>{
        setLogin(!login)
      }

  return (
    <>

    {login ?(
      
    <Box>
      <Box>
        <Typography variant='h5' sx={{ borderBottom: 1, borderColor: "divider", mt: 2 }}>Register</Typography>
      </Box>
      <Box component='form' noValidate sx={{ mt: 1 }} id='registration-form' onSubmit={handleSubmit}>
      <TextField margin='normal' required fullWidth id='name' name='name' label='Name' onChange={(event)=>setNames(event.target.value)}/>
      <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address'onChange={(event)=>setEmail(event.target.value)} />
      <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' onChange={(event)=>setPassword(event.target.value)}/>
      
      <Box textAlign='center'>
        <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Join</Button>
      </Box>
      <Typography variant='h6'>Already a user?<Button onClick={handleClick}> Login</Button></Typography>
      {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
    </Box>
    </Box>
    ):(<UserLogin/>)}
    </>
  )
}

export default Reg
