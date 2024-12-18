import logo from './logo.svg';
import './App.scss';
import 'bulma'; 
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CandidateComponent from './components/pages/CandidateComponent';
import RegisterComponent from './components/pages/RegisterComponent';
import NavbarComponent from './components/header/NavbarComponent';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <NavbarComponent />
          <Switch>
            <Route path="/" exact component={CandidateComponent}/>
            <Route path="/register" component={RegisterComponent}/>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
