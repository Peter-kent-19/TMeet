import React from 'react'
import RootLayout from './layouts/RootLayout.jsx'
import Dashboard from './layouts/Dashboard.jsx'
import Login from './pages/auth/Login.jsx'
import ForgotPassword from './pages/auth/ForgotPassword.jsx'
import './App.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'




const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            {/* Authentication & Guest entrance */}
            <Route path="/auth" element={<RootLayout />}>
                <Route index element={<Login />} />
                <Route path="sign" element="Signin" />
                <Route path="forg" element={<ForgotPassword />} />
            </Route>
            
            {/* Logged in User */}
            <Route path="/" element={<Dashboard />}>
                <Route index element="Home" />
                <Route path="ann" element="Announcement" />
                <Route path="room" element="Chat Room" />
            </Route>
        </>
    )
)

const App = () => {
  return <RouterProvider router={router} />
}


export default App
