import axios from 'axios';
import {springBootAPIURL} from '../../Constants'

class HelloWorldService {
    executeHelloWorldService(){
        return axios.get(`${springBootAPIURL}/hello-world`);
    }
    executeHelloWorldBeanService(){
        return axios.get(`${springBootAPIURL}/hello-world-bean`);
    }
    executeHelloWorldPathVarService(name){
    /*  let authenticatedUsername = "Ken";
        let authenticatedPassword = "zuishuai";
        let basicAuthHeader = 'Basic ' + window.btoa(authenticatedUsername + ":" + authenticatedPassword);
    */


        return axios.get(`${springBootAPIURL}/hello-world/path/${name}`/*, {
            headers: {
                authorization: basicAuthHeader
            }
        }*/);
    }
}

export default new HelloWorldService();