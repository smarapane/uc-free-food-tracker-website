import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Button(props) {
    return (
    <Link
        className="Button"
        to={props.route}>{props.action}
    </Link>
    );
}

export default Button