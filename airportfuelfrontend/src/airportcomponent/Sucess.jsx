import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reset } from './api/airportAppApi';
import Welcome from './Welcome';

class Sucess extends Component {
    state = { 

     }




    render() { 

        


        return ( 
            <div >
                <Welcome />
                <br/>
            <div >
                <h3 color= 'black'>
                    <br/>
                   Work Successfully Done!!
                </h3>
                <br/>
               
              
                <br/>
                <br/>
                <br/>
                <Link className='linkWelcome' to='/login'>
                    <button className='but' >Home</button>
                </Link>
                </div>
            </div>
         );
    }
}
 
export default Sucess;  