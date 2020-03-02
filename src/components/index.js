import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Main from "./main/index";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
