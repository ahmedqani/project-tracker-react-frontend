import React from 'react';
import PropTypes from 'prop-types';
import {User} from "../redux/actions";
import {StoreState} from "../redux/reducers";
import {connect} from "react-redux";

interface UserHomeComponentProps {
    userLogin: User;
}

const _UserHomeComponent: React.FunctionComponent<UserHomeComponentProps> = props => {


    const renderPic = (user:User)  :string=> {
        if (user.profpic == null || user.profpic === ""){
            return "https://ptracker-java-react.s3.us-east-2.amazonaws.com/images/profile.png";
        }else {
            return "https://ptracker-java-react.s3.us-east-2.amazonaws.com/images/" + user.profpic;
        }
    }

    return (

        <div key={props.userLogin.user_id}>
            <div><img src={renderPic(props.userLogin)} alt=""/></div>
            {props.userLogin.username}<br/>
            {props.userLogin.firstname}<br/>
            {props.userLogin.lastname}<br/>
            {props.userLogin.email}<br/>
            {props.userLogin.userRole}<br/>
        </div>
    );
}
const mapStateToProps = ({userLogin}: StoreState): { userLogin: User } => {
    return {userLogin}
}

export const UserHomeComponent = connect(
    mapStateToProps,
    {}
)(_UserHomeComponent)