import {User, ActionTypes, Action} from "../actions";

// @ts-ignore
let user :User = localStorage.getItem("currentUser");

export const loginReducer = (state:User = user, action: Action) => {
    switch (action.type) {
        case ActionTypes.login:
            return action.payload;
        case ActionTypes.logout:
            return state;
        default:
            return state;
    }
}