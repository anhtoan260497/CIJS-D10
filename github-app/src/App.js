import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import Home from "./Container/Home";
import About from "./Container/About";
import Search from "./Container/Search";
import UserInfo from "./Container/UserInfo";
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      clickUser:""
    }
  }

  onClickUser = search =>{
   this.setState({clickUser:search})
  }
  render() {


    return (
      <BrowserRouter>
        <div>
          <div className="navbar">
            <Link  to="/" className="logo-container">
              <img
                className="logo"
                src="https://download.logo.wine/logo/GitHub/GitHub-Logo.wine.png"
                alt=""
              />
              <h2>Github Finder</h2>
            </Link>
            <nav>
              <ul>
                <li>
                  <Link className="home" to="/">Home</Link>
                </li>
                <li>
                  <Link  className="about" to="/About">About</Link>
                </li>
                <li>
                  <Link  className="search" to="/Search">Search</Link>
                </li>
              </ul>
            </nav>
          </div>
          <Switch>
          <Route path="/" exact render={(props) => <Home {...props} onClickUser={this.onClickUser}/>} />
            <Route path="/About" component={About} />
            <Route path="/Search" render={(props) => <Search {...props} onClickUser={this.onClickUser} />} />
            <Route path="/User/:login" render={(props) => <UserInfo {...props} clickUser={this.state.clickUser} />} /> 
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
