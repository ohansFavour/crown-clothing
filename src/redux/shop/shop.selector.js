import {createSelector} from "reselect";

const getShop = (state)=> state.shop;

export const selectCollection= createSelector(
    [getShop],
    (item)=> item.collections
) 
export const selectCollectionArray = createSelector(
    [selectCollection],
    (collection)=> collection ? Object.keys(collection).map(item=> collection[item]) : null
)

export const selectSpecificCollection = (collectionId)=> createSelector(
 [selectCollection],
 (collection)=> collection ? collection[collectionId] : null
)