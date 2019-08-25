import React from 'react';
import {Switch , Route } from "react-router-dom";
import Homepage from "./pages/homePage/homepage.component";
import ShopPage from "./pages/shop/shopPage.component";
import SignInAndOut from "./pages/sign-in-and-sign-out/sign-in-and-sign-out.component";
import './App.css';
import Header from "./components/header/header.component";
import {auth, createUserProfile} from "./firebase/firebase.utils";
import {connect} from "react-redux";
import {userAction} from "./redux/user/user.actions"

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
     setCurrentUser(userAuth)
    })
  
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth(); // stop continuous check
  }
  render(){
     return (
    <div className="App">
      <Header />
     <Switch>
     <Route  exact path="/" component={Homepage}/>
     <Route  exact path="/shop" component={ShopPage}/>
     <Route  exact path="/signIn" component={SignInAndOut}/>
     </Switch>
    </div>
  )
}
}
const mapDispatchToProps=(dispatch) => ({
 setCurrentUser: user => dispatch( userAction(user) )
});
export default connect(null, mapDispatchToProps)(App);
