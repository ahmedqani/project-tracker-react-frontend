import {combineReducers} from "redux";
import {usersReducer} from "./users";
import {User} from "../actions";
import {loginReducer} from "./login";

export interface StoreState{
    users: User[]
    userLogin: User
}

export const reducers = combineReducers<StoreState>({
    users: usersReducer,
    userLogin: loginReducer
});