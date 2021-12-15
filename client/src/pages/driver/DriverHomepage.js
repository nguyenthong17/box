import React, {useContext} from 'react'
import {AuthContext}  from '../../context/auth'

export default function DriverHomepage() {
  const {user} = useContext(AuthContext)
  const firstName = user.firstName
  const lastName = user.lastName
  return (
    <h1>
      Welcome {firstName} {lastName}
    </h1>
  )
}
