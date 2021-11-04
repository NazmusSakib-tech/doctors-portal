import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
     <Router>
     <Switch>
          <Route path="/about">
            <Home />
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
