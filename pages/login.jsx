import React from 'react';
import authFirebase from '../services/firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
import { 
    Button,
    Form,
    Input
 } from 'reactstrap';

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
            <div className='container-fluid boardLogin'>
                <div className="container d-flex row Login">
                    <h2 className="fw-bold  text-uppercase text-center text-dark mt-4">Login</h2>
                    <p className="text-dark-50 text-center text-dark mt-2" >Please enter your email and password!</p>
                    <Form className=''>
                        <div className='inputEmail mb-3'>
                            <Input onChange={this.handleOnChange} placeholder='Enter email' id='email' type='email' size="md" />
                        </div>
                        <div className='inputPassword mb-5'>
                            <Input onChange={this.handleOnChange} placeholder='Enter password' id='password' type='password' size="md" />
                        </div>
                        <Button className='buttonRegister mb-5' color="primary" onClick={this.handleLogin} size="md">
                            { this.state.flagginglogin && 
                            <span className="spinner-border spinner-border-lg " role="status" aria-hidden="true"></span>} Login
                        </Button>
                    </Form>
                    <p className="mb-0 d-flex justify-content-center text-dark or text-small">-Or Sign In With-</p>
                    <div>
                        <Button className='fb-btn fw-bold' color='primary'>F</Button>
                    </div>
                    <div>
                        <Button className='google-btn fw-bold' color='danger'>G</Button>
                    </div>
                    <div>
                        <a href="#" className='forget-pw'>forget password</a>
                    </div>
                </div>
            </div>
        </>
    );
}
}

export default Login;