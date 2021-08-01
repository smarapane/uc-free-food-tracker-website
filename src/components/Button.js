import React from 'react';
import '../App.css';

function Button(props) {
    return (
    <button
        className="Button"
        onClick={props.handleClick}>{props.action}
    </button>
    );
}

export default Button