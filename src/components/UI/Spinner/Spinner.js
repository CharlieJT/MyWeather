import React from 'react';
import classes from './Spinner.css';

const spinner = (props) => (
    <div style={{ fontSize: `${props.fontSize}` }} className={classes.Loader}>Loading...</div>
);

export default spinner;
