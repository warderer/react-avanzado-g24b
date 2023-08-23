import { useEffect, useState } from "react"
import { getAllUsersService } from "../services/userService"

const Secret = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const token = localStorage.getItem("jwt_token")
        const response = await getAllUsersService(token)
        setUsers(response)
      } catch (error) {
        console.error(error)
      }
    }
    fetchUsersData()
  }, [])

  return (
    <>
      <h1>Secret</h1>
      <div>
        {users.map(user => 
          {<p></p>}
          )}
      </div>
    </>
  )
}
export default Secret
