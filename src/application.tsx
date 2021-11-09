import React from "react";
import {Route, Routes, Navigate} from 'react-router-dom';
import Layout from "./component/layout/Layout";
import {Login} from "./component/Login";
import {Home} from "./pages/Home";
import {AdminAllUsers} from "./pages/AdminAllUsers";
import {Signup} from "./component/Signup";
import "./application.css"
import {AllProjects} from "./pages/AllProjects";
import {UserTasks} from "./pages/UserTasks";
import {NewProject} from "./pages/NewProject";
import {NewTask} from "./pages/NewTask";
import {EditProject} from "./pages/EditProject";
import {EditTask} from "./pages/EditTask";
import {AdminAllProjects} from "./pages/AdminAllProjects";

const Application: React.FunctionComponent<{}> = props => {

    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Navigate replace to='/login'/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/admin_all_users' element={<AdminAllUsers/>}/>
                <Route path='/admin_all_projects' element={<AdminAllProjects/>}/>
                <Route path={"/user_projects"} element={<AllProjects/>}/>
                <Route path={"/user_tasks"} element={<UserTasks/>}/>
                <Route path={"/new_project"} element={<NewProject/>}/>
                <Route path={"/new_task"} element={<NewTask/>}/>
                <Route path={"/edit_project"} element={<EditProject/>}/>
                <Route path={"/edit_task"} element={<EditTask/>}/>
                {/*<Route path='*' element={<NotFound />} />*/}
            </Routes>
        </Layout>
    );
}

export default Application;