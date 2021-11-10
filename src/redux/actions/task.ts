import axios from "axios";
import {Dispatch} from "redux";
import {ActionTypes} from "./types";

//const urlApi = `http://52.14.40.145:8080/api/project/all` ;
const localDBUrl = `http://localhost:8090/api/task/all`;

export interface Task{
    task_id: number;
    task_description: string;
    task_note: string;
    task_start_date: string;
    task_end_date : string;
}
export interface FetchAllTasksAction {
    type: ActionTypes.fetchaAllTasks;
    payload: Task[];
}

export const fetchAllTasks = () => {
    return async (dispatch: Dispatch) => {
        const resp = await axios.get<Task[]>(localDBUrl)
        dispatch<FetchAllTasksAction>({
            type: ActionTypes.fetchaAllTasks,
            payload: resp.data
        })
    }
}