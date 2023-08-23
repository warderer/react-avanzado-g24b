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
        {users.map(({ id, first_name, last_name, gender, email}) => 
        (<div key={id} >
          <span>{first_name}</span><br />
          <span>{last_name}</span><br />
          <span>{gender}</span><br />
          <span>{email}</span><br />
        </div>)
        ) }
      </div>
    </>
  )
}
export default Secret
