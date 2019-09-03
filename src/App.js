import React from 'react';
import {Switch , Route , Redirect } from "react-router-dom";
import Homepage from "./pages/homePage/homepage.component";
import ShopPage from "./pages/shop/shopPage.component";
import SignInAndOut from "./pages/sign-in-and-sign-out/sign-in-and-sign-out.component";
import './App.css';
import Header from "./components/header/header.component";
import {auth, createUserProfile} from "./firebase/firebase.utils";
import {connect} from "react-redux";
import {userAction} from "./redux/user/user.actions";
import CartPage from "./pages/cart-page/cart-page.component";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      currentUser: null
    }
  }
  unSubscribeFromAuth = null;
  componentDidMount(){
    const {setCurrentUser} = this.props;
    // The auth.onAuthStateChanged function returns an unsubscribe function
    // it is an open subscription
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{    // occurs so far there is a change in the authenticated users
     if(userAuth){
       const userRef= await createUserProfile(userAuth); // put user in database
       userRef.onSnapshot(snapShot=>{
       setCurrentUser({
             id: snapShot.id,
             ...snapShot.data()   
         })
       })
     }
     else
     {setCurrentUser(userAuth)}
    })
  
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth(); // stop continuous check
  }
  render(){
     return (
    <div className="App">
      <Header currentUser={this.props.currentUser}/>
     <Switch>
     <Route  exact path="/" component={Homepage}/>
     <Route   path="/shop" component={ShopPage}/>
     <Route  exact path="/checkout" component={CartPage}/>
     <Route  exact path="/signIn" render={() => this.props.currentUser ? (<Redirect to = "/"  />) : (<SignInAndOut/>)} />
     {/*
    since component is not included in the render method, you have to use <Component/>
    */}
     {/* render is used to selectively display a content in the Route
     Redirect as it is named just redirects to "/" */}
     </Switch>
    </div>
  )
}
}
const mapDispatchToProps=(dispatch) => ({
 setCurrentUser: user => dispatch( userAction(user) )
});
const mapStateToProps = ({user})=>({
  currentUser: user.currentUser
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
