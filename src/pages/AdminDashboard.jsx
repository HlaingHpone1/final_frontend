import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import DashboardPage from '../components/dashboardPage/DashboardPage'

const AdminDashboard = () => {
  return (
    <main className='flex'>
        <div><Sidebar/></div>
        <div><DashboardPage/></div>
    </main>
  )
}

export default AdminDashboard