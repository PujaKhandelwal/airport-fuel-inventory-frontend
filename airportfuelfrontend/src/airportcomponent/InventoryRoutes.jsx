import React, { Component } from 'react';
import Welcome from './Welcome';
import WelcomeSignin from './WelcomeSignin';
import './StyleSheets.css'
import RegisterPage from './RegisterPage';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginUser from './LoginUser';
import Home from './Home';
import AuthService from './AuthService.js';
import AuthenticatedRoute from './AuthenticatedRoute.jsx';
import AddAirport from './AddAirport.jsx';
import AddAircraft from './AddAircraft.jsx';
import AuthSignin from './AuthSignin';
import ShowAircraft from './ShowAircraft';
import ShowAirport from './ShowAirport';
import ListTransaction from './ListTransaction';
import ReverseTransaction from './ReverseTransaction';
import ResetSucess from './ResetSucess';
import TransactionType from './TransactionType';
import InTransaction from './InTransaction';
import OutTransaction from './OutTransaction';
import Sucess from './Sucess';
import RegisterSucess from './RegisterSucess';
import AirportSummaryReport from './AirportSummaryReport';
import FuelConsumptionReport from './FuelConsumptionReport'



class InventoryRoutes extends Component {
    state = {  }
    render() { 
        return ( 
            <Router>
                <div align ='center' >
                    
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <AuthSignin path='/signin' component={WelcomeSignin}/>
                        <AuthSignin path='/register' exact component={RegisterPage}/>
                        <AuthenticatedRoute path='/add_airport' exact component={AddAirport}/>
                        <AuthenticatedRoute path='/add_aircraft' exact component={AddAircraft}/>
                        <AuthenticatedRoute path='/show_transaction' exact component={ListTransaction}/>
                        <AuthenticatedRoute path='/reverse_transaction' exact component={ReverseTransaction}/>
                        <AuthenticatedRoute path='/out_transaction' exact component={OutTransaction}/>
                        <AuthenticatedRoute path='/in_transaction' exact component={InTransaction}/>
                        <AuthenticatedRoute path='/out_transaction' exact component={OutTransaction}/>
                        <AuthenticatedRoute path='/sucess' exact component={Sucess}/>
                        <AuthSignin path='/register_sucess' exact component={RegisterSucess}/>
                        <AuthenticatedRoute path='/airport_summary_report' exact component={AirportSummaryReport}/>
                        <AuthenticatedRoute path='/fuel_consumption_report' exact component={FuelConsumptionReport}/>

                        <AuthenticatedRoute path='/login' exact component={LoginUser }  />
                        <AuthenticatedRoute path='/transaction_type' exact component={TransactionType }  />
                        <AuthenticatedRoute path='/show_aircraft' exact component={ShowAircraft }  />
                        <AuthenticatedRoute path='/show_airport' exact component={ShowAirport }  />
                        <AuthenticatedRoute path='/reset_sucess' exact component={ResetSucess }  />
                         <Route component={ErrorComponent}/>
                        
                    </Switch>
                      </div>
               
                <div>

                </div>
            </Router>
            
         );
    }
}
function ErrorComponent(){
    return <div>An error ocurred.</div>
}
 
export default InventoryRoutes;

