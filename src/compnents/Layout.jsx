import React from 'react'

import {Outlet} from "react-router-dom"
import { CssBaseline } from '@mui/material'

import Navbar from './Navbar'


function Layout() {
  return (
    <div>
        <CssBaseline/>
        <Navbar/>
       <Outlet/>
    </div>
  )
}

export default Layout