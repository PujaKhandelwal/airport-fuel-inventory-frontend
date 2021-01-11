import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Welcome from './Welcome'
import AuthService from './AuthService';
import {fetchTransaction} from './api/airportAppApi';

// list of transactions
class ListTransaction extends Component {
    constructor(props){
        super(props)
        this.state = { 
            transactions:[
             
            ],
            message:''
         }
    }
    componentDidMount()
    {
        this.handleChange();
    }

    handleChange= async () => {
            const response = await fetchTransaction();   
              
                if(response.status == 200)
                {
                    this.setState({
                   
                        transactions:response.data,
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
            <div className= 'transactions'>
                <Welcome/>
                <br/>
                <br/>
                <br/>
           <div className='example2'>
                <h3><b>Transactions Of Your Inventory</b></h3>
                <br/>
                <br/>
                <table className='table'>
                    <thead>
                        <tr>
                        <th><h5><b>Date/Time</b></h5></th>
                            <th><h5><b>Type</b></h5></th>
                            <th><h5><b>Fuel</b></h5></th>
                            <th><h5><b>Aircraft</b></h5></th>
                            <th><h5><b>Airport</b></h5></th>
                            

                        </tr>
                    </thead>
                    <tbody>
                        { this.state.transactions &&
                             this.state.transactions.map(
                                 transaction =>
                                 

                                 <tr>
                                     <td><h5><i>{transaction.transaction_date_time}</i></h5></td>
                                     <td><h5><i>{transaction.transaction_type}</i></h5></td>
                                     <td><h5><i>{transaction.quantity}</i></h5></td>
                                     <td><h5><i>{transaction.aircraft_no}</i></h5></td> 
                                     <td><h5><i>{transaction.airport_name}</i></h5></td> 
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
 
export default ListTransaction;
