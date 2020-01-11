import React, {Component} from 'react';
import moment from 'moment';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import TodoDataService from '../../API/Todo/TodoDataService';
import AuthenticationService from './AuthenticationService';

class ModifyDataPageComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.match.params.id,
            description: 'Enter description here',
            targetCompletionDate: moment(new Date()).format('YYYY-MM-DD')
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.validation = this.validation.bind(this);
    }

    componentDidMount(){
        if(this.state.id === "newTask"){
            return;
        }
        let user = AuthenticationService.getUsername();
        TodoDataService.retrieveTodoBasedOnId(user, this.state.id)
        .then(response => {
            this.setState({
                description: response.data.description,
                targetCompletionDate: moment(response.data.targetCompletionDate).format('YYYY-MM-DD')
            })
        })
    }

    //events for clicking submit button
    onSubmit(values){
        let user = AuthenticationService.getUsername();
        if(this.state.id === "newTask"){
            TodoDataService.createTodoData(user, {
                description: values.description,
                targetCompletionDate: values.targetCompletionDate
            }).then(
                () => this.props.history.push("/todo")
            )
        }
        else{
            TodoDataService.modifyTodoData(user, this.state.id, {
                id: this.state.id,
                description: values.description,
                targetCompletionDate: values.targetCompletionDate
            }).then(
                () => this.props.history.push("/todo")
            )
        }
    }

    //validating the entries for description and date
    validation(values){
        let errors = {};
        if(!values.description){
            errors.description = "Enter a description, can't be blank"
        }
        else if(values.description.length < 6){
            errors.description = "at least 6 characters are required"
        }

        if(!moment(values.targetCompletionDate).isValid()){
            errors.targetCompletionDate = "Date entered is not valid"
        }
        return errors;
    }

    render(){
        //destructure the this.state object
        let {description,targetCompletionDate} = this.state;
        return(
            <div>
                <h1>Todo</h1>
                <div className="container">
                    <Formik initialValues={
                        {
                            description,
                            targetCompletionDate
                        }
                    }
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validation}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                                    <ErrorMessage name="targetCompletionDate" component="div" className="alert alert-warning"/>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetCompletionDate"/>
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        );
    }

}

export default ModifyDataPageComponent;