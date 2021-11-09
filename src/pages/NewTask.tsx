import React, {Fragment, useEffect, useRef, useState} from 'react';
import {StoreState} from "../redux/reducers";
import {connect} from "react-redux";
import {loginUser, logoutUser,User} from "../redux/actions";
import SideBar from "../component/layout/SideBar";
import classes from "../component/layout/Layout.module.css";



interface NewTaskProps{
    userLogin: User;
}

const _NewTask: React.FunctionComponent<NewTaskProps> = props => {
    useEffect(() => {
    },[])

    return (
        <div>
            <SideBar/>
            <section className={classes.sideBarContent}>
                <p>NEW TASK FORM GOES HERE!!!</p>
            </section>

        </div>
    );
}
const  mapStateToProps = ({userLogin}: StoreState):{userLogin : User;} => {
    return {userLogin}
}

export const NewTask = connect(
    mapStateToProps,
    {logoutUser,loginUser}
)(_NewTask)