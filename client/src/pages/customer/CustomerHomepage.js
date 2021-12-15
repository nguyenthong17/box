import React,{useContext} from 'react'
import { AuthContext } from '../../context/auth'

export default function CustomerHomepage() {
  const {user} = useContext(AuthContext)
  return (
    <h1>
      Welcome {user.firstName} {user.lastName}
    </h1>
  )
}
