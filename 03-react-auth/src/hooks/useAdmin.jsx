import { useContext } from "react"
import { AdminContext } from "@/context/AdminContext"

export const useAdminContext = () => {
  const context = useContext(AdminContext)

  if (context === undefined) {
    throw new Error('useAdminContext debe ser usado dentro de AdminProvider')
  }

  return context
}
