import React, {useState} from 'react';
import {loginUser, logoutUser, User} from "../redux/actions";
import {LoginType} from "../redux/actions";
import {StoreState} from "../redux/reducers";
import {connect, Selector} from "react-redux";

interface LoginProps{
    userLogin: User;
    loginUser: Function;
    logoutUser: Function
}

const _Login: React.FunctionComponent<LoginProps> = (props)=> {
    const [username,setUsername] = useState<string>("")
    const [password,setPassword] = useState<string>("")


    const handleChangeUserName = (e: any):void => {
        setUsername(e.target.value)
    }
   const handleChangePassword = (e: any):void => {
       setPassword(e.target.value)
    }
    let handleSubmitLogin = (e: any): void => {
        e.preventDefault()
        let user: LoginType = {
            username,
            password
        }
        props.loginUser(user)
        console.log(props.loginUser(user))

    }
    return (
        <div>
            <form onSubmit={handleSubmitLogin}>
                <label>
                    UserName:
                    <input type="text" value={username} onChange={handleChangeUserName} />
                </label>
                <label>
                    UserName:
                    <input type="text" value={password} onChange={handleChangePassword} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}


const  mapStateToProps = ({userLogin}: StoreState):{userLogin : User} => {
    return {userLogin}
}

export const Login = connect(
    mapStateToProps,
    {logoutUser,loginUser}
)(_Login)
