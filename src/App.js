import React, { Component } from 'react';
import Date from './Components/Date';
import TodoForm from './Components/TodoForm';

class App extends Component {
  render() {
      return (
          <div className="App">
               <h1> Todo...</h1>
              <Date/>
              <TodoForm/>
          </div>
    );
  }
}

export default App;
