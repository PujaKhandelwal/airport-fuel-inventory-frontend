import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Welcome from './Welcome'
import AuthService from './AuthService';
import {fetchAirport} from './api/airportAppApi';
// import { ContactSupportTwoTone } from '@material-ui/icons';


class AirportSummaryReport extends Component {
    constructor(props){
        super(props)
        this.state = { 
            airports:[
             
            ],
            message:''
         }
    }
    componentDidMount()
    {
        this.handleChange();
    }

    handleChange= async () => {
            const response = await fetchAirport();   
            console.log(response);
              
                if(response.status == 200)
                {
                    console.log('Airport Listed Successfully');
                    this.setState({
                   
                        airports:response.data,
                        isFailed: false
                    })
                }
                else{
                    console.log(response);
                    console.log('Airport Addition failed');
                    // this.props.history.push('/add_airport');
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
           <div >
                <h2><b>Airport Summary Report</b></h2>
                <br/>
                <br/>
                <table className='table'>
                    <thead>
                        <tr>
                        <th><h5><b>Airport</b></h5></th>
                            <th><h5><b>Fuel Available</b></h5></th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.airports &&
                             this.state.airports.map(
                                airport =>
                                 <tr>
                                     <td><h5><i>{airport.airport_name}</i></h5></td>
                                     <td><h5><i>{airport.fuel_available}</i></h5></td>
                                 </tr>
                             )
                        }
                    </tbody>
                </table>
                    <h5>{this.state.message}</h5>
            </div>
            </div>
         );
    }
}
 
export default AirportSummaryReport;
