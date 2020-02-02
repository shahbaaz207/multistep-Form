import React, { Component } from 'react'
class FormUserDetails extends Component {
   continue=e=>{
        e.preventDefault()
       this.props.nextstep();
   }
    render() {
        const{firstname,lastname,email,handleChange}=this.props
        return (
            
            <div className="container">
               <nav className="navbar fixed-top navbar-dark bg-dark">
             
               <h3 style={{color:'white',textAlign:'center'}}> Enter User Details</h3>
               </nav>
               <br/>
               <br/>
               <br/>
               <br/>
               <form>
               <div class="input-group mb-3">
               <span class="input-group-text" id="inputGroup-sizing-default">First Name</span>
                    <input type="text" class="form-control" aria-label="Sizing example input"
                     aria-describedby="inputGroup-sizing-default"
                    onChange={handleChange}
                    name="firstname"
                    value={firstname}
                    />
                </div>
                <div class="input-group mb-3">
               <span class="input-group-text" id="inputGroup-sizing-default">Last Name</span>
                    <input type="text" class="form-control" aria-label="Sizing example input"
                     aria-describedby="inputGroup-sizing-default"
                    onChange={handleChange}
                    name="lastname"

                    value={lastname}
                    />
                </div>
                <div class="input-group mb-3">
               <span class="input-group-text" id="inputGroup-sizing-default">Enter your Email</span>
                    <input type="text" class="form-control" aria-label="Sizing example input"
                     aria-describedby="inputGroup-sizing-default"
                    onChange={handleChange}
                    name="email"
                    value={email}
                    />
                </div>
                <br/>
                <button className="btn btn-info" type="submit" onClick={this.continue}>Continue</button>
                </form>

            </div>
                   

        )
    }
}

export default FormUserDetails
