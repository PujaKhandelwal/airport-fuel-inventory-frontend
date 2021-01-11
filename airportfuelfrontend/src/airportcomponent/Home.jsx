import React, { Component } from 'react';
import Welcome from './Welcome';

class Home extends Component {
    state = {  }
    render() { 
        return (  
            <div className='transactions' >
                <Welcome />
                <br/>
                <br/>
                <br/>
                <div className='example1'>
                    <br/>
                    <br/>
                    <h4><b><u>Welcome to Airport Fuel Inventory</u></b></h4>
                    <br/>
                    
                    <p>The world’s busiest airports have leveraged our products and services to help improve logistics and operational efficiencies across key aviation fuels management areas for over 20 years.</p>
                    <p>These areas include tank farm automation, into-plane fuels automation, fuel inventory accounting, and enterprise systems.</p>
                    
                </div>
            </div>
         );
    }
}
 
export default Home;