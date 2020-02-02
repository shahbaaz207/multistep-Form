import React, { Component } from 'react'
import  '../App.css'
class Conform extends Component {
    continue=e=>{
        e.preventDefault()
       this.props.nextstep();
   }
   back=e=>{
    e.preventDefault()
   this.props.prevstep();
}
    render() {
        const {firstname,lastname,occupation,city,bio}=this.props
        return (
            <div>
             <div className="container">
               <nav className="navbar fixed-top navbar-dark bg-dark">
             
               <h3 style={{color:'white',textAlign:'center'}}>Confirm User Data</h3>
               </nav>
               </div>
               <br/><br/>
               <div>
                    <center>
                        <div className="conform">
                            <h3> <span class="badge badge-danger">First Name</span>
                            <li>{firstname}</li>
                            </h3>
                            
                        </div>
                        <div className="conform">
                            <h3><span class="badge badge-danger">Last Name</span>
                            <li>{lastname}</li>
                            </h3>
                        </div>
                        <div className="conform">
                            <h3><span class="badge badge-danger">Occupation</span>
                            <li>{occupation}</li>
                            </h3>
                        </div>
                        <div className="conform">
                            <h3><span class="badge badge-danger">City</span>
                            <li>{city}</li>
                            </h3>

                        </div>
                        <div className="conform">
                            <h3><span class="badge badge-danger">Bio</span>
                            <li>{bio}</li>
                            </h3>
                        </div>
                    </center>
               </div>
                        <div className='last'>
                                <button className="btn btn-info" type="submit" onClick={this.continue}>Conform & Continue</button>
                                <button className="btn btn-primary float-right" type="submit" onClick={this.back}>Back </button>
                        </div>
            </div>
        )
    }
}

export default Conform
