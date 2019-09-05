import {createSelector} from "reselect";

const getShop = (state)=> state.shop;

export const selectCollection= createSelector(
    [getShop],
    (item)=> item.collections
) 
export const selectCollectionArray = createSelector(
    [selectCollection],
    (collection)=> Object.keys(collection).map(item=> collection[item])
)

export const selectSpecificCollection = (collectionId)=> createSelector(
 [selectCollection],
 (collection)=> collection[collectionId]
)