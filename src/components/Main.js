import React, { Component} from 'react';
//form
import {FaPlus} from 'react-icons/fa';
//tasks
import {FaEdit,FaWindowClose} from 'react-icons/fa';
import './Main.css'

export default class Main extends Component{
  state = {
    newTask:'',
    tasks: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks} = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();
    if(tasks.indexOf(newTask) !== -1) return;

    const newTasks = [...tasks];
    this.setState(
      {tasks:[...newTasks,newTask]})
  }

handleChange = (e) => {
    this.setState({
      newTask:e.target.value
    });
  }

  render(){
    const { newTask, tasks } = this.state;

    return (
        <div className="Main">
          <h1>Tasks</h1>
          <form onSubmit={this.handleSubmit} action="#" className = "form">
            <input onChange={this.handleChange}
              type = "text"
              value={newTask}/>
            <button type = "submit">
              <FaPlus />
            </button>
          </form>
          <ul className="tasks">
            {tasks.map((task) =>(
              <li key={task}>
                {task}
                <div>
                <FaEdit className="edit"/>
                <FaWindowClose className="delete"/></div>
                </li>
            ))}
          </ul>
        </div>
    );
  }
}
