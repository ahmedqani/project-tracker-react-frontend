import axios from "axios";
import {Dispatch} from "redux";
import {ActionTypes} from "./types";

const urlApi = `http://52.14.40.145:8080/api/users/all` ;
const localDBUrl = `http://localhost:8090/api/users/all`;

export interface User{
    user_id: number;
    email: string;
    firstname: string;
    lastname : string;
    password : string;
    profpic  : string;
    userRole: string;
    username : string;
}
export interface FetchAllUsersAction{
    type: ActionTypes.fetchaAllUsers;
    payload: User[];
}

export const fetchAllUsers = () => {
    return async (dispatch: Dispatch) => {
        const resp = await axios.get<User[]>(localDBUrl)
        dispatch<FetchAllUsersAction>({
            type: ActionTypes.fetchaAllUsers,
            payload: resp.data
        })
    }
}