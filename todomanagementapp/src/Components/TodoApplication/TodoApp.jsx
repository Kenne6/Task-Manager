import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute';
import WelcomePageComponent from './WelcomePageComponent';
import LogoutPageComponent from './LogoutPageComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import ListTodoPageComponent from './ListTodoPageComponent';
import ErrorPageComponent from './ErrorPageComponent';
import LoginPageComponent from './LoginPageComponent';
import ModifyDataPageComponent from './ModifyDataPageComponent';


class TodoApp extends Component {
    render(){
        return (
            <div className = "todoApp">
                <Router>
                    <HeaderComponent/>
                        <Switch>
                            <Route path="/" exact component={LoginPageComponent}/>
                            <Route path="/login" exact component={LoginPageComponent}/>
                            <AuthenticatedRoute path="/welcome/:name" exact component={WelcomePageComponent}/>
                            <AuthenticatedRoute path="/todo" exact component={ListTodoPageComponent}/>
                            <AuthenticatedRoute path="/logout" exact component={LogoutPageComponent}/>
                            <AuthenticatedRoute path="/todo/modifydata/:id" exact component={ModifyDataPageComponent}/>
                            <Route component={ErrorPageComponent}/>
                        </Switch>
                    <FooterComponent/>
                </Router>
            </div>
        )
    }
}

/*function ShowInvalidCredentials(props){
    if(props.showInvalidCredentials){
        return <div>Invalid Credentials</div>
    }
    else{
        return null;
    }
}

function ShowSuccessMessage(props){
    if(props.showSuccessMessage){
        return <div>Login Success</div>
    }
    else{
        return null;
    }
}*/
  
export default TodoApp;