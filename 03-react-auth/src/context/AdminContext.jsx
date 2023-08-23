import { createContext, useState } from "react";
import jwtDecode from "jwt-decode";

// #1 Crear el contexto

const AdminContext = createContext()

// #2 Crear el proveedor del contexto

const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false)

  const login = (token) => {
    const decoded = jwtDecode(token)
    const admin = decoded.role === "ADMIN"
    setIsAdmin(admin)
    return admin
  }

  const logout = () => {
    localStorage.removeItem("jwt_token")
    setIsAdmin(false)
  }

  return (
    <AdminContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AdminContext.Provider>
  )
}

export {
  AdminContext,
  AdminProvider
}
