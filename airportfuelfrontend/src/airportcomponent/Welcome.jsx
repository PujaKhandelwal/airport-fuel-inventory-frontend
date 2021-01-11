
import React, { Component } from 'react';
import './StyleSheets.css'
import {Link} from 'react-router-dom';
import AuthService from './AuthService';
import {withRouter } from 'react-router';

class Welcome extends Component {
    state = {  }
    render() { 
        const isUserLoggedIn = AuthService.isUserLoggedIn();
        // const isUserLoggedIn = true;
        console.log(isUserLoggedIn);
        return ( 
            <div>
            <nav>
                <Link className='linkWelcome'  to='/'>
                    <h4>Airport Fuel Inventory</h4>
                </Link>
                <ul className='nav-links'>
                {isUserLoggedIn &&  <li><Link className='linkWelcome' to='/login'>
                        <h6>Dashboard</h6>
                    </Link></li> } 
                    {/* <li><Link className='linkWelcome'  to='/about'>
                       About Us
                    </Link></li> */}
                    {/* <li><Link className='linkWelcome'  to='/contact'>
                       Contact Us
                    </Link></li> */}
                    {!isUserLoggedIn && <li><Link className='linkWelcome' to='/signin'>
                        <h6>Sign In</h6>
                    </Link></li>}
                    {!isUserLoggedIn && <li><Link className='linkWelcome' to='/register'>
                        <h6>Register</h6>
                    </Link></li> } 
                    {isUserLoggedIn && <li><Link className='linkWelcome' to='/signin' onClick={AuthService.logout}>
                        <h6>Logout</h6>
                    </Link></li> } 
                </ul>
            </nav>
        </div>
         );
    }
}
 
export default withRouter(Welcome) ;



        
        
       

