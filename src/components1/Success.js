import React, { Component } from 'react'

class Success extends Component {
   

    render() {
        return (
            <div>
             <div className="container">
               <nav className="navbar fixed-top navbar-dark bg-dark">
                <h3 style={{color:'white'}}>Success</h3>
               </nav>
                <br/>
                <br/>
                <br/>
                <div>
                <h2>Thank You For Your Submission!</h2>
                </div>
                <p>You will get an email with further instruction...
                </p>
                </div>
            </div>
        )
    }
}

export default Success
