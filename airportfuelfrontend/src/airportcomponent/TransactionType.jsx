import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Welcome from './Welcome'
// import { reset } from './api/airportAppApi';

class ResetSucess extends Component {
    state = { 
     }

  
    render() { 

        


        return ( 
            <div className = "transactions" >
                   <Welcome />
                   
                <br/>
                <div className = "example1">
                <h3 color= 'black'>
                    <br/>
                   
                    Transaction Type IN | OUT
                </h3>
                <br/>
               
              
                <br/>
                <br/>
                <br/>
                <Link className='linkWelcome' to='/in_transaction'>
                    <button className='but' >IN</button>
                </Link>
                <span className="tab"></span> 
                <Link className='linkWelcome' to='/out_transaction'>
                    <button className='but' >OUT</button>
                </Link>
                </div>
            </div>
         );
    }
}
 
export default ResetSucess;  