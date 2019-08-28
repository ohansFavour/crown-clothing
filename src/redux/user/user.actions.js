import {userActionTypes} from "../user/user.types"
export const userAction = (user)=>({
    type: userActionTypes().SET_CURRENT_USER,
    payload: user
})