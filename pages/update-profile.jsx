import React, { useState, useEffect } from "react";
import { database, authFirebase } from '../services/firebase'
import { ref, set } from 'firebase/database'
import jwt_decode from "jwt-decode";

const ProfileUpdate = () => {
    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [isUser, setUser] = useState('')
    const [isUserId, setUserId] = useState('')

    const authenticate = () => {
      let storage = localStorage.getItem("accesstoken")
      if (storage === "" || storage === null){
        navigate('/LoginPage')
      } else {
        let decode = jwt_decode(storage)
        setUser(decode.email)
        setUserId(decode.user_id)
      }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const userProfile = { name, email, age, phoneNumber }
        console.log(userProfile)
        set(ref(database,`Histories/${name}`), userProfile)
        console.log('data posted')
        window.location.href = '/Profile'
    }
    return (
      <>
        <div className="profile-update">
          <div className="container">
            <header>
              <h1 id="up-title">Edit Your Profile</h1>
              <p id="description">Please edit your profile here... </p>
            </header>
          <form onSubmit={handleSubmit} >
              <div className="form-group">
                <label id="name-label" htmlFor="name">Name<input value={name} onChange={(e) => setName(e.target.value)} id="name" name="name" type="text" className="form-control" placeholder="Enter your name" />
                </label>
              </div>
              <div className="form-group">
                <label id="email-label">Email<input value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="email" name="email" className="form-control" placeholder="Enter your email"  /></label>
              </div>
              <div className="form-group">
                <label id="number-label">Age (optional)<input value={age} onChange={(e) => setAge(e.target.value)} id="number" name="age" type="number" className="form-control" min="10" max="99" placeholder="Age" /></label>
              </div>
              <div className="form-group">
              <label id="phone-label">Phone Number<input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} id="phone" type="text" name="phone" className="form-control" placeholder="Enter your Phone Number"  /></label>
              </div>

              <div className="form-group">
                <label>Your Bio<textarea id="comments" className="input-textarea" name="comment" placeholder="Describe yourself here..."></textarea>
                </label>
                </div>
                <div className="form-group">
                <input type="submit" id="submit" value="Submit" className="submit-button" />
                </div>
            </form>
          </div>
        </div>
      </>
    )
}

export default ProfileUpdate

// please finish it :)