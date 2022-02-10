import React, { Component} from 'react';
//form
import {FaPlus} from 'react-icons/fa';
//tasks
import {FaEdit,FaWindowClose} from 'react-icons/fa';
import './Main.css'

export default class Main extends Component{
  state = {
    newTask:'',
    tasks: [
      'fazer cafe',
      'beber agua',
      'estudar'
    ]
  };


handleChange = (e) => {
    this.setState({
      newTask:e.target.value
    });
  }


  render(){
    const {newTask,tasks} = this.state;

    return (
        <div className="Main">
          <h1>Tasks</h1>

          <form action = "#" className="form">
            <input onChange={this.handleChange}
              type = "text"
              value={newTask}/>
            <button type = "submit">
              <FaPlus />
            </button>
          </form>
          <ul className="tasks">
            {tasks.map(task =>(
              <li key={task}>
                {task}
                <div>
                <FaEdit/>
                <FaWindowClose/></div>

                </li>


            ))}
          </ul>
        </div>
    );
  }
}
