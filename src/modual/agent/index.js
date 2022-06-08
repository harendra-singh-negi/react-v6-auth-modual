import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardAgent from './DashboardAgent';


export default function AgentRoute() {
    return (
        <Routes>
            <Route index path="/" element={<DashboardAgent />} />
        </Routes>
    )
}
