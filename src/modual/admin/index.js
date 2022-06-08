import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardAdmin from './DashboardAdmin'
import User from './User';

export default function AdminRoute() {
    return (
        <Routes>
            <Route index path="/" element={<DashboardAdmin />} />
            <Route index path="dashboard" element={<DashboardAdmin />} />
            <Route path="user" element={<User />} />
        </Routes>
    )
}
