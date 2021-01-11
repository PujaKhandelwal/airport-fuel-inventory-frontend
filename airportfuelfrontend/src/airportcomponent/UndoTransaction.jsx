
import React, { Component } from 'react';
import Welcome from './Welcome'
// import RegisterPage from './RegisterPage'
import { Link } from 'react-router-dom';
// import LoginUser from './LoginUser';
// import loanAppDataService from './api/loanAppDataService'
import AuthServive from './AuthService.js';
import {outtransaction} from './api/airportAppApi';

// component to sign in
class UndoTransaction extends Component {
    state = { 
        airport_name: '',
        aircraft_no: '',
        quantity: '',
        message:'Fields cannot be empty'
     }

    handleChange= (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async (event) => {
        console.log(this.state.airport_name);
        event.preventDefault();
        // if(this.state.airport_name === '' || this.state.fuel_capacity === '' || this.state.fuel_available)
        // {
        //     this.setState({ isFailed: true})
            
        // }
        // else if(this.state.password.length < 6 || this.state.password > 16)
        // {
        //     this.setState({ 
        //         isFailed: true,
        //         message:'length should be between (6-16)'
        //         })  
        //     }
        // else if(!(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/).test(this.state.password))
        // {
        //     this.setState({
        //         isFailed: true,
        //         message: 'should contain |A-Z|a-z|0-9|!@#$%^&*|'
        //     })
        // }
        // else
        // {
            console.log("checked for username nd password from db");
            const response = await outtransaction(this.state.airport_name, this.state.aircraft_no, this.state.quantity);   
            console.log(response); 

            event.preventDefault();   
                if(response.status == 200)
                {
                    console.log('Transaction Added Successfully');
                    // AuthServive.successfulLogin(this.state.username, response.data.token);
                    this.props.history.push('/sucess');
                    this.setState({ isFailed: false})
                }
                else{
                    console.log(response);
                    console.log('Airport Addition failed');
                    this.props.history.push('/out_transaction');
                    this.setState({ isFailed: true, message: response.data.error
                        })
                }
        // }
        event.preventDefault();
      
    }

    render() { 
        
        return (  
            <div >
                <Welcome />
                <br/>
                <br/>
                <br/>
            <div  align='center'>
                <h3> <b>Out Transaction</b></h3>
            
                <br />
                <form >
                <div className='form-row'>
                            <div className='form-group form-group-sm col-md-4'>
                    <input 
                                    type ='text ' 
                                    name='airport_name'
                                    class='form-control'
                                    placeholder='Airport Name'
                                    value= {this.state.airport_name} 
                                    onChange= {this.handleChange}
                                    required
                                    size="50"
                                />
                        </div>
                        </div>
                        <div className='form-row'>
                            <div className='form-group form-group-sm col-md-4'>
                    <input 
                                    type ='text ' 
                                    name='aircraft_no'
                                    class='form-control'
                                    placeholder='Aircraft No'
                                    value= {this.state.aircraft_no} 
                                    onChange= {this.handleChange}
                                    required
                                    size="50"
                                />
                        </div>
                        </div>
                        <div className='form-row'>
                            <div className='form-group form-group-sm col-md-4'>
                    <input 
                                    type ='number ' 
                                    name='quantity'
                                    class='form-control'
                                    placeholder='Fuel Quantity(Litre)'
                                    value= {this.state.quantity} 
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
                                <button className="btn btn-dark btn-sm" onClick={this.handleSubmit} >Submit</button>
                                <button className="btn btn-dark btn-sm" onClick={this.handleSubmit} >Back</button>

                          </div>
                          </div>
                    
                    </form>
                
                </div>
                </div>
          
          
            
           
        );
    }
}



 
export default UndoTransaction;