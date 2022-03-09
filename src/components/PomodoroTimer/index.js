import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useInterval } from '../hooks/UseInterval';
import { secondsToTime } from '../utils/seconds-to-time';
import { Timer } from '../Timer';
import './pomodoroTimer.css';
import { Button } from '../buttonsTimer';


const bellStart = require ('../sounds/src_sounds_bell-start.mp3');
const bellFinish = require ('../sounds/src_sounds_bell-finish.mp3');
const audioStartWorking = new Audio(bellStart);
const audioStopWorking = new Audio(bellFinish);
export default function PomodoroTimer({defaultPomodoroTimer,longRestTime,shortRestTime,cycles}){
const[mainTime,setMainTime] = React.useState(defaultPomodoroTimer);
const [timeCounting,setTimeCounting] = React.useState(false);
const [working,setWorking] = React.useState(false);
const [resting,setResting] = React.useState(false);
const [long,setLong] = React.useState(false);
const[cyclesQtdManager,setCyclesQtdManager] = React.useState(new Array(cycles-1).fill(true));


 useInterval(() => {
       setMainTime(mainTime - 1);
 },
 timeCounting ? 1000 : null,
 );
const configureWork = () =>{
      setTimeCounting(true);
      setWorking(true);
      setResting(false);
      setMainTime(defaultPomodoroTimer);
      audioStartWorking.play();
      
}               

const configureRest = () => {
      setTimeCounting(true);
      setWorking(false);
      setResting(true);
      if(long)
            {
             setMainTime(longRestTime);
            }
            else setMainTime(shortRestTime);
      audioStopWorking.play();
}


const configureReset = () =>{
     
      if(working) 
      {  
            setWorking(false);
            setTimeCounting(false);
            setMainTime(defaultPomodoroTimer);}

      else {
            setResting(false);
            if(long)
            {
                  setMainTime(longRestTime)
            }
            else setMainTime(shortRestTime)
      }
     
}

useEffect(()=>{
      if(working) document.body.classList.add('working');
      if(resting) document.body.classList.remove('working');

      if (mainTime > 0) return; 
      if(working &&  cyclesQtdManager.length > 0){
            setLong(false);
            configureRest();
            cyclesQtdManager.pop();   
      }
      else if(working && cyclesQtdManager.length <= 0)
      {
            setLong(true);
            configureRest();
            setCyclesQtdManager(new Array(cycles - 1).fill(true));
           
      }
      if(resting)
      {
           console.log('aqui');
            configureWork();
      } 
  

},[working,resting,mainTime,cycles,configureRest,setCyclesQtdManager,configureWork]);



   return (
         <div className="pomodoro">
           <div classname="timer">
               <h2>Focus</h2>
          <Timer mainTime = {mainTime}/></div>
          <div className = "buttonsTimer">
             <Button text = "start" onClick={()=> configureWork()}></Button>
             <Button text = "pause" onClick={()=> setTimeCounting(false)}></Button>
             <Button text = "reset" onClick={()=> configureReset()}></Button>
         </div>
         </div>
       
           
   )
}   

