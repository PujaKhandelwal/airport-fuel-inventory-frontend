import React, {Fragment} from 'react';
import './App.css';
import Welcome from './airportcomponent/Welcome.jsx';
import InventoryRoutes from './airportcomponent/InventoryRoutes.jsx';
import AddAirport from './airportcomponent/AddAirport.jsx';
import WelcomeSignin from './airportcomponent/WelcomeSignin';
// import './airportcomponents/StyleSheets.css';
// import 'bootstrap/dist/css/bootstrap.css';


const App = () => {
  return(
    <Fragment>
      {/* <Navbar />
      <HomePage /> */}
      {/* <AddAirport /> */}
      {/* <WelcomeSignin /> */}
      <InventoryRoutes/>
      {/* 
      <SignUp />
      <SignIn />
      <Footer /> */}
    </Fragment>
  )}

export default App;
