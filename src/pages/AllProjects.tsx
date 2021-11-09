import React, {Fragment, useEffect, useRef, useState} from 'react';
import {StoreState} from "../redux/reducers";
import {connect} from "react-redux";
import {UserHomeComponent} from "../component/UserHomeComponent";
import {loginUser, logoutUser,User} from "../redux/actions";
import SideBar from "../component/layout/SideBar";
import classes from "../component/layout/Layout.module.css";



interface AllProjectsProps{
    userLogin: User;
}

const _AllProjects: React.FunctionComponent<AllProjectsProps> = props => {
    useEffect(() => {
    },[])

    return (
        <div>
            <SideBar/>
            <section className={classes.sideBarContent}>
                <p>ALL PROJECTS GO HERE!!!</p>
            </section>

        </div>
    );
}
const  mapStateToProps = ({userLogin}: StoreState):{userLogin : User;} => {
    return {userLogin}
}

export const AllProjects = connect(
    mapStateToProps,
    {logoutUser,loginUser}
)(_AllProjects)