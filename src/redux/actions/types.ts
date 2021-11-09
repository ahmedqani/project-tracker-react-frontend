import {FetchAllUsersAction} from "./users";
import {LoginUserAction, LogoutUserAction} from "./login";

export enum ActionTypes{
    fetchaAllUsers,
    login,
    logout,

}

export type Action = FetchAllUsersAction | LoginUserAction | LogoutUserAction ;
