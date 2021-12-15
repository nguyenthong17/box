import React, {useState, useContext} from 'react'
import {AuthContext} from '../../context/auth'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


export default function DriverLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const {loginUser, setErrMessage} = useContext (AuthContext)

  const handleSubmit = e => {
    e.preventDefault()

    const requestBody = {username, password}

    axios.post('/login/driver', requestBody)
        .then(res => {
          const token = res.data.authToken

          loginUser(token)
          navigate('/driver')
        })
        .catch( err => {
          setErrMessage(err.response.data.message)
        })
  }

  return (
    <div className='driver-login'>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input 
            type="text" 
            placeholder='Username' 
            value={username} 
            onChange={e => setUsername(e.target.value)}
            />
        </label>
        <label>
          Password
          <input 
            type="text" 
            placeholder='Password' 
            value={password} 
            onChange={e => setPassword(e.target.value)}
            />
        </label>
        <button>Login</button>
      </form>
    </div>
  )
}
