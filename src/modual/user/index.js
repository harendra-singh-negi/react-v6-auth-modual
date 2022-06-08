import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardUser from './DashboardUser';

export default function UserRoute() {
    return (
        <Routes>
            <Route index path="/" element={<DashboardUser />} />
        </Routes>
    )
}
