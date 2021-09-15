import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserForm from '../components/UserForm'
const Main = () => {
  const [users, setUsers] = useState()
  useEffect(() => {
    axios.get("http://localhost:8000/api/users")
      .then(res => setUsers(res.data))
  }, []);
  return (
    <div className="users">
      <h1>Users:</h1>
      {
        users ? users.map((user, idx) => <p key={idx}>{user.firstName} {user.lastName}</p>) : null
      }
      <UserForm />
    </div>
  )
}
export default Main