import { useState } from 'react';
import React from 'react';
import '../App.css';

export const Todoinput = (props) => {
  const [inputText, setinputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(inputText);
    setinputText('');
  };

  return (
    <div className='input-container'>
        <input
          className='todo-input'
          type='text'
          placeholder='Enter your task here'
          value={inputText}
          onChange={(e) => {
            setinputText(e.target.value);
          }}
        />
        <button className='btn' onClick={handleSubmit}>
          Add Task
        </button>
        </div>
  );
};

