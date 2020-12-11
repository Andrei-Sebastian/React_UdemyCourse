import React from 'react';
import './Person.css'

const person = (props) => {
return (
    <div className='Person'>    
        <p>I am a {props.name} and I am {props.age} years old.</p>
        <p>{props.children}</p>
        <input type='text' onChange={props.changed} value={props.name}></input>
        <button onClick={props.click}>Delete person</button>
    </div>
)
};

export default person;