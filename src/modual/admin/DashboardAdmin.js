import React from 'react'
import { Link } from 'react-router-dom'


export default function DashboardAdmin() {
  return (
    <>
      <h1>Admin Dashboard</h1>
      <ul>
        <li> <Link to="dashboard" >Dashboard</Link></li>
        <li><Link to="user">User</Link></li>
      </ul>
    </>
  )
}
