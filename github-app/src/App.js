import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import Home from "./Container/Home";
import About from "./Container/About";
import Search from "./Container/Search";
import UserInfo from "./Container/UserInfo";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="navbar">
            <div className="logo-container">
              <img
                className="logo"
                src="https://download.logo.wine/logo/GitHub/GitHub-Logo.wine.png"
                alt=""
              />
              <h2>Github Finder</h2>
            </div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/About">About</Link>
                </li>
                <li>
                  <Link to="/Search">Search</Link>
                </li>
              </ul>
            </nav>
          </div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Search" component={Search} />
            <Route path="/User/" component={UserInfo} /> 
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
