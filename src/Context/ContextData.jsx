import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

const UserContext = createContext();

function ContextData({children}) {
    const [login, setLogin] = useState(true)
  return (
    <>
    <UserContext.Provider value={{login, setLogin }}>
        
        {children}
    </UserContext.Provider>
    </>
  )
}

export  {ContextData, UserContext};