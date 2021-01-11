
import React, { Component } from 'react';
import Welcome from './Welcome'
import { Link } from 'react-router-dom';
import AuthServive from './AuthService.js';
import {addAirport} from './api/airportAppApi';

// Add the Airport Details
class AddAirport extends Component {
    state = { 
        airport_name: '',
        fuel_capacity: '',
        fuel_available: '',
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
        if(this.state.airport_name === '' )  this.setState({ isFailed: true})
        const response = await addAirport(this.state.airport_name, this.state.fuel_available, this.state.fuel_capacity);   
        if(response.status == 200){
                this.props.history.push('/sucess');
                this.setState({ isFailed: false}) }
        else{
                this.props.history.push('/add_airport');
                this.setState({ isFailed: true, message: response.data.error })}
        event.preventDefault(); }

    render() { 
        return (  
            <div className = "transactions" >
                <Welcome />
                <br/>
                <div className = "example1">
                <h3><b>ADD AIRPORT</b></h3><br/>
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
                                    name='fuel_capacity'
                                    class='form-control'
                                    placeholder='Fuel Capacity(Litres)'
                                    value= {this.state.fuel_capacity} 
                                    onChange= {this.handleChange}
                                    required
                                />
                        </div>
                        </div>
                        <div className='form-row'>
                            <div className='form-group form-group-sm col-md-4'>
                    <input 
                                    type ='number ' 
                                    name='fuel_available'
                                    class='form-control'
                                    placeholder='Fuel Available(Litres)'
                                    value= {this.state.fuel_available} 
                                    onChange= {this.handleChange}
                                    required
                                />
                        </div>
                        </div>
                               <div class='form-row'>
                            <div className='form-group form-group-sm col-md-4'>
                                {this.state.isFailed && <div><h5><i>{this.state.message}</i></h5></div>}
                                <br/>  
                                <button className="btn btn-dark btn-sm" onClick={this.handleSubmit}>Submit</button>
                          </div>
                          </div>
                    </form>
                    </div>
                </div>   
        ); }
} 
export default AddAirport;