import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService';

class LoginPageComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            loginFailed: false,
            //successMessage: false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }
    render() {
        return(
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/*<ShowInvalidCredentials showInvalidCredentials = {this.state.loginFailed}/>}
                    <ShowSuccessMessage showSuccessMessage = {this.state.successMessage}/>*/}
                    {this.state.loginFailed && <div className="alert alert-warning">Login Failed: Invalid Credentials</div>}
                    {/*this.state.successMessage && <div>Login Success</div>*/}
                    <label className="username-input">
                        <input className="inputFields" type="text" name="username" value={this.state.username} onChange={this.handleInputChange} placeholder="&nbsp;"/>
                        <span className="label-username">Username</span>
                        <span className="border-username"></span>
                    </label>
                    <br/>
                    <label className="password-input">
                        <input className="inputFields" type="password" name="password" value={this.state.password} onChange={this.handleInputChange} placeholder="&nbsp;"/>
                        <span className="label-password">Password</span>
                        <span className="border-password"></span>
                    </label>
                    <br/>
                    <button className="btn btn-outline-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        );
    }  
    handleInputChange(event){
        this.setState({
            [event.target.name]: 
            event.target.value
        });
    }
    loginClicked(){
        //hard coded authorization
        /*if(this.state.username === "Ken" && this.state.password === "zuishuai"){
            AuthenticationService.basicAuthsuccessLogin(this.state.username, this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`);
            this.setState({
                loginFailed: false
                //successMessage: true
            })
        }
        else{
            this.setState({
                loginFailed: true
                //successMessage: false
            })
        }*/

        //executing basic auth
        /*AuthenticationService.executeBasicAuth(this.state.username, this.state.password)
        .then(
            (response) => {
                console.log(response);
                AuthenticationService.=basicAuthsuccessLogin(this.state.username, this.state.password);
                this.props.history.push(`/welcome/${this.state.username}`);
            })
        .catch(
            () => {
                this.setState({
                    loginFailed: true
                })
            }
        )*/
        
        //executing using JWT
        AuthenticationService.executeJWTAuth(this.state.username, this.state.password)
        .then(
            (response) => {
                console.log(response);
                AuthenticationService.JWTSuccessLogin(this.state.username, response.data.token);
                this.props.history.push(`/welcome/${this.state.username}`);
            })
        .catch(
            () => {
                this.setState({
                    loginFailed: true
                })
            }
        )
    }
}

export default LoginPageComponent;