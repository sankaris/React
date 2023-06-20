//import logo from './logo.svg';
import React from 'react';
import './App.css';
import UserInput from './components/UserInput';
/*import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';
import FocusInput from './components/FocusInput';
import ClassTimer from './components/ClassTimer';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';*/
//import DataFetching from './components/DataFetching';
//import DataFetchingTwo from './components/DataFetchingTwo';
//import CounterThree from './components/CounterThree';
//import CounterOne from './components/CounterOne';
//import CounterTwo from './components/CounterTwo';
//import EffectCounter from './components/EffectCounter';
//import HookCounterFour from './components/HookCounterFour';
//import HookCounterThree from './components/HookCounterThree';
//import HookCounter from './components/HookCounter';
//import HookCounterTwo from './components/HookCounterTwo';
//import Postlist from './components/PostList';
//import PostForm from './components/PostForm';
//import CustomCounterOne from './components/CustomCounterOne';
//import CustomCounterTwo from './components/CustomCounterTwo';

/*export const CountContext = React.createContext()

const initialState = 0

const reducer = (state,action) => {
    switch(action) { 
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}*/

function App() {
 // const [count,dispatch] = useReducer(reducer,initialState)
  return (
   // <CountContext.Provider value = {{countState : count , countDispatch : dispatch}}>
    <div className="App">
       {/*<Postlist /> 
       <PostForm /> 
       <HookCounter /> 
       <HookCounterTwo />
       <HookCounterThree />
       <HookCounterFour />
       <EffectCounter />
       <CounterOne />
       <CounterTwo />
       <CounterThree />
        <div> Count - {count} </div>
       <ComponentA />
       <ComponentB />
       <ComponentC />
       <DataFetching />
  <DataFetchingTwo />
       <FocusInput />
       <ClassTimer />
       <DocTitleOne />
       <DocTitleTwo />
       <CustomCounterOne />
       <CustomCounterTwo />*/}
       <UserInput />
    </div>

  );
}

export default App;
