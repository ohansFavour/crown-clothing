import {staticData} from "./static-directory-data"
const INITIAL_STATE= staticData;
    

  const directoryReducer = (state=INITIAL_STATE, action)=>{
      switch (action.type){
          default:
              return state
      }
  }
  export default directoryReducer;