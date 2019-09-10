import UPDATE_COLLECTION from "./shop.types";

const updateCollection = (collection)=>{
    return {
        type: UPDATE_COLLECTION,
        payload: collection
    }
}
export default updateCollection