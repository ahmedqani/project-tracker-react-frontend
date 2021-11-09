import React, {useEffect} from 'react';
import {StoreState} from "../redux/reducers";
import {connect} from "react-redux";
import {UserHomeComponent} from "../component/UserHomeComponent";
import {loginUser, logoutUser,User} from "../redux/actions";

interface HomeProps{
    userLogin: User;
}

const _Home: React.FunctionComponent<HomeProps> = props => {
    useEffect(() => {

    },[props.userLogin.user_id])
    return (

        <div>{console.log(props)}
             <UserHomeComponent />
        </div>
    );
}
const  mapStateToProps = ({userLogin}: StoreState):{userLogin : User;} => {
    return {userLogin}
}

export const Home = connect(
    mapStateToProps,
    {logoutUser,loginUser}
)(_Home)