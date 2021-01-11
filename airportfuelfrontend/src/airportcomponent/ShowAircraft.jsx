import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Welcome from './Welcome'
import AuthService from './AuthService';
import {fetchAircraft} from './api/airportAppApi';


class ShowAircraft extends Component {
    constructor(props){
        super(props)
        this.state = { 
            aircrafts:[
             
            ],
            message:''
         }
    }
    componentDidMount()
    {
        this.handleChange();
    }

    handleChange= async () => {
            const response = await fetchAircraft();   
              
                if(response.status == 200)
                {
                    console.log('Airport Listed Successfully');
                    this.setState({
                   
                        aircrafts:response.data,
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
            <div className='transactions'>
                <Welcome/>
                <br/>
                <br/>
                <br/>
           <div className='example2'>
                <h2><b>Your Aircrafts</b></h2>
                <br/>
                <br/>
                <table className='table'>
                    <thead>
                        <tr>
                        <th><h5><b>Aircraft Number</b></h5></th>
                            <th><h5><b>Airline</b></h5></th>
                            <th><h5><b>Source</b></h5></th>
                            <th><h5><b>Destination</b></h5></th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.aircrafts &&
                             this.state.aircrafts.map(
                                 aircraft =>
                                 <tr>
                                     <td><h5><i>{aircraft.aircraft_no}</i></h5></td>
                                     <td><h5><i>{aircraft.airline}</i></h5></td>
                                     <td><h5><i>{aircraft.source}</i></h5></td>
                                     <td><h5><i>{aircraft.destination}</i></h5></td>
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
 
export default ShowAircraft;
