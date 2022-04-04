import React, {useEffect,useState, Component} from 'react';
//form
import {FaPlus} from 'react-icons/fa';
//tasks
import './Main.css'
import Form from './Form';
import Tasks from './Tasks';
import PomodoroTimer from './PomodoroTimer';
import configureWork from './PomodoroTimer';         
import { Button} from './buttonsTimer';
import api from '../axios';
import Users from './Users';
import axios from 'axios';
export default class Main extends Component{
  state = {
    newTask:'',
    tasks: [],
    index: -1
  };
  componentDidMount(){
  
      api.get("/tasks")
      .then((response) => this.setState({tasks: response.data}))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
      //eslint-disable-next-line react-hooks/exhaustive-deps 
  }

  componentDidUpdate(prevProps, prevState){
    const {tasks} = this.state;
    if(tasks === prevState.tasks) return;
    localStorage.setItem('tasks',JSON.stringify(tasks));

  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks, index} = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();
    const newTasks =[...tasks];
    
    if(index === -1)
    {
      api
      .post(("/tasks"), {
        description: newTask,
      })
      .then((response) => {
       
        this.setState({
          tasks: [...newTasks,response.data],
          index: -1,
          newTask: ''
          });
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
    api.delete('/tasks/'+ tasks[index].id);
  }



  

  render(){
    const { newTask, tasks } = this.state;

    return (
      
      <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Users/>
      <div className="container">
      <img src={require('./logo.png')} ></img>
      <PomodoroTimer
          defaultPomodoroTimer = {12300} 
          shortRestTime = {300}
          longRestTime={12300}
          cycles = {4}
       
       />
      </div>
       <div className="Main">
          <h1>Tasks</h1>
          <Form
            handleSubmit = {this.handleSubmit}
            handleChange = {this.handleChange}
            newTask = {newTask}
          />
          <Tasks
            handleEdit = {this.handleEdit}
            handleDelete = {this.handleDelete}
            tasks = {tasks}
          />
    

        </div> </div>
    );
  }
}
