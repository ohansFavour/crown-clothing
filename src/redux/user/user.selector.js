import {createSelector} from "reselect";

const getUser= (state)=> state.user;

export const getCurrentUser= createSelector(
    [getUser],
    (user)=> user.currentUser
)