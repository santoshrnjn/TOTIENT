import React from 'react';

import ToDoItem from "./components/ToDoItem";
import toDoData from "./toDoData";
  


class App extends React.Component {
  constructor(){
      super()
      this.state = {
          todos : toDoData
      }
      this.handleChange = this.handleChange.bind(this);
      
    }

    handleChange(id){
      this.setState(prevState =>{
        const updateTodos = prevState.todos.map(todo =>{
          if(todo.id === id){
            todo.completed = !todo.completed
          }
          return todo
        })
        return {
          todos:updateTodos
        }
      })
      console.log("changed "+ id);
    }
    
    render(){     
            const todoitem = this.state.todos.map(item => <ToDoItem key={item.id} item = {item} handleChange = {this.handleChange} />)
            return (                
              <div className= "todo-list">      
              {todoitem}
              </div>
            );
          }
  } 

 
export default App;
