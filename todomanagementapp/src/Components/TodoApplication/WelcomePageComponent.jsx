import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import HelloWorldService from '../../API/Todo/HelloWorldService';


class WelcomePageComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            welcomeMessage: ""
        }
        this.retriveWelcomeMessage = this.retriveWelcomeMessage.bind(this);
        this.handleSuccessResponse = this.handleSuccessResponse.bind(this);
        this.handleError = this.handleError.bind(this);
    }
    render(){
        return(
            <div>
                <h1>Welcome!!!</h1>
                <div className="container">
                    Hey {this.props.match.params.name}.
                    <br/>
                    You can check your Todo List <Link to = "/todo">here</Link>.
                </div>
                <div className="container">
                    Click to get a Welcome Message
                    <button onClick={this.retriveWelcomeMessage} className="btn btn-success">Get Welcome Messgae</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </div>
        );
    }
    retriveWelcomeMessage(){
        /*HelloWorldService.executeHelloWorldService()
        .then(response => this.handleSuccessResponse(response))
        */
        //.catch()
        /*HelloWorldService.executeHelloWorldBeanService()
        .then(response => this.handleSuccessResponse(response))*/
        HelloWorldService.executeHelloWorldPathVarService(this.props.match.params.name)
        .then(response => this.handleSuccessResponse(response))
        .catch(error => this.handleError(error));
    }
    handleSuccessResponse(response){
        console.log(response);
        this.setState({welcomeMessage: response.data.message})
    }
    handleError(error){
        console.log(error.response);
        let errorMessage = "";
        if(error.message){
            errorMessage += error.message;
        }
        if(error.response && error.response.data){
            errorMessage += error.response.data.message;
        }

        this.setState({welcome: errorMessage})
    }
}

export default WelcomePageComponent;