import React  from "react";
import {Route, Switch} from "react-router-dom";
import CollectionPage  from "../../components/collection/collection.component";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Checkout from "../cart-page/cart-page.component";

const ShopPage= ({match})=>(

            <div className="shop-page">
              <Switch>
              <Route exact path={`${match.path}`} component={CollectionOverview} />
              <Route exact path={`${match.path}/checkout`} component={Checkout} />
              <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
              </Switch>
            </div>
        )

export default ShopPage;