import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation.componennt";
import { Provider } from "mobx-react";
import Home from "./components/styles/home";
import HomePage from "./Home";

function App() {
  return (
    <div className="app">

        <Router>
          <HomePage />
        </Router>
    </div>
  );
}

export default App;
