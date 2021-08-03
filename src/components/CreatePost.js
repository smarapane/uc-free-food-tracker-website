import React from 'react';
import Form from './Form';
import Button from './Button';
import '../App.css';

class CreatePost extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          value:""};
    }

    render() {
        return (
            <div>
                <div className="Questions">
                    <Form/>
                </div>
            </div>
        );
    }

    submitResponse() {

    }
}

export default CreatePost