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

const _Login: React.FunctionComponent<LoginProps> = ({
                                                         userLogin
                                                     })=> {
    const [username,setUsername] = useState<string>("")
    const [password,setPassword] = useState<string>("")


    const handleChangeUserName = (e: any):void => {
        setUsername(e.target.value)
    }
   const handleChangePassword = (e: any):void => {
       setPassword(e.target.value)
    }
    const handleSubmitLogin = (e: any):void => {
        e.preventDefault()
        let user:LoginType = {
            username,
            password
        }
        loginUser(user)
        console.log(userLogin)

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
