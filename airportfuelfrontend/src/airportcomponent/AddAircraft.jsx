
import React, { Component } from 'react';
import Welcome from './Welcome'
import { Link } from 'react-router-dom';
import AuthServive from './AuthService.js';
import {addAircraft} from './api/airportAppApi';

// AAD AIRCRAFT DETAILS 
class AddAircraft extends Component {
    state = { 
        aircraft_no: '',
        airline: '',
        source: '',
        destination: '',
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
        if(this.state.aircraft_no === '' || this.state.airline === '' || this.state.source === '' || this.state.destination === '')
            this.setState({ isFailed: true})
            const response = await addAircraft(this.state.aircraft_no, this.state.airline, this.state.source, this.state.destination);   
                if(response.status == 200){                
                    this.props.history.push('/sucess');
                    this.setState({ isFailed: false});}
                else{
                    this.props.history.push('/add_aircraft');
                    this.setState({ isFailed: true, message: response.data.error
                        })}
        event.preventDefault();
    }

    render() { 
        
        return (  
            <div className = "transactions" >
                <Welcome />
                <br/>
                <div className = "example1">
                <h3> <b>ADD Aircraft</b></h3>
                <br />
                <form >
                <div className='form-row'>
                            <div className='form-group form-group-sm col-md-4'>
                    <input 
                                    type ='text ' 
                                    name='aircraft_no'
                                    class='form-control'
                                    placeholder='Aircraft Number'
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
                                    type ='text ' 
                                    name='airline'
                                    class='form-control'
                                    placeholder='Airline'
                                    value= {this.state.airline} 
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
                                    name='source'
                                    class='form-control'
                                    placeholder='Source'
                                    value= {this.state.source} 
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
                                    name='destination'
                                    class='form-control'
                                    placeholder='Destination'
                                    value= {this.state.destination} 
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
                                <button className="btn btn-dark btn-sm" onClick={this.handleSubmit} >Add</button>

                          </div>
                          </div>
                    
                    </form>
                    </div>
                </div>
           
        );
    }
}



 
export default AddAircraft;