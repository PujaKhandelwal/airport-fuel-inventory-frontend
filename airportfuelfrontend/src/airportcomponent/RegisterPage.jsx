import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Welcome from './Welcome';
import moment from 'moment';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import AuthService from './AuthService';
import {signUpUser} from './api/airportAppApi';

// component to register
class RegisterPage extends Component {

    constructor(props)
    {
        super(props)
        this.state ={
            name: '',
            email: '',
            password: '',
            isFailed: false,
            message:'Fields cannot be empty'
        }
    }

    handleChange= (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
        handleSubmit= async(event) => {
            event.preventDefault();
            console.log("checked for username nd password from db");
            const response = await signUpUser(this.state.name, this.state.email, this.state.password);  
            if(response.status == 200)
            {
                this.props.history.push('/register_sucess');
                this.setState({ isFailed: false})
            }
            else{
                this.props.history.push('/register');
                this.setState({ isFailed: true, message: response.data.error
                    })
            }
            
        }
    render() { 
        
        let {name, email, password} = this.state
        return (
            <div className='transactions' >
                <Welcome />
                <br/>
                <br/>
                <div className='example1'>
                <br/>
              
                    <h4> <b><u>Register Page</u></b></h4>
                    <br/>
                    <br/>
                    <div>
                    <form >
                <div className='form-row'>
                            <div className='form-group form-group-sm col-md-4'>
                    <input 
                                    type ='text ' 
                                    name='name'
                                    class='form-control'
                                    placeholder='Name'
                                    value= {this.state.name} 
                                    onChange= {this.handleChange}
                                    required
                                    size="50"
                                />
                        </div>
                        </div>
                        <div className='form-row'>
                            <div className='form-group form-group-sm col-md-4'>
                    <input 
                                    type ='email ' 
                                    name='email'
                                    class='form-control'
                                    placeholder='Email'
                                    value= {this.state.email} 
                                    onChange= {this.handleChange}
                                    required
                                    size="50"
                                />
                        </div>
                        </div>
                        <div class='form-row'>
                            <div className='form-group form-group-sm col-md-4'>
                                <input 
                                    type ='password' 
                                    name='password'
                                    class='form-control'
                                    placeholder='Password'
                                    value= {this.state.password} 
                                    onChange= {this.handleChange}
                                    required
                                    size="50"
                                />
                               </div>
                               </div>
                               <div class='form-row'>
                            <div className='form-group form-group-sm col-md-4'>
                                {this.state.isFailed && <div><h5><i>{this.state.message}</i></h5></div>}
                                <br/>  
                                <button className="btn btn-dark btn-sm" onClick={this.handleSubmit} >Register</button>

                          </div>
                          </div>

                        <h6>Already a member?</h6>   
                        <Link className='btn btn-link-primary' to='/signin'>
                            <h6><b>Sign In</b></h6>
                        </Link>                      
                    </form>

                    </div>
                
                </div>
                </div>

                
            
          );
    }
}
 
export default RegisterPage;