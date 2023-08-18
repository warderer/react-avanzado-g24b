import { Routes, Route } from 'react-router-dom'
import { Home, Dashboard, Login, Secret, Signup } from "@/pages"

import React from 'react'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} ></Route>
      <Route path='/dashboard' element={<Dashboard />}> </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/secret' element={<Secret />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  )
}

export default RoutesIndex