import {NavLink} from "react-router-dom";
import classes from './MainHeader.module.css';
import React, {useEffect, useState} from "react";
import {loginUser, logoutUser, User} from "../../redux/actions";
import {StoreState} from "../../redux/reducers";
import {connect} from "react-redux";

interface MainHeaderProps {
    userLogin: User;
    logged: boolean;
    setLogged: any;
    logoutUser: Function;
}

const _MainHeader: React.FunctionComponent<MainHeaderProps> = props => {
    useEffect(() => {
        if (props.userLogin.user_id !== 0) {
            props.setLogged(true);
        }
    }, [props.userLogin])

    const onClickLogoutUser = () => {
        logoutUser();
        props.setLogged(false);

    }

    return (
        <header className={classes.header}>
            <nav> {console.log(props.logged)}
                <ul>
                    <li>{props.logged ?
                        <NavLink className={(navData) => (navData.isActive ? classes.active : '')} to='/home'>
                            Home
                        </NavLink> :
                        <NavLink className={(navData) => (navData.isActive ? classes.active : '')} to='/login'>
                            Login
                        </NavLink>}
                    </li>
                    {!props.logged ?
                        <li><NavLink className={(navData) => (navData.isActive ? classes.active : '')} to='/signup'>
                            SignUp
                        </NavLink>
                        </li>: ""}
                    <li>
                        <NavLink className={(navData) => (navData.isActive ? classes.active : '')} to='/users'>
                            All Users
                        </NavLink>
                    </li>
                    <li>{props.logged ? <NavLink className={(navData) => (navData.isActive ? classes.active : "")}
                                                 onClick={onClickLogoutUser} to={`/login`}>
                        Logout
                    </NavLink> : ""}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

const mapStateToProps = ({userLogin}: StoreState): { userLogin: User; } => {
    return {userLogin}
}

export const MainHeader = connect(
    mapStateToProps,
    {logoutUser}
)(_MainHeader)
