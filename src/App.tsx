import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, NavLink, HashRouter } from "react-router-dom";

const HeaderBar = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>部署项目</h1>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
};

const About = () => {
  return (
    <header className="App-header">
      <h1>About</h1>
    </header>
  );
};

function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavLink to="/">首页</NavLink>
        <NavLink to="/about">About</NavLink>
        <Switch>
          <Route exact path="/" component={HeaderBar}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
