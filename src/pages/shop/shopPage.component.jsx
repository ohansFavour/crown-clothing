import React  from "react";
import {Route, Switch} from "react-router-dom";
import CollectionPage  from "../../components/collection/collection.component";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Checkout from "../cart-page/cart-page.component";
import {firestore, convertCollectionSnapshotToMap} from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import updateCollection from "../../redux/shop/shop.actions";
import{ withSpinner} from "../../components/with-spinner/with-spinner.component";

class ShopPage extends React.Component{
  state = {
    isLoading: true
  }
 unsubscribeFromSnapshot = null;
 
 
 componentDidMount(){
  const {updateCollection}= this.props;
   const collectionRef = firestore.collection(`collection`);
   collectionRef.get().then(collectionSnapshot=>{
    const collection = convertCollectionSnapshotToMap(collectionSnapshot);
      updateCollection(collection); 
      this.setState({
        isLoading: false
      })    
   })
   
   
 }
render(){
 const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
 const CollectionPageWithSpinner = withSpinner(CollectionPage);
 const {match} = this.props;
 const {isLoading} = this.state;
  return(

            <div className="shop-page">
              <Switch>
              <Route exact path={`${match.path}`} render={(props)=> <CollectionOverviewWithSpinner {...props} isLoading= {isLoading}/>} />
              <Route exact path={`${match.path}/checkout`} component={Checkout} />
              <Route  path={`${match.path}/:collectionId`} render={(props)=> <CollectionPageWithSpinner {...props} isLoading= {isLoading}/>} />
              </Switch>
            </div>
        )
      }
    }
const mapDispatchToProps = (dispatch) =>({
  updateCollection: (collection)=> dispatch(updateCollection(collection))
})
export default connect(null,mapDispatchToProps)(ShopPage);