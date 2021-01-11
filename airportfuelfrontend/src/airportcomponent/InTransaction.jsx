
import React, { Component } from 'react';
import Welcome from './Welcome'
import { Link } from 'react-router-dom';
import AuthServive from './AuthService.js';
import {intransaction} from './api/airportAppApi';

// In Transaction
class InTransaction extends Component {
    state = { 
        airport_name: '',
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
        if(this.state.airport_name === ''){
            this.setState({ isFailed: true}) }
            const response = await intransaction(this.state.airport_name, this.state.quantity);   
            console.log(response.data);  
                if(response.status == 200){
                    this.props.history.push('/sucess');
                    this.setState({ isFailed: false})}
                else{
                    this.props.history.push('/in_transaction');
                    this.setState({ isFailed: true, message: response.data.error
                        })
                }
        event.preventDefault();
    }

    render() { 
        
        return (  
            <div className = "transactions" >
                <Welcome />
                <br/>
                <br/>
                <div className = "example1">
                <h3> <b>In Transaction</b></h3>
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
                                    size="100"
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



 
export default InTransaction;