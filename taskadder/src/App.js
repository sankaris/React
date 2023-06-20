import React,{useState} from 'react';

/*import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';*/
import './App.css';
import DataAdder from './components/DataAdder/DataAdder';
import NameList from './components/DataAdder/NameList';

/*const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
      </section>
    </div>
  );
};*/

const App = () => {

  const [enteredName,setEnteredName] = useState('');

  const addNameHandler = (inputValue) => {
    setEnteredName(prevName => {
      return [
        ...prevName,
        {enteredName:inputValue,id:Math.random().toString()}
      ]
    })
  }

  let content = (
    <p style={{ textAlign: 'center' }}>No name found. Maybe add one?</p>
  );

  if (enteredName.length > 0) {
    content = (
      <NameList items={enteredName} />
    );
  }

   return (
      <div>
        <DataAdder  onAddName={addNameHandler} />
        <section> 
          {content}
        </section>
      </div>
   )
}

export default App;