import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function ButtonLink(props) {
    return (
        <Link
            className="ButtonLink"
            to={props.route}>{props.action}
        </Link>
    );
}

export default ButtonLink