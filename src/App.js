import React from "react";
// import logo from './logo.svg';
import "./App.css";
// import ToDo from "./app/todolist";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Categories from "./app/Jokes/Categories";
import Joke from "./app/Jokes/Joke";

function App() {
  return (
    <div className="overall">
      <img
        className="src"
        src="https://images.pexels.com/photos/255441/pexels-photo-255441.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        width="1000rem"
        alt=""
      ></img>
      <div className="App">
        <header className="App-header">
          <Categories />
        </header>
      </div>
    </div>
  );
}

function MainApp() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/jokes/:category" component={Joke} exact />
      </Switch>
    </Router>
  );
}

export default MainApp;
