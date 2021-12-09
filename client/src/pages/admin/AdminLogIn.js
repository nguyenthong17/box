import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function AdminLogIn() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const navigate = useNavigate()

  const handleUsername = e => setUsername(e.target.value)
  const handlePassword = e => setPassword(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    const requestBody = {username, password}
    axios.post('/auth/admin/login', requestBody)
        .then (res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err.response.data)
          navigate('/admin/login')
        })
  }

  return (
    <div className='admin-login'>
      <form className='admin-login-form' onSubmit={handleSubmit}>
          <input type="text" value={username} placeholder='Username' onChange={handleUsername}/>
          <input type="password" value={password} placeholder='Password' onChange={handlePassword}/>
          <button>Submit</button>
      </form>
    </div>
  )
}
