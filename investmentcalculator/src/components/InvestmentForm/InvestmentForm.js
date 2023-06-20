import { useState } from 'react';
import classes from '../InvestmentForm/InvestmentForm.module.css';

const initialState = {
    'current-savings': 10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    duration: 10,
  };
function InvestmentForm(props) { 

    const [userInput,setUserInput] = useState(initialState);

    const submitHandler = (event) => {
        event.preventDefault();
        props.onCalculate(userInput);
    }

    const resetHandler = () => {
        setUserInput(initialState);
    }
    
    const inputChangeHandler = (input,value) => {
        setUserInput((prevInput) => {
            return {
              ...prevInput,
              [input]: +value,
            };
          });
    }
    return (
    <form className={classes.form} onSubmit={submitHandler}>
    <div className={classes['input-group']}>
      <p>
        <label htmlFor="current-savings">Current Savings ($)</label>
        <input type="number" id="current-savings" onChange={(event) =>
              inputChangeHandler('current-savings', event.target.value)} value={userInput['current-savings']}/>
      </p>
      <p>
        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
        <input type="number" id="yearly-contribution" onChange={(event) =>
              inputChangeHandler('yearly-contribution', event.target.value)} value={userInput['yearly-contribution']} /> 
      </p>
    </div>
    <div className={classes['input-group']}>
      <p>
        <label htmlFor="expected-return">
          Expected Interest (%, per year)
        </label>
        <input type="number" id="expected-return"  onChange={(event) =>
              inputChangeHandler('expected-return', event.target.value)}   value={userInput['expected-return']} />
      </p>
      <p>
        <label htmlFor="duration">Investment Duration (years)</label>
        <input type="number" id="duration" onChange={(event) =>
              inputChangeHandler('duration', event.target.value)}  value={userInput['duration']}/>
      </p>
    </div>
    <p className={classes.actions}>
      <button type="reset" className={classes.buttonAlt} onClick={resetHandler}>
        Reset
      </button>
      <button type="submit" className={classes.button}>
        Calculate
      </button>
    </p>
  </form>
    )
}

export default InvestmentForm;