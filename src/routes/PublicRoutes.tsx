import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'

// this is a component that will be used to protect routes and redirect to user page if user is logged
const PublicRoutes = ({ children }) => {
  const logged = useSelector((state: RootState) => state.user.isLogged);

  return logged ? <Navigate to="/user" replace /> : children
}

export default PublicRoutes