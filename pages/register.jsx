import React from 'react';
import authFirebase from "../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const {Component} = require("react")
    
class Register extends Component {

    state= {
        email: '',
        password: ''
    }
    handleRegister= () => {
        console.log(this.state);
    
        createUserWithEmailAndPassword (authFirebase, this.state.email, this.state.password)
            .then((userCredential) => {
                window.location.href= './login'
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert (errorMessage)
            });
    
        }
    
    handleOnChange= (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

        render() {
    return (
        <>
            <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
            <p className="text-dark-50 mb-5">Please enter your email and password!</p>
            
            <input onChange={this.handleOnChange} placeholder='Enter email' id='email' type='email' size="lg" />
            <input onChange={this.handleOnChange} placeholder='Enter password' id='password' type='password' size="lg" />
            <button className='w-100 mb-4' size='md' onClick={this.handleRegister}>SIGN UP</button>

            <div>
                <p className="mb-0">You have an account? <a href="/login">Sign In</a></p>
            </div>
        </>
    );
}
}

export default Register;