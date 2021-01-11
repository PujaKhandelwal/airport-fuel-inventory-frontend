import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Welcome from './Welcome'
import AuthService from './AuthService';
import {fetchAircraft, fetchAirport, revTransaction} from './api/airportAppApi';

// list of transactions
class FuelConsumptionReport extends Component {
    constructor(props){
        super(props)
        this.state = { 
            transactions:[
             
            ],
            airports:[],
            message:''
         }
    }
    componentDidMount()
    {
        this.handleChange();
    }

    handleChange= async () => {
            const response = await revTransaction();   
            const response_airport_details = await fetchAirport();
            console.log(response_airport_details);
              
                if(response.status == 200)
                {
                    this.setState({
                   
                        transactions:response.data,
                        airports: response_airport_details.data,
                        isFailed: false
                    })
                }
                else{
                    this.setState({ isFailed: true, message: response.data.error
                        })
                }
    }


    render() { 
         return ( 
            <div>
                <Welcome/>
                <br/>
                <br/>
                <br/>
           <div>
                <h3><b>Fuel Consumption Report</b></h3>
                <br/>
                <br/>
                {this.state.airports &&
                             this.state.airports.map(airport =>
                               
                                <ul>
                                    {/* <li> */}
                                    <h6><b>Airport : {airport.airport_name}</b></h6>
                                    {/* </li> */}
                                    {/* <li> */}
                                    <table className='table'>
                    <thead>
                        <tr>
                        <th><h6>Date/Time</h6></th>
                            <th><h6>Type</h6></th>
                            <th><h6>Fuel</h6></th>
                            <th><h6>Aircraft</h6></th>
                            {/* <th><h5><b>Airport</b></h5></th> */}
                            

                        </tr>
                    </thead>
                    <tbody>
                        { this.state.transactions &&
                             this.state.transactions.map(
                                 transaction =>
                                
                                


                                 <tr>
                                     
                                     <td><h6><i>{!(transaction.airport_name === airport.airport_name) || transaction.transaction_date_time}</i></h6></td>
                                     <td><h6><i>{!(transaction.airport_name === airport.airport_name) || transaction.transaction_type}</i></h6></td>
                                     <td><h6><i>{!(transaction.airport_name === airport.airport_name) || transaction.quantity}</i></h6></td>
                                     <td><h6><i>{!(transaction.airport_name === airport.airport_name) || transaction.aircraft_no}</i></h6></td>
                                     
                                     
                                 </tr>
                                
                                 
                             )
                        }
                    
                    </tbody>
                </table>

                                    {/* </li> */}
                                    
                                    <h6><b>Fuel Available : {airport.fuel_available}</b></h6>
            -------------------------------------------------------
                                    <br />
                                    <br/>
                                   
                                </ul>

                              ) }
                
                    <h5>{this.state.message}</h5>
            </div>
            </div>
         );
    }
}
 
export default FuelConsumptionReport;
