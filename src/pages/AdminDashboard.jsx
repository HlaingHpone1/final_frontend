import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import DashboardPage from '../components/dashboardPage/DashboardPage'
import Profile from './Profile'
import UserProfile from '../components/userProfile/UserProfile'

const AdminDashboard = () => {
  return (
    <main className='flex'>
      <div><Sidebar /></div>
      <div className=' flex-1'>
        <DashboardPage />

      </div>
    </main>
  )
}

export default AdminDashboard