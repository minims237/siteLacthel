import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Admin from "../Adminss";
import MainNavigation from "../MainNavigation";
import Home from "./styles/home";
import Login from "./styles/login";

class Navigation extends Component {
  render() {
    return (
      <Switch>
         <Route path="/main" component={() => <MainNavigation />} />
        <Route path="/login" exact component={() => <Login  />} />
        <Route path="/admin" exact component={() => <Admin  />} />
        <Route path="/" exact component={() => <Home  />} />
       
      </Switch>
    );
  }
}
export default Navigation;
