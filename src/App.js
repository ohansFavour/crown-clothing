import React from 'react';
import {Switch , Route } from "react-router-dom";
import Homepage from "./pages/homePage/homepage.component";
import ShopPage from "./pages/shop/shopPage.component";
import './App.css';

function App() {
  return (
    <div className="App">
     <Switch>
     <Route  exact path="/" component={Homepage}/>
     <Route  exact path="/shop" component={ShopPage}/>
     </Switch>
    </div>
  );
}

export default App;
