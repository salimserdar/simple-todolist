import React, { Component } from 'react';
import Todos from './Todos'

class Apps extends Component {

  state = {
    todos: [
      {id: 1, content: 'have a breakfast!!!'},
      {id: 2, content: 'homework!!!'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos:  todos
    })
  }

  render() { 
    
    return ( 
      <div className="todo-app container">
        <h1 className="center red-text">Toodo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}
 
export default Apps;