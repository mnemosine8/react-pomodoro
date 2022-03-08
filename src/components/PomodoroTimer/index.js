import React from 'react';
import PropTypes from 'prop-types';
import { useInterval } from '../hooks/UseInterval';
import { secondsToTime } from '../utils/seconds-to-time';
import { Timer } from '../Timer';
import './pomodoroTimer.css';
import { Button } from '../buttonsTimer';

export default function PomodoroTimer({defaultPomodoroTimer,longRestTime,shortRestTime}){
const[mainTime,setMainTime] = React.useState(defaultPomodoroTimer);
const [timeCounting,setTimeCounting] = React.useState(false);
const [working,setWorking] = React.useState(false);
const [resting,setResting] = React.useState(false);
const [long,setLong] = React.useState(false);

 useInterval(() => {
       setMainTime(mainTime - 1);
 },
 timeCounting ? 1000 : null,
 );
const configureWork = () =>{
      setTimeCounting(true);
      setResting(false);
      setWorking(true);
      
}               

const configureRest = () => {
      setTimeCounting(true);
      setWorking(false);
      setResting(true);
}


const configureReset = () =>{
     
      if(working) 
      {  
            setWorking(false);
            setTimeCounting(false);
            setMainTime(defaultPomodoroTimer);}

      else if(long)
            {
                  setMainTime(longRestTime)
            }
            else setMainTime(shortRestTime)
}



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

