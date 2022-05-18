import React, { useState } from 'react';
import styled from 'styled-components'
import Button from '../../UI/Button/Button';
import './CourseInput.css';


const div = styled.div`
width: 100px;
height: 100px;
margin: 0.5rem;
`

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true)

  const goalInputChangeHandler = event => {
    const value = event.target.value;
    if (value.trim().length > 0) {
      setIsValid(true)
    }
    setEnteredValue(value);
  };

  const formSubmitHandler = event => {
    
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('')
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        {!isValid && (
        <p style = {{color: 'red', position: 'absolute', top: '100px', }}>
          Enter some value!
          </p>
          )}
        <label style = {{color: !isValid ? 'red' : 'black'}}>Course Goal</label>
        <input value={enteredValue}
        style = {{borderColor: !isValid ? 'red' : 'black',
        background: !isValid ? 'salmon' : 'transparent'
      }} 
        type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
