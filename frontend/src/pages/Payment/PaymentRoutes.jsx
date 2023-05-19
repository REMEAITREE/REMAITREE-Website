import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Payment from './Payment';
import { ChakraProvider } from "@chakra-ui/react";

const PaymentRoutes = () => {
  return (
    <Routes>
      <Route path="/payment" element={<ChakraProvider> <Payment /> </ChakraProvider>}>
      </Route>
    </Routes>
  )
}

export default PaymentRoutes
