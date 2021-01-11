
import React, { Component } from 'react';
import Welcome from './Welcome'
import RegisterPage from './RegisterPage'
import { Link } from 'react-router-dom';
import LoginUser from './LoginUser';
// import loanAppDataService from './api/loanAppDataService'

import AuthServive from './AuthService.js';
import {users} from './api/airportAppApi';

// component to sign in
class WelcomeSignin extends Component {
    state = { 
        username: '',
        password: '',
        isFailed: false,
        message:'Fields cannot be empty'
     }

    handleChange= (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        if(this.state.username === '' || this.state.password === '')
        {
            this.setState({ isFailed: true})
            
        }
        else if(this.state.password.length < 6 || this.state.password > 16)
        {
            this.setState({ 
                isFailed: true,
                message:'length should be between (6-16)'
                })  
            }
        // else if(!(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/).test(this.state.password))
        // {
        //     this.setState({
        //         isFailed: true,
        //         message: 'should contain |A-Z|a-z|0-9|!@#$%^&*|'
        //     })
        // }
        else
        {
            console.log("checked for username nd password from db");
            const response = await users(this.state.username, this.state.password);               
                if(response.status == 200)
                {
                    console.log('Successfully logged in');
                    AuthServive.successfulLogin(this.state.username, response.data.token);
                    this.props.history.push('/login');
                    this.setState({ isFailed: false})
                }
                else{
                    console.log(response);
                    console.log('Login failed');
                    this.setState({ isFailed: true, message: response.data.error
                        })
                }
        }
        
      
    }

    render() { 
        
        return (  
            <div className='transactions'>
                <Welcome />
                <br/>
                <br/>
                <br/>
            <div className='example1'>
                <h3> <b><u>SIGN IN</u></b></h3>
            
                <br />
                <form >
                <div className='form-row'>
                            <div className='form-group form-group-sm col-md-4'>
                    <input 
                                    type ='text ' 
                                    name='username'
                                    class='form-control'
                                    placeholder='UserName'
                                    value= {this.state.username} 
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
                                <button className="btn btn-dark btn-sm" onClick={this.handleSubmit} >LogIn</button>

                          </div>
                          </div>

                        <h6>Not a member?</h6>   
                        <Link className='btn btn-link-primary' to='/register'>
                            <h6><b>Register</b></h6>
                        </Link>                      
                    </form>
                
                </div>
                </div>
            
          
          
            
           
        );
    }
}



 
export default WelcomeSignin;