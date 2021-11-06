import axios from "axios";
import {Dispatch} from "redux";
import {ActionTypes} from "./types";
import {User} from "./users";

// const urlApi = `http://52.14.40.145:8080/api/users/all` ;
const localDBUrl = `http://localhost:8090/api/users/`;

export interface LoginUserAction{
    type: ActionTypes.login;
    payload: User;
}
export interface LogoutUserAction{
    type: ActionTypes.logout
}
export interface Login{
    username:string;
    password:string;
}

export const loginUser = (user:Login) => {
    return async (dispatch: Dispatch) => {
        const resp = await axios.post<User>(localDBUrl+"login",user)
        localStorage.setItem("currentUser", JSON.stringify(resp.data))
        console.log(localStorage.getItem("currentUser"))
        dispatch<LoginUserAction>({
            type: ActionTypes.login,
            payload: resp.data
        })
    }
}
export const logoutUser = () => {
    return (dispatch: Dispatch) => dispatch<LogoutUserAction>({
        type: ActionTypes.logout
    })
}