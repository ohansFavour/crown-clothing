import React from 'react';
import {Switch , Route , Redirect } from "react-router-dom";
import Homepage from "./pages/homePage/homepage.component";
import ShopPage from "./pages/shop/shopPage.component";
import SignInAndOut from "./pages/sign-in-and-sign-out/sign-in-and-sign-out.component";
import './App.css';
import Header from "./components/header/header.component";
import {auth, createUserProfile, addCollectionAndDocuments} from "./firebase/firebase.utils";
import {connect} from "react-redux";
import {userAction} from "./redux/user/user.actions";
import CartPage from "./pages/cart-page/cart-page.component";
import {selectCollectionArray} from "./redux/shop/shop.selector";

class App extends React.Component {
 
  unSubscribeFromAuth = null;
  componentDidMount(){
    const {setCurrentUser, collectionArray} = this.props;
    // The auth.onAuthStateChanged function returns an unsubscribe function
    // it is an open subscription
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{    // occurs so far there is a change in the authenticated users
     if(userAuth){
       const userRef= await createUserProfile(userAuth); // put user in database
       // onSnapshot is a listener, to check if there is any change in the userRef data
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
     // commented out, we want to upload once
    //addCollectionAndDocuments('collection',collectionArray.map(({items, title})=> ({items, title})));
  
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
     <Route  path="/shop" component={ShopPage}/>
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
const mapStateToProps = (state)=>({
  currentUser: state.user.currentUser,
  collectionArray: selectCollectionArray(state)
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
