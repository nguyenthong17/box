import React, {useState, useContext} from 'react'
import {AuthContext} from '../../context/auth'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

export default function CustomerLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const {loginUser, setErrMessage} = useContext(AuthContext)
  
  const handleSubmit = e => {
    e.preventDefault()
    const reqBody = {email, password}

    axios.post('/login/customer', reqBody)
        .then(res => {
          const token = res.data.authToken
          
          loginUser(token)
          navigate('/customer')
        })
        .catch(err => setErrMessage(err.response.data.message))
  }

  return (
    <div>
      <div className='driver-login'>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input 
            type="text" 
            placeholder='Email' 
            value={email} 
            onChange={e => setEmail(e.target.value)}
            />
        </label>
        <label>
          Password
          <input 
            type="password" 
            placeholder='Password' 
            value={password} 
            onChange={e => setPassword(e.target.value)}
            />
        </label>
        <button>Login</button>
      </form>
    </div>
    </div>
  )
}
