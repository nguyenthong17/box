import React,{useState, useContext} from 'react'
import axios from 'axios'
import { AuthContext } from '../../context/auth'
import { useNavigate } from 'react-router-dom'

export default function CreateDriver() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const {setErrMessage} = useContext(AuthContext)

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()

    const requestBody = {username, password, firstName, lastName}

    const storedToken = localStorage.getItem('authToken')

    axios.post('/admin/driver', requestBody,{headers: {Authorization: `Bearer ${storedToken}`}})
        .then(response => navigate('/admin/driver'))
        .catch(err =>{
          setErrMessage(err.response.data.message)
        })
  }

  return (
    <div className='create-driver'>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input type="text" 
                placeholder='Username' 
                value={username} 
                onChange={e => 
                setUsername(e.target.value)}/>
        </label>
        <label>
          Password
          <input type="password" 
                placeholder='Password' 
                value={password} 
                onChange={e => 
                setPassword(e.target.value)}/>
        </label>
        <label>
          First name
          <input type="text" 
                placeholder='First name' 
                value={firstName} 
                onChange={e => 
                setFirstName(e.target.value)}/>
        </label>
        <label>
          Last name
          <input type="text" 
                placeholder='Last name' 
                value={lastName} 
                onChange={e => 
                setLastName(e.target.value)}/>
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}
