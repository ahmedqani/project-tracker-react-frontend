import {NavLink} from "react-router-dom";
import classes from './MainHeader.module.css';
import React from "react";

const MainHeader: React.FunctionComponent<{}> = props => {

    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink className={(navData) => (navData.isActive ? classes.active : '')} to='/home'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData) => (navData.isActive ? classes.active : '')} to='/login'>
                            Login
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
export default MainHeader;