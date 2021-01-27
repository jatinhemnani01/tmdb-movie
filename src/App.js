import "./App.css";
import Movies from "./Movies";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";

import Home from "./Home";
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/movies" component={Movies} exact />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}
