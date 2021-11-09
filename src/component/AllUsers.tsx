import React, {useState} from 'react';
import {fetchAllUsers, loginUser, logoutUser, User} from "../redux/actions";
import {LoginType} from "../redux/actions";
import {StoreState} from "../redux/reducers";
import {connect} from "react-redux";

interface AllUsersProps{
    users: User[];
    fetchAllUsers: Function;
}

const _AllUsers: React.FunctionComponent<AllUsersProps> = (props)=> {

    const renderPic = (user:User)  => {
        if (user.profpic == null){
            return "https://ptracker-java-react.s3.us-east-2.amazonaws.com/images/profile.png";
        }else {
            return "https://ptracker-java-react.s3.us-east-2.amazonaws.com/images/" + user.profpic;
        }
    }

    const renderUsers = () : JSX.Element[]=> {
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
    const  onClickFetchUsers = ():void => {
        props.fetchAllUsers();
    }

    return (
        <div>
            <button onClick={onClickFetchUsers}>FETCH USERS</button>
            {renderUsers()}
        </div>
    );
}


const  mapStateToProps = ({users}: StoreState):{users : User[]} => {
    return {users}
}

export const AllUsers = connect(
    mapStateToProps,
    {fetchAllUsers}
)(_AllUsers)
