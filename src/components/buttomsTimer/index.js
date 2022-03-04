import React from "react";
import propTypes from "prop-types";
import './buttomsTimer.css'

export function Button(props)
{
    return(
        <button onClick={props.onClick} className={props.className}>
            {props.text}
            </button>
    )
}