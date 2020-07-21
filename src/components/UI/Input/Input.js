import React from 'react';
import classes from './Input.css';

const Input = (props) => {
    return (
        <input 
            className={classes.InputElement} 
            {...props.elementConfig} 
            value={props.value}
            onChange={props.changed}/>
    );
}

export default Input;