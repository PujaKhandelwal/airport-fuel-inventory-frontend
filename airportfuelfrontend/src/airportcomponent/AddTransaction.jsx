
// import React, { Component } from 'react';
// import Welcome from './Welcome'
// import { Link } from 'react-router-dom';
// import AuthServive from './AuthService.js';
// import {addAirport} from './api/airportAppApi';

// // ADD TRANSACTION DETAILS
// class AddAirport extends Component {
//     state = { 
//         airport_name: '',
//         fuel_capacity: '',
//         fuel_available: '',
//         isFailed: false,
//         message:'Fields cannot be empty'
//      }

//     handleChange= (event) => {
//         this.setState({
//             [event.target.name]: event.target.value
//         })
//     }

//     handleSubmit = async (event) => {
//         console.log(this.state.airport_name);
//         event.preventDefault();
//         // if(this.state.airport_name === '' || this.state.fuel_capacity === '' || this.state.fuel_available)
//         // {
//         //     this.setState({ isFailed: true})
            
//         // }
//         // else if(this.state.password.length < 6 || this.state.password > 16)
//         // {
//         //     this.setState({ 
//         //         isFailed: true,
//         //         message:'length should be between (6-16)'
//         //         })  
//         //     }
//         // else if(!(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/).test(this.state.password))
//         // {
//         //     this.setState({
//         //         isFailed: true,
//         //         message: 'should contain |A-Z|a-z|0-9|!@#$%^&*|'
//         //     })
//         // }
//         // else
//         // {
//             console.log("checked for username nd password from db");
//             const response = await addAirport(this.state.airport_name, this.state.fuel_available, this.state.fuel_capacity);   
//             console.log(response); 

//             event.preventDefault();   
//                 if(response.status == 200)
//                 {
//                     console.log('Airport Added Successfully');
//                     // AuthServive.successfulLogin(this.state.username, response.data.token);
//                     this.props.history.push('/login');
//                     this.setState({ isFailed: false})
//                 }
//                 else{
//                     console.log(response);
//                     console.log('Airport Addition failed');
//                     this.props.history.push('/add_airport');
//                     this.setState({ isFailed: true, message: response.data.error
//                         })
//                 }
//         // }
//         event.preventDefault();
      
//     }

//     render() { 
        
//         return (  
//             <div className='LoanApplication'>
//                 <Welcome />
//                 <br/>
//                 <br/>
//                 <br/>
//             <div  align='center' className="example1" >
//                 <h3> <b>ADD AIRPORT</b></h3>
            
//                 <br />
//                 <form >
//                 <div className='form-row'>
//                             <div className='form-group form-group-sm col-md-4'>
//                     <input 
//                                     type ='text ' 
//                                     name='airport_name'
//                                     class='form-control'
//                                     placeholder='Airport Name'
//                                     value= {this.state.airport_name} 
//                                     onChange= {this.handleChange}
//                                     required
//                                     size="50"
//                                 />
//                         </div>
//                         </div>
//                         <div className='form-row'>
//                             <div className='form-group form-group-sm col-md-4'>
//                     <input 
//                                     type ='number ' 
//                                     name='fuel_capacity'
//                                     class='form-control'
//                                     placeholder='Fuel Capacity'
//                                     value= {this.state.fuel_capacity} 
//                                     onChange= {this.handleChange}
//                                     required
//                                     size="50"
//                                 />
//                         </div>
//                         </div>
//                         <div className='form-row'>
//                             <div className='form-group form-group-sm col-md-4'>
//                     <input 
//                                     type ='text ' 
//                                     name='fuel_available'
//                                     class='form-control'
//                                     placeholder='Fuel Available'
//                                     value= {this.state.fuel_available} 
//                                     onChange= {this.handleChange}
//                                     required
//                                     size="50"
//                                 />
//                         </div>
//                         </div>
//                                <div class='form-row'>
//                             <div className='form-group form-group-sm col-md-4'>
//                                 {this.state.isFailed && <div><h5><i>{this.state.message}</i></h5></div>}
//                                 <br/>  
//                                 <button className="btn btn-dark btn-sm" onClick={this.handleSubmit} >Add</button>

//                           </div>
//                           </div>
                    
//                     </form>
                
//                 </div>
//                 </div>
          
          
            
           
//         );
//     }
// }



 
// export default AddAirport;