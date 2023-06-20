//import logo from './logo.svg';
import './App.css';

/*import PortalRoot from './components/PortalRoot';
import FocusInput from './components/FocusInput';
import RefsDemo from './components/RefsDemo';
import ListRendering from './components/ListRendering';
import PersonList from './components/PersonList';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Count from './components/Count';
import ParentComponent from './components/ParentComponent';
import Form from './components/Form'
import FragmentDemo from './components/FragmentDemo';
import Tables from './components/Tables';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';*/
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

function App() {
  return (
    <div className="App">
      {/*<Greet name ="Alice" lastName="Bob">
        <p> This is children</p>
      </Greet>
      <Greet name ="Annie" lastName="John" />
      <Welcome name ="Alice" lastName="Bob" />
      <Welcome name ="Annie" lastName="John" />
      <Message />
      <Count />
      <ParentComponent />
      <PersonList />
      <ListRendering />
      <Form /> 
      <FragmentDemo />
      <Tables /> 
      <RefsDemo />
      <FocusInput />
      <PortalRoot />
      <ErrorBoundary>
      <Hero heroName="BatMan"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="SuperMan"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="Joker"></Hero>
      </ErrorBoundary>
      <ClickCounter name="Siva"/>
      <HoverCounter />*/}
      <UserProvider value="Siva">
          <ComponentC />
      </UserProvider>
        </div>
  );
}

export default App;
