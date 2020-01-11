import React, {Component} from 'react';

class LogoutPageComponent extends Component{
    render(){
        return(
            <div>
                <header>
                    <h1 className = "logoutMessage">You Have Successfully Logged Out</h1>
                </header>
                <span className = "container">Thank You For Using the Application!</span>
            </div>
        );
    }
}

export default LogoutPageComponent;