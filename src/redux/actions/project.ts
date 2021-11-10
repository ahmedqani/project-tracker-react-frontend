import axios from "axios";
import {Dispatch} from "redux";
import {ActionTypes} from "./types";

//const urlApi = `http://52.14.40.145:8080/api/project/all` ;
const localDBUrl = `http://localhost:8090/api/project/all`;

export interface Project{
    project_id: number;
    project_name: string;
    start_project_date: string;
    end_project_date : string;
}
export interface FetchAllProjectsAction{
    type: ActionTypes.fetchaAllProjects;
    payload: Project[];
}

export const fetchAllProjects = () => {
    return async (dispatch: Dispatch) => {
        const resp = await axios.get<Project[]>(localDBUrl)
        dispatch<FetchAllProjectsAction>({
            type: ActionTypes.fetchaAllProjects,
            payload: resp.data
        })
    }
}