import React, { Component } from 'react'
import FormUserDetails from '../components1/FormUserDetails';
import FormPersonalDetails from '../components1/UserPersonalDetails';
import Success from '../components1/Success';

import Conform from '../components1/Conform';

export class UserForm extends Component {
    state={
        step:1,
        // first step
        firstname:'',
        lastname:'',
        email:'',
        // second step 
        occupation:'',
        city:'',
        bio:'',

    }

    // proceed to next step
    nextstep=()=>{
        const {step}=this.state
        this.setState({
            step:step+1
        });
    }
// go to prev step
    prevstep=()=>{
        const {step}=this.state
        this.setState({
            step:step-1
        });
    }

    // handle File change
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
        

    }

    render() {
        const {step} =this.state;
        const {firstname,lastname,occupation,city,bio}=this.state;
       
       
       switch(step){
        case 1:
            return(
                <FormUserDetails
                    nextstep={this.nextstep}
                    handleChange={this.handleChange}
                    
                />
                )
        case 2:
            return(
                <FormPersonalDetails
                    nextstep={this.nextstep}
                    prevstep={this.prevstep}
                    handleChange={this.handleChange}
                   
                />
            )        
            
        case 3:
                return(
                    <Conform
                    nextstep={this.nextstep}
                    prevstep={this.prevstep}
                    firstname={firstname}
                    lastname={lastname}
                    occupation={occupation}
                    city={city}
                    bio={bio}
                />
                )        
                  
        case 4:
            return(
                <Success/>
            )        
            }     
    }
}

export default UserForm
