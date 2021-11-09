import React, {Fragment, useEffect, useRef, useState} from 'react';
import {StoreState} from "../redux/reducers";
import {connect} from "react-redux";
import {loginUser, logoutUser,User} from "../redux/actions";
import SideBar from "../component/layout/SideBar";
import classes from "../component/layout/Layout.module.css";



interface NewProjectProps{
    userLogin: User;
}

const _NewProject: React.FunctionComponent<NewProjectProps> = props => {
    useEffect(() => {
    },[])

    return (
        <div>
            <SideBar/>
            <section className={classes.sideBarContent}>
                <p>NEW PROJECT FORM GOES HERE!!!</p>
            </section>

        </div>
    );
}
const  mapStateToProps = ({userLogin}: StoreState):{userLogin : User;} => {
    return {userLogin}
}

export const NewProject = connect(
    mapStateToProps,
    {logoutUser,loginUser}
)(_NewProject)