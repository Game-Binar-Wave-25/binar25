import React from 'react';
import authFirebase from '../services/firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
const {Component} = require("react")

    
class Login extends Component {

    state= {
        email: '',
        password: '',
        flagginglogin: false,
    }

    handleLogin= () => {
        console.log(this.state);
        
        this.setState({flagginglogin:true})

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
                this.setState({flagginglogin:false})
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
         <div className='d-flex flex-column justify-content-center m-5 p-5'>
            <h2 className="fw-bold mb-2 text-uppercase d-flex justify-content-center">Login</h2>
            <p className="text-dark-50 mb-5 d-flex justify-content-center">Please enter your email and password!</p>
          
          <div className='d-flex flex-column align-items-center'>  
            <input onChange={this.handleOnChange} placeholder='Enter email' className='w-25 rounded-pill p-2 mt-4 text-center'  id='email' type='email' size="lg" />
            <input onChange={this.handleOnChange} placeholder='Enter password' className='w-25 rounded-pill p-2 mt-4 text-center' id='password' type='password' size="lg" />
            <button className='w-25 mb-4 rounded-pill p-1 mt-4' size='md'  onClick={this.handleLogin}> { this.state.flagginglogin && <span className="spinner-border spinner-border-lg " role="status" aria-hidden="true"></span>} Login</button>
            
            </div>

        {/* {
            this.state.flagginglogin && (
               <div className='loading button d-flex justify-content-center align-items-center'>
            <button  className="btn btn-primary w-25 d-flex justify-content-center align-items-center" onClick={this.submitLog} type="button" disabled>
            <span className="spinner-border spinner-border-sm " role="status" aria-hidden="true"></span>Loading...
            </button>
            </div> 
            )
        } */}
            

            <p className="mb-0 d-flex justify-content-center">-Or Sign In With-</p>
            <div className="social d-flex text-center justify-content-center align-items-center mt-4">
            <button href='#' className='px-2 py-2 mr-md-1  rounded-pill'>Google</button>
            <button href='#' className='px-2 py-2 mr-md-1 rounded-pill'>Facebook</button>
            </div>
            <div>
                <p className="mb-0 d-flex justify-content-center mt-4">Don't have an account? <a href="/register">Sign Up</a></p>
            </div>
         </div>

        </>
    );
}
}

export default Login;