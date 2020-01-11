import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import FirstComponent from './Components/Practice/FirstComponent';
//import Counter from './Components/Counter/Counter';
import TodoApp from './Components/TodoApplication/TodoApp';
import './bootstrap.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Counter/>*/}
        <TodoApp/>
      </div>
    );
  }
}

/*function LearningPurpose (){
  return(
    <div className="learningPurpose">
      <FirstComponent></FirstComponent>   
    </div>
  );
}*/


export default App;
