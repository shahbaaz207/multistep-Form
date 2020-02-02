import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserForm from './components1/UserForm'
class App1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="container">
                <UserForm/>
            </div>
        )
    }
}

export default App1
