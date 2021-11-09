import React, {useState} from 'react';
import {fetchAllUsers, loginUser, logoutUser, User} from "../redux/actions";
import {LoginType} from "../redux/actions";
import {StoreState} from "../redux/reducers";
import {connect} from "react-redux";
import axios from "axios";

interface AdminAllProjectsProps{
    users: User[];
    fetchAllUsers: Function;
}

const _AdminAllProject: React.FunctionComponent<AdminAllProjectsProps> = (props)=> {

    const localDBUrl = `http://localhost:8090/api/project/all/`;

    const renderPic = (user:User)  => {
        if (user.profpic == null){
            return "https://ptracker-java-react.s3.us-east-2.amazonaws.com/images/profile.png";
        }else {
            return "https://ptracker-java-react.s3.us-east-2.amazonaws.com/images/" + user.profpic;
        }
    }

    const renderAllProjects = () : JSX.Element[]=> {
        return props.users.map((user: User) => {
            return (
                <div key={user.user_id}>
                <div><img src={renderPic(user)} alt=""/></div>
            {user.username}<br/>
            {user.firstname}<br/>
            {user.lastname}<br/>
            {user.email}<br/>
            {user.userRole}<br/>
            </div>
        );
        });
    }
    const fetchAllProjects = async () => {
        const allProjects = await axios.get<User>(localDBUrl);

    }
    const  onClickFetchUsers = ():void => {
        props.fetchAllUsers();
    }

    return (
        <div>
            <button onClick={onClickFetchUsers}>FETCH USERS</button>
    {renderAllProjects()}
    </div>
);
}


const  mapStateToProps = ({users}: StoreState):{users : User[]} => {
    return {users}
}

export const AdminAllProjects = connect(
    mapStateToProps,
    {fetchAllUsers}
)(_AdminAllProject)
