import React, {useEffect, useState} from 'react';
import {fetchAllProjects, fetchAllTasks, Project, Task, User} from "../redux/actions";
import {StoreState} from "../redux/reducers";
import {connect} from "react-redux";
import {Card, Button, CardGroup, Row, Col} from 'react-bootstrap';
import classes from "../component/layout/Layout.module.css";
import axios from "axios";
import DatePicker from "react-datepicker";


interface AdminAllTasksProps{
    users: User[];
    task: Task[];
    fetchAllTasks: Function;
}

const _AdminAllTasks: React.FunctionComponent<AdminAllTasksProps> = (props)=> {

    const [task_id, setTask_id] = useState(0);
    const [task_description, setTask_description] = useState("");
    const [task_note, setTask_note] = useState("");
    const [task_start_date, setTask_start_date] = useState(new Date());
    const [task_end_date, setTask_end_date] = useState(new Date());
    const [warning, setWarning] = useState("");

    const localDBUrl = `http://localhost:8090/api/project/update/`;

    useEffect(()=>{

    },[task_note])


    let temp: any = {
        task_id,
        task_description,
        task_note,
        task_start_date,
        task_end_date
    }


    const updateTask = async (e: Task|any) => {
        e.preventDefault()
        setTask_id(e.task_id)
        let task: any = {
            task_id,
            task_description,
            task_note,
            task_start_date,
            task_end_date
        }
        const resp = await axios.put<Task>(localDBUrl+task_id, task);
        console.log(resp.data)
        if (resp.data.task_id !== 0) {
            setWarning(resp.data.task_description + " Was Updated!! ")
        } else {
            setWarning("Task Couldn't be Updated!! something went wrong!!!")
        }
    }
    const setTaskToUpdateState = (task:any) =>{
        setTask_id(task.task_id);
        setTask_description(task.task_description);
        setTask_note(task.task_note);
        // @ts-ignore
        setTask_start_date(Date.parse(project.start_project_date));
        // @ts-ignore
        setTask_end_date(Date.parse(project.end_project_date));
    }


    const renderUpdateTaskForm = () : JSX.Element => {
        console.log("Update Task Form Called!!")
        return (
            <div  key={task_id}>
                <div>
                    <form onSubmit={updateTask}>
                        <h3>Update Task!</h3>
                        <h2>{warning}</h2>
                        <div className="form-group">
                            <label>Project ID</label>
                            <input type="text" className="form-control"
                                   value={task_id} name="task_id" disabled/>
                        </div>
                        <div className="form-group">
                            <label>Task Description</label>
                            <input type="text" className="form-control" onChange={(e) => setTask_description(e.target.value)}
                                   value={task_description} name="task_description" required/>
                        </div>
                        <div className="form-group">
                            <label>Task Notes</label>
                            <input type="text" className="form-control" onChange={(e) => setTask_note(e.target.value)}
                                   value={task_note} name="task_note" required/>
                        </div>
                        <div className="form-group">
                            <label>Start Date</label>
                            <DatePicker
                                closeOnScroll={true}
                                selected={task_start_date}
                                onChange={(date:Date) => setTask_start_date(date)}
                            />
                        </div>
                        <div className="form-group">
                            <label>End Date</label>
                            <DatePicker
                                closeOnScroll={true}
                                selected={task_end_date}
                                onChange={(date:Date) => setTask_end_date(date)}
                            />
                        </div>
                        <br/>
                        <input type="submit" className="form-control btn btn-primary btn-block" value={"Update Project"}/>
                    </form>
                </div>
            </div>

        )
    }

    const renderTasks = () : JSX.Element[]=> {
        return props.task.map((task: Task) => {
            // @ts-ignore
            return (
                <Col>
                    <Card key={task.task_id} style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{task.task_description}</Card.Title>
                            <Card.Subtitle>{task.task_note}</Card.Subtitle>
                            <Card.Text>
                                Task Start :{task.task_start_date}
                                <br/>
                                Task End Date: {task.task_end_date}
                            </Card.Text>
                            <Button onClick={ ()=> setTaskToUpdateState(task)} variant="primary" >Update Task</Button>
                        </Card.Body>
                    </Card>
                </Col>
            );
        });
    }
    const onClickFetchTasks = ():void => {
        props.fetchAllTasks();
    }

    return (
        <div className={classes.sideBarContent}>
            <button onClick={onClickFetchTasks}>FETCH All Tasks</button>
            {renderUpdateTaskForm()}
            <CardGroup>
                <Row xs={2} md={"auto"} lg={"auto"} className="g-4">
                    {renderTasks()}
                </Row>
            </CardGroup>
        </div>
    );
}


const  mapStateToProps = ({users, task}: StoreState):{users : User[]; task : Task[]} => {
    return {users, task}
}

export const AdminAllTasks = connect(
    mapStateToProps,
    {fetchAllTasks}
)(_AdminAllTasks)
