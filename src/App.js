import React from 'react';
import {Switch , Route } from "react-router-dom";
import Homepage from "./pages/homePage/homepage.component";
import ShopPage from "./pages/shop/shopPage.component";
import SignInAndOut from "./pages/sign-in-and-sign-out/sign-in-and-sign-out.component";
import './App.css';
import Header from "./components/header/header.component";
import {auth} from "./firebase/firebase.utils";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      currentUser: null
    }
  }
  unSubscribeFromAuth = null;
  componentDidMount(){
    // The auth.onAuthStateChanged function returns an unsubscribe function
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user=>{
      this.setState({
        currentUser: user
      })
    })
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render(){
     return (
    <div className="App">
      <Header currentUser={this.state.currentUser}/>
     <Switch>
     <Route  exact path="/" component={Homepage}/>
     <Route  exact path="/shop" component={ShopPage}/>
     <Route  exact path="/signIn" component={SignInAndOut}/>
     </Switch>
    </div>
  )
}
}

export default App;
