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
    index: -1
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks, index} = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();
    if(tasks.indexOf(newTask) !== -1) return;
    const newTasks = [...tasks];
    if(index !== -1)
    {
      newTasks[index] = newTask;
      this.setState(
      {
        tasks: [...newTasks],
        newTask: ''
      });

    }
    else
    {
    this.setState(
      { tasks:[...newTasks,newTask],
        index: -1,
        newTask: '',
      });
    }

  }

handleChange = (e) => {
    this.setState({
      newTask:e.target.value
    });
  }

  handleEdit = (e,index) =>{
    const { tasks } = this.state;
    this.setState(
      {
          index,
          newTask: tasks[index],
      }
    )

  }
  handleDelete = (e,index) =>{
    const { tasks } = this.state;
    const newTasks = [...tasks];
    newTasks.splice(index,1);
    this.setState({
      tasks: [...newTasks],
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
            {tasks.map((task,index) =>(
              <li key={task}>
                {task}
                <div>
                <FaEdit onClick ={(e) => this.handleEdit(e, index)}
                        className="edit"/>
                <FaWindowClose
                  onClick = {this.handleDelete} className="delete"/></div>
                </li>
            ))}
          </ul>
        </div>
    );
  }
}
