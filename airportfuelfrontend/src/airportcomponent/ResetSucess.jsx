import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reset } from './api/airportAppApi';
import Welcome from './Welcome';

class ResetSucess extends Component {
    state = { 
        isFailed: false
     }

    componentDidMount()
    {
        this.handleChange();
    }

    handleChange= async () => {
            const response = await reset();   
            console.log(response);
              
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
    }




    render() { 

        


        return ( 
            <div className = "transactions" >
                <Welcome/>
                <br/>
            <div className="example1">
                <h3 color= 'black'>
                    <br/>
                    Reset Transaction Done Successfully!!
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
 
export default ResetSucess;  