import React from 'react';
import PropTypes from 'prop-types';
import { useInterval } from '../hooks/UseInterval';
import { secondsToTime } from '../utils/seconds-to-time';
import { Timer } from '../Timer';
import './pomodoroTimer.css'
export default  function PomodoroTimer({defaultPomodoroTimer}){
const[mainTime,setMainTime] = React.useState(defaultPomodoroTimer);
 useInterval(() => {
       setMainTime(mainTime - 1);
 },1000);

   return (
         <div className="pomodoro">
               
               <h2>Focus</h2>
          <Timer mainTime = {mainTime}/>
         </div>
   )
}