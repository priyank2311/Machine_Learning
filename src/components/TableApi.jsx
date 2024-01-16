import React, {useEffect, useState} from 'react'

const TableApi = () => {
  const API_URL = "https://reqres.in/api/users";

  const [fetchRes, setFetchRes] = useState([])

  useEffect(() => {
    fetch(API_URL).then((res) => res.json())
    .then((result) => {
    console.log(result.data)
    setFetchRes(result.data)
   })
    .catch((err) => console.log(err));
  }, [])

  return (
    <table>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Email Id</th>
        </tr>
      </thead>

      <tbody>
        {
          fetchRes.map((item) => {
            return (
              <tr key={item.id}>
                <td>{`${item.first_name} ${item.last_name}`}</td>
                <td>{item.email}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default TableApi