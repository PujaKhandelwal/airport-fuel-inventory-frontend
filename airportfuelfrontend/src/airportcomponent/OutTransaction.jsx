
import React, { Component } from 'react';
import Welcome from './Welcome'
// import RegisterPage from './RegisterPage'
import { Link } from 'react-router-dom';
// import LoginUser from './LoginUser';
// import loanAppDataService from './api/loanAppDataService'
import AuthServive from './AuthService.js';
import {outtransaction} from './api/airportAppApi';

// component to sign in
class OutTransaction extends Component {
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
       
        event.preventDefault();
        if(this.state.airport_name === '' || this.state.aircraft_name === ''  )
        {
            this.setState({ isFailed: true})
            
        }
        else if(!(/^\d+$/.test(this.state.quantity)))
            {
                this.setState({ isFailed: true,
                    message:'Should be a number only'})
            }
        else if(this.state.quantity <= 0)
        {
            this.setState({ isFailed: true,
            message:'Quantity should be greater than 0'})
        }
        else{
       
            const response = await outtransaction(this.state.airport_name, this.state.aircraft_no, this.state.quantity);    
                if(response.status == 200)
                {
                    this.props.history.push('/sucess');
                    this.setState({ isFailed: false})
                }
                else{
                    console.log(response);
                    // this.props.history.push('/out_transaction');
                    this.setState({ isFailed: true, message: response.data.error
                        })
                }
            }
        // event.preventDefault();
      
    }

    render() { 
        
        return (  
            <div className = "transactions" >
                <Welcome />
                <br/>
                <br/>
                <div className = "example1">
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

                                />
                        </div>
                        </div>
            
                               <div class='form-row'>
                            <div className='form-group form-group-sm col-md-4'>
                                {this.state.isFailed && <div><h5><i>{this.state.message}</i></h5></div>}
                                <br/>  
                                <button className="btn btn-dark btn-sm" onClick={this.handleSubmit} >Submit</button>
                                
                                <span className="tab"></span>  
                                <Link className='linkWelcome' to='/transaction_type'>
                    <button className='btn btn-dark btn-sm'> Back</button>
                </Link>

                          </div>
                          </div>
                    
                    </form>
                
               </div>
                </div>
            
           
        );
    }
}



 
export default OutTransaction;