import React from 'react';
import {Switch , Route } from "react-router-dom";
import Homepage from "./pages/homepage.component";
import './App.css';

function App() {
  return (
    <div className="App">
     <Switch>
     <Route  exact path="/" component={Homepage}/>
     <Route  exact path="/hats" component={Homepage}/>
     </Switch>
    </div>
  );
}

export default App;
