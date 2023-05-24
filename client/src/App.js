import React from 'react';
import './App.css';
import Create from './views/create/Create';
import Detail from './views/detail/Detail';
import Home from './views/home/Home';
import { Route, Switch } from "react-router-dom"
import Landing from './views/landing/Landing';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="/create" component={Create} />
      </Switch>
    </div>
  );
}

export default App;
