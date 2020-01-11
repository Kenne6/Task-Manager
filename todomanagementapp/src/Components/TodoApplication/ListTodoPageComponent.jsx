import React, {Component} from 'react';
import TodoDataService from '../../API/Todo/TodoDataService';
import AuthenticationService from './AuthenticationService';
import moment from 'moment';


//constructor - render - mount(state updated) - render


class ListTodoPageComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            todos: [
                {id: 1, description: "Learn React", hasCompleted: false, targetCompletionDate: new Date()},
                {id: 2, description: "Fitness", hasCompleted: false, targetCompletionDate: new Date()},
                {id: 3, description: "Study", hasCompleted: false, targetCompletionDate: new Date()}
           ],
            message: null  
        };
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
        this.retrievingdata = this.retrievingdata.bind(this);
        this.modifyTodoClicked = this.modifyTodoClicked.bind(this);
        this.createTodoClicked = this.createTodoClicked.bind(this);
    }

    //the page will load without waiting for the API call
    //will be called after contructor and render with initial state
    componentDidMount(){
        this.retrievingdata();
    }

    //deletes data from backend
    deleteTodoClicked(id){
        let user = AuthenticationService.getUsername();
        console.log(user,id);
        TodoDataService.deleteTodo(user,id)
        .then(
            response => {
                this.setState({message: `#${id} task has been deleted succesfully`});
                this.retrievingdata();
            }
        );
    }


    modifyTodoClicked(id){
       this.props.history.push(`/todo/modifydata/${id}`);
    }

    //this method will retrieve the data from the backend
    retrievingdata(){
        let user = AuthenticationService.getUsername();
        TodoDataService.retrieveAllTodoData(user)
        .then(
            response => {
                this.setState({todos: response.data})
            }
        );
    }

    createTodoClicked(){
        this.props.history.push(`/todo/modifydata/newTask`);
    }

    render(){
        return(
            <div>
                <h1>List Todos</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>description</th>
                                    <th>Done?</th>
                                    <th>Target Date to Complete</th>
                                    <th>Modify</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {
                                        this.state.todos.map(
                                            todo => 
                                                <tr key={todo.id}>
                                                    <td>{todo.id}</td>
                                                    <td>{todo.description}</td>
                                                    <td>{todo.hasCompleted.toString()}</td>
                                                    <td>{moment(todo.targetCompletionDate).add(1,'days').format('YYYY-MM-DD')}</td>
                                                    <td><button className="btn btn-success" onClick={() => this.modifyTodoClicked(todo.id)}>Update</button></td>
                                                    <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                                </tr> 
                                        )
                                    }     
                            </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.createTodoClicked}>Add a new task</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListTodoPageComponent;