import React from 'react';
import {Switch , Route } from "react-router-dom";
import Homepage from "./pages/homePage/homepage.component";
import ShopPage from "./pages/shop/shopPage.component";
import SignInAndOut from "./pages/sign-in-and-sign-out/sign-in-and-sign-out.component";
import './App.css';
import Header from "./components/header/header.component";

function App() {
  return (
    <div className="App">
      <Header/>
     <Switch>
     <Route  exact path="/" component={Homepage}/>
     <Route  exact path="/shop" component={ShopPage}/>
     <Route  exact path="/signIn" component={SignInAndOut}/>
     </Switch>
    </div>
  );
}

export default App;
