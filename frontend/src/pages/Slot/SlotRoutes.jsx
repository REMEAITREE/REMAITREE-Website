import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import Slot from './Slot';
const SlotRoutes = () => {
  return (
    <Routes>
      <Route path="/slot" element={<Slot /> }>
      </Route>
    </Routes>
  )
}

export default SlotRoutes
