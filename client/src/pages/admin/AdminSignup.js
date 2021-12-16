import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function AdminSignup() {
  const [username,setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const navigate = useNavigate()
 

  const handleSubmit = e => {
    e.preventDefault()
    const requestBody = {username, password, firstName, lastName}
    axios.post('/signup/admin', requestBody)
        .then( res => navigate('/admin/login'))
        .catch(err => console.log(err.response.data.message))
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          username
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder='username'/>
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Password'/>
        </label>
        <label>
          First name
          <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder='First name'/>
        </label>
        <label>
          Last name
          <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder='Last name'/>
        </label>
        <button>Sign up</button>
      </form>
    </div>
  )
}
