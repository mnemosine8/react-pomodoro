import React from "react";
import propTypes from "prop-types";


export function Button(props)
{
    return(
        <button onClick={props.onClick} className={props.className}>
            {props.text}
            </button>
    )
}
