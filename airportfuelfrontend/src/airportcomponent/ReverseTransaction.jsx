import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Welcome from './Welcome'
import AuthService from './AuthService';
import {revTransaction, reverseTransaction} from './api/airportAppApi';


//to list the reverse transaction
class ReverseTransaction extends Component {
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

    handleChange= async (event) => {
        // event.preventDefault();
            const response = await revTransaction();   
              
                if(response.status == 200)
                {
                    console.log('Transaction Listed Successfully');
                    this.setState({
                   
                        transactions:response.data,
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
                // event.preventDefault();
    }

    handleModifyTransaction = async (_id) =>{
        console.log(_id);
        console.log("u r in reverse yransation");
        const response = await reverseTransaction(_id); 
        console.log(response);  
              
        if(response.status == 200)
        {
            console.log('Transaction Listed Successfully');
            this.props.history.push('/sucess');
            
        }
        else{
            console.log(response);
            console.log('Airport Addition failed');
            // this.props.history.push('/add_airport');
            this.props.history.push('/sucess');
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
                <div className='example1'>
                <br/>
           <div>
                <h3><b>Reverse The Transactions Done</b></h3>
                <br/>
                <br/>
                <table className='table'>
                    <thead>
                        <tr>
                        <th><h5><b>Date/Time</b></h5></th>
                            <th><h5><b>Type</b></h5></th>
                            {/* <th><h5><b>Airport Id</b></h5></th> */}
                            <th><h5><b>Fuel</b></h5></th>
                            <th><h5><b>Aircraft</b></h5></th>
                            <th><h5><b>Airport</b></h5></th>
                            <th><h5><b>Reverse</b></h5></th>
                           
                            {/* <th><h5><b>Transaction Id Parent</b></h5></th> */}
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.transactions &&
                             this.state.transactions.map(
                                 transaction =>
                                 <tr>
                                     <td><h5><i>{transaction.transaction_date_time}</i></h5></td>
                                     <td><h5><i>{transaction.transaction_type}</i></h5></td>
                                     {/* <td><h5><i>{transaction.airport_id}</i></h5></td> */}
                                    
                                     <td><h5><i>{transaction.quantity}</i></h5></td>
                                     <td><h5><i>{transaction.aircraft_no}</i></h5></td> 
                                     <td><h5><i>{transaction.airport_name}</i></h5></td> 
                                     {/* <td><h5><i>{transaction.transaction_id_parent}</i></h5></td> */}
                                     <td><button class="btn btn-success" onClick={()=>this.handleModifyTransaction(transaction._id)} >Reverse</button></td>
                                     
                                 </tr>
                             )
                        }
                    </tbody>
                </table>
                    <h5>{this.state.message}</h5>
            </div>
            </div>
            </div>
         );
    }
}
 
export default ReverseTransaction;
