import React,{useContext} from 'react'
import { AuthContext } from '../context/auth'
import { Navigate } from 'react-router-dom'


export default function AdminRoute() {
  const {isLoggedIn, user} = useContext(AuthContext)
  return (
    <div>
      
    </div>
  )
}
