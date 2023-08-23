import { Routes, Route, Navigate } from 'react-router-dom'
import { useAdminContext } from '@/hooks/useAdmin'
import { Home, Dashboard, Login, Secret, Signup } from "@/pages"

import React from 'react'

const RoutesIndex = () => {
  const { isAdmin } = useAdminContext()

  return (
    <Routes>
      <Route path="/" element={<Home />} ></Route>
      <Route path='/dashboard' element={<Dashboard />}> </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/secret' element={
        isAdmin 
        ? <Secret />
        : <Navigate to='/' />
        } 
      />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  )
}

export default RoutesIndex