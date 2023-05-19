import React from 'react'
import SuccessPg from './SuccessPg'
import { Routes, Route } from "react-router-dom";


const SuccessPgRoutes = () => {
  return (
    <Routes>
      <Route path="/succ_pay" element={ <SuccessPg /> }>
      </Route>
    </Routes>
  )
}

export default SuccessPgRoutes
