import React, { Component } from 'react'
import TodoList from './TodoList.js'
import TodoForm from './TodoForm.js'

class TodoApp extends Component {
  constructor(props){
    super(props)
    this.state = {
      input: '',
      active: [],
      complete: []
    }
    this.markComplete = this.markComplete.bind(this);
    this.addTask = this.addTask.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this); 
  }
  // move an active task to the list of complete tasks
  markComplete(event){
    event.preventDefault();
    let task = event.target.parentNode.textContent;
    console.log(event.target.parentNode)
    let activeList = [...this.state.active];
    console.log(activeList.indexOf(task));
    console.log(`task is ${task}`)
    activeList.splice(activeList.indexOf(task),1);
    let compList = [...this.state.complete, task];
    this.setState({
      active: activeList,
      complete: compList
    })
  }
  // add the input as a new active task and clear input
  addTask(e){
    e.preventDefault();
    let activeList;
    if(this.state.input){
      activeList = [...this.state.active, this.state.input]
      this.setState({
        active: activeList,
        input: ""
      })
    }

  }
  handleInputChange(event){
    this.setState({
      input: event.target.value
    })
  }

  render(){
    const text = this.state.input;
    return (
      <div className="Todo">
        <TodoForm value={text}
                  onChange={this.handleInputChange}
                  onSubmit={this.addTask} />
        <TodoList items={this.state.active} marked={this.markComplete}/>
      </div>
    );
  }
}

export default TodoApp
