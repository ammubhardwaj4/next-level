import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Layout from "./components/Layout";
import adminPage from "./page/adminPage";
import userPage from "./page/userPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Layout} />
            <Route  path="/admin" component={adminPage} />
            <Route  path="/user" component={userPage} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
