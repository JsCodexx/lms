import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Wrapper({ children }) {
    console.log(children)
    const isAuthenticated = localStorage.getItem("token");
    if (isAuthenticated) {
        return <Navigate to="/about" replace />
    }
    return children
    return (
        <div>

        </div>
    )
}
