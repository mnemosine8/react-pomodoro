import React from 'react';
import PropTypes from 'prop-types';
import { useInterval } from '../hooks/UseInterval';
import { secondsToTime } from '../utils/seconds-to-time';
import { Timer } from '../Timer';
import './pomodoroTimer.css';
import { Button } from '../buttonsTimer';

export default function PomodoroTimer({defaultPomodoroTimer}){
const[mainTime,setMainTime] = React.useState(defaultPomodoroTimer);
const [timeCounting,setTimeCounting] = React.useState(false);
const [working,setWorking] = React.useState(false);

 useInterval(() => {
       setMainTime(mainTime - 1);
 },
 timeCounting ? 1000 : null,
 );
const configureWork = () =>{
      setTimeCounting(true);
      setWorking(working);
}               

   return (
         <div className="pomodoro">
           <div classname="timer">
               <h2>Focus</h2>
          <Timer mainTime = {mainTime}/></div>
          <div className = "buttonsTimer">
             <Button text = "start" onClick={()=> configureWork()}></Button></div>
         </div>
       
           
   )
}   

