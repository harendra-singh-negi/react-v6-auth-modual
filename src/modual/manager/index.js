import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardManager from './DashboardManager'

export default function ManagerRoute() {
    return (
        <Routes>
            <Route index path="/" element={<DashboardManager />} />
        </Routes>
    )
}
