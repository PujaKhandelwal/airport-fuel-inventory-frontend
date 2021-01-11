import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Welcome from './Welcome';

class RegisterSucess extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='LoanApplication'>
                <Welcome />
                <br/>
            <div className='example2'>
                <h3 color= 'black'>
                    <br/>
                    Registered Successfully
                </h3>
                <br/>
                <p>
                    Thankyou for creating the account.
                </p>
                <p>Hpappy Working...</p>
                <br/>
                <br/>
                <br/>
                <Link className='linkWelcome' to='/signin'>
                    <button className='but' >Login</button>
                </Link>
                </div>
            </div>
         );
    }
}
 
export default RegisterSucess;  