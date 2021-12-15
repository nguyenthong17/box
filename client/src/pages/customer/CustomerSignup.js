import React,{useState, useContext} from 'react'
import { AuthContext } from '../../context/auth'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

export default function CustomerSignup() {
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [street, setStreet] = useState('')
  const [houseNumber, setHouseNumber] = useState('')
  const [postcode, setPostcode] = useState('')
  const [city, setCity] = useState('')

  const navigate = useNavigate()
  const {setErrMessage} = useContext(AuthContext)

  const handleSubmit = e => {
    e.preventDefault()
    const requestBody = {email, password, firstName, lastName, street, houseNumber, postcode, city}
    axios.post('/signup/customer', requestBody)
        .then( res => navigate('/customer/login'))
        .catch(err => setErrMessage(err.response.data.message))
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder='Email'/>
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
        <label>
          Address Street
          <input type="text" value={street} onChange={e => setStreet(e.target.value)} placeholder='Street'/>
        </label>
        <label>
          House number
          <input type="text" value={houseNumber} onChange={e => setHouseNumber(e.target.value)} placeholder='House Number'/>
        </label>
        <label>
          Postcode
          <input type="text" value={postcode} onChange={e => setPostcode(e.target.value)} placeholder='Postcode'/>
        </label>
        <label>
          City
          <input type="text" value={city} onChange={e => setCity(e.target.value)} placeholder='City'/>
        </label>
        <button>Sign up</button>
      </form>
    </div>
  )
}
