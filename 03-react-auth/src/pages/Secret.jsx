import { useEffect, useState } from "react"
import { getAllUsersService } from "../services/userService"

const Secret = () => {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState(null)

  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const token = localStorage.getItem("jwt_token")
        const { data } = await getAllUsersService(token)
        setUsers(data)
        setLoading(false)
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
        {loading
        ? <h1>Cargando...</h1>
        : users.map(({ id, first_name, last_name, gender, email}) => 
        (<div key={id} >
          <span>{first_name}</span><br />
          <span>{last_name}</span><br />
          <span>{gender}</span><br />
          <span>{email}</span><br />
        </div>))}
      </div>
    </>
  )
}
export default Secret
