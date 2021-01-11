import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Welcome from './Welcome'
import AuthService from './AuthService.js';

//DASHBOARD OF AIRPORT FUEL INVENTORY
class LoginUser extends Component {
    render() {
        return ( 
          <div className = "transactions" >
                 <Welcome />
                 <br/>
                 <div class="card" style={{width:"18rem"}}>
                <div className="card">
                <div img class="card-img-top" src="https://source.unsplash.com/daily" alt="Card image top"></div>
                <div className="card-body">
                <h3 className="card-title">INITIALIZE</h3>
                <p className="card-text">Add Airport || Add Aircraft || Reset Transactions</p>
                <Link className='btn btn-danger btn-sm' to='/add_airport'>
                            <h6><b>ADD AIRPORT</b></h6>
                </Link> 
                <br/>
                <br/>
                <span className="tab"></span>  
                <Link className='btn btn-danger btn-sm' to='/add_aircraft'>
                            <h6><b>ADD AIRCRAFT</b></h6>
                </Link>
                <br/>
                <br/>
                <span className="tab"></span>  
                <Link className='btn btn-danger btn-sm' to='/reset_sucess'>
                            <h6><b>RESET TRANSACTION</b></h6>
                </Link>

  </div>
</div> 
</div>
              <br/>
              <div class="card" style={{width:"18rem"}}>
                 <div className="card">
                <div img class="card-img-top" src="https://source.unsplash.com/daily" alt="Card image top"></div>
                <div className="card-body">
                <h3 className="card-title">AIRPORT</h3>
                <p className="card-text">Add airport || List airport</p>
                <Link className='btn btn-danger btn-sm'  to='/add_airport'>
                            <h6><b>ADD AIRPORT</b></h6>
                </Link> 
                <br/>
                <br/>
                <span className="tab"></span>  
                <Link className='btn btn-danger btn-sm'  to='/show_airport'>
                            <h6><b>LIST AIRPORT</b></h6>
                </Link> 
  </div>
</div> 
</div>

              

              
              <br/>
              <div class="card" style={{width:"18rem"}}>
                 <div className="card">
  <div img class="card-img-top" src="https://source.unsplash.com/daily" alt="Card image top"></div>
  <div className="card-body">
    <h3 className="card-title">AIRCRAFT</h3>
    <p className="card-text">Add Aircraft || List Aircraft</p>
    <Link className='btn btn-danger btn-sm'  to='/add_aircraft'>
                            <h6><b>ADD AIRCRAFT</b></h6>
                        </Link> 
                        <br/>
                        <br/>
                        <span className="tab"></span>  
                        <Link className='btn btn-danger btn-sm'  to='/show_aircraft'>
                            <h6><b>LIST AIRCRAFT</b></h6>
                        </Link> 
  </div>
</div> 
</div>


              <br/>
              <div class="card" style={{width:"18rem"}}>
                 <div className="card">
  <div img class="card-img-top" src="https://source.unsplash.com/daily" alt="Card image top"></div>
  <div className="card-body">
    <h3 className="card-title">TRANSACTION</h3>
    <p className="card-text">Add Transaction(in airport) || Reverse Transaction(out airport) || List Transactions</p>
    <Link className='btn btn-danger btn-sm'  to='/transaction_type'>
                            <h6><b>ADD TRANSACTION</b></h6>
                        </Link> 
                     
                        <br/>
                        <span className="tab"></span>  
                        <Link className='btn btn-danger btn-sm'  to='/reverse_transaction'>
                            <h6><b>REVERSE TRANSACTION</b></h6>
                        </Link> 
                        <br/>
                        <br/>
                        <span className="tab"></span>  
                        <Link className='btn btn-danger btn-sm'  to='/show_transaction'>
                            <h6><b>LIST TRANSACTION</b></h6>
                        </Link> 
   
  </div>
</div> 
</div>
<br/>
<div class="card" style={{width:"18rem"}}>

<div className="card">
  <div img class="card-img-top" src="https://source.unsplash.com/daily" alt="Card image top"></div>
  <div className="card-body">
    <h3 className="card-title">REPORT</h3>
    <p className="card-text">Airport Sumary Report || Fuel Consumption Report</p>
    <Link className='btn btn-danger btn-sm'  to='/airport_summary_report'>
                            <h6><b>AIRPORT SUMMARY</b></h6>
                        </Link> 
                        <br/>
                        <br/>
                        <span className="tab"></span>  
                        <Link className='btn btn-danger btn-sm'  to='/fuel_consumption_report'>
                            <h6><b>FUEL CONSUMPTION</b></h6>
                        </Link>             
   
  </div>
</div>
</div> 

<br/>
              </div>
           
              );
    }
}
       
         
 
export default LoginUser;