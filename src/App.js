
import './App.css';
import {
  BrowserRouter as Router,//Renaming "BrowserRouter" as "Router"
    Switch,
    Route,
  } from "react-router-dom";


import Users from './Users';
import Header from './Header';
import NotFound from './NotFound';

export default function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route path="/users">
            <Users/>
          </Route>
          <Route path="/" exact>
            <h1>WELCOME TO HOMEPAGE!</h1>
          </Route>
          <Route component={NotFound}/>
          </Switch>
      </div>   
    </Router>   
  );
}

