import React from "react";
import propTypes from "prop-types";
import { secondsToTime } from "../utils/seconds-to-time";

export function Timer(props)
{
    return <div className="timer">
       <div className="messageTimer">{props.messageTimer}</div> 
        <div className="clock">{secondsToTime(props.mainTime)}</div></div>
}
