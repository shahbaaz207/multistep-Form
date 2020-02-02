import React, { Component } from 'react'
class FormPersonalDetails extends Component {
   continue=e=>{
        e.preventDefault()
       this.props.nextstep();
   }
   back=e=>{
    e.preventDefault()
   this.props.prevstep();
}
    render() {
        const{occupation,handleChange,bio,city}=this.props
        return (
            <React.Fragment>
            <div className="container">
               <nav className="navbar fixed-top navbar-dark bg-dark">
             
               <h3 style={{color:'white',textAlign:'center'}}>Enter Presonal Details</h3>
               </nav>
               <br/>
               <br/>
               <br/>
               <br/>
               <form>
               <div class="input-group mb-3">
               <span class="input-group-text" id="inputGroup-sizing-default">Occupation</span>
                    <input type="text" class="form-control" aria-label="Sizing example input"
                     aria-describedby="inputGroup-sizing-default"
                    onChange={handleChange}
                    name="occupation"
                    value={occupation}
                    />
                </div>
                <div class="input-group mb-3">
               <span class="input-group-text" id="inputGroup-sizing-default"> City</span>
                    <input type="text" class="form-control" aria-label="Sizing example input"
                     aria-describedby="inputGroup-sizing-default"
                    onChange={handleChange}
                    name='city'
                    value={city}
                    />
                </div>
                <div class="input-group mb-3">
               <span class="input-group-text" id="inputGroup-sizing-default">bio</span>
                    <input type="text" class="form-control" aria-label="Sizing example input"
                     aria-describedby="inputGroup-sizing-default"
                    onChange={handleChange}
                    name="bio"
                    value={bio}
                    />
                </div>
                <br/>
                <button className="btn btn-info" type="submit" onClick={this.continue}>Continue</button>
                
                <button className="btn btn-primary float-right" type="submit" onClick={this.back}>Back </button>
                </form>

            </div>
            </React.Fragment>       

        )
    }
}

export default FormPersonalDetails
