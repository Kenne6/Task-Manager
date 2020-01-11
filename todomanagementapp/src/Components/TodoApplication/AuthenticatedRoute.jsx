import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService';
import {Route, Redirect} from 'react-router-dom';


class AuthenticatedRoute extends Component{
    render(){
        if(AuthenticationService.userHasLoggedIn()){
            return(<Route {...this.props}/>);
        }
        else{
           return( <Redirect to="/login"/>);
        }
    }
}

export default AuthenticatedRoute;