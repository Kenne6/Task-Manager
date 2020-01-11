import axios from 'axios';
import {springBootJPAURL} from '../../Constants'

class TodoDataService{
    retrieveAllTodoData(username){
        return axios.get(`${springBootJPAURL}/users/${username}/todos`);
    }
    deleteTodo(username,id){
        return axios.delete(`${springBootJPAURL}/users/${username}/todos/${id}`);
    }
    retrieveTodoBasedOnId(username, id){
        return axios.get(`${springBootJPAURL}/users/${username}/todos/modifydata/${id}`);
    }
    modifyTodoData(username, id, todo){
        return axios.put(`${springBootJPAURL}/users/${username}/todos/modifydata/${id}`, todo);
    }
    createTodoData(username, todo){
        return axios.post(`${springBootJPAURL}/users/${username}/todos`, todo);
    }
}

export default new TodoDataService();