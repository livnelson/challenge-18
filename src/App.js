import React, { useEffect, useState } from "react"
import axios from "axios"

function App() {
  const [users, setUsers] = useState([])

  // fetch users and set data
  useEffect(() => {
    async function fetchUsers() {
      await fetch('https://randomuser.me/api?results=20')
        .then((res) => res.json())
        .then((usersData) => {
          const userArray = usersData.results
          const mappedUser = userArray.map((user) => {
            return {
              name: user.name.first,
              age: user.dob.age,
              email: user.email
            }
          })
          console.log(mappedUser)
          setUsers(mappedUser)
        })
    }
    fetchUsers()
  }, [])


  const Pagination = () => {
    // map users to display table
    const mappedUsers = users.map(user => {
      return (
        <table>
          <tr>
            <th>{user.name}</th>
            <th>{user.age}</th>
            <th>{user.email}</th>
          </tr>
        </table>
      )
    })
    return (
      <p>
        {mappedUsers}
      </p>
    )
  }

  // generic component for displaying table from array
  // of objects where fields of objects are columns
  const Pages = ({ content, itemsPerPage }) => {
  }

  return <Pagination />
}
export default App
