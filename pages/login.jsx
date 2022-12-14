import React from 'react';
import authFirebase from '../services/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

const {Component} = require("react")
    
class Login extends Component {

    state= {
        email: '',
        password: ''
    }
    handleLogin= () => {
        console.log(this.state);
    
        signInWithEmailAndPassword (authFirebase, this.state.email, this.state.password)
            .then((userCredential) => {
                window.location.href= './home'
                console.log(userCredential)
                const jwtToken = userCredential.user.accessToken
                localStorage.setItem("accesstoken",jwtToken )
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
            <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
            <p className="text-dark-50 mb-5">Please enter your email and password!</p>
     
            <input onChange={this.handleOnChange} placeholder='Enter email' id='email' type='email' size="lg" />
            <input onChange={this.handleOnChange} placeholder='Enter password' id='password' type='password' size="lg" />
            <button className='w-100 mb-4' size='md' onClick={this.handleLogin}>Login</button>

            <div>
                <p className="mb-0">Don't have an account? <a href="/register">Sign Up</a></p>
            </div>
        </>
    );
}
}

export default Login;