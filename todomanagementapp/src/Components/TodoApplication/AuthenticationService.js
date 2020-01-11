import axios from 'axios';
import {springBootAPIURL} from '../../Constants'

export const sessionNameAttribute = "authenticatedUser";

function AuthenticationService(){
}

//handler for basic-auth success login
AuthenticationService.prototype.basicAuthsuccessLogin = function(username, password){
    sessionStorage.setItem(sessionNameAttribute, username);
    this.setupAxiosInterceptor(this.formatBasicAuthHeader(username, password));
}

//handler for JWT success login
AuthenticationService.prototype.JWTSuccessLogin = function(username, token){
    sessionStorage.setItem(sessionNameAttribute, username);
    this.setupAxiosInterceptor(this.formatJsonWebToken(token));
}

AuthenticationService.prototype.logout = function(username, password){
    sessionStorage.removeItem(sessionNameAttribute, username);
    window.location.reload(); //refresh page to update spring security session
}

AuthenticationService.prototype.userHasLoggedIn = function(){
    let user = sessionStorage.getItem(sessionNameAttribute);
    if(user !== null){
        return true;
    }
    else{
        return false;
    }
}

AuthenticationService.prototype.getUsername = function(){
    let user = sessionStorage.getItem("authenticatedUser");
    if(user === null){
        return '';
    }
    else{
        return user;
    }
}

//creating basic auth header
AuthenticationService.prototype.formatBasicAuthHeader = function(username, password){
    return 'Basic ' + window.btoa(username + ":" + password);
}

//creating JWT token
AuthenticationService.prototype.formatJsonWebToken = function(token){
    return 'Bearer ' + token;
}

//adding basic auth header
AuthenticationService.prototype.setupAxiosInterceptor = function(authorizationHeader){
    if(this.userHasLoggedIn()){
        axios.interceptors.request.use(
            (config) => {
                config.headers.authorization = authorizationHeader;
                return config;
            }
        );
    }
}

//authorize using Json Web Token with username and password
AuthenticationService.prototype.executeJWTAuth = function(username, password){
    return axios.post(`${springBootAPIURL}/tokenAuthentication`, {
        username: username,
        password: password
    })
}

//dynamically authentication using username and password
AuthenticationService.prototype.executeBasicAuth = function(username, password){
    return axios.get(`${springBootAPIURL}/basic-auth`, {
        headers: {
            authorization: this.formatBasicAuthHeader(username, password)
        }
    })
}

export default new AuthenticationService();