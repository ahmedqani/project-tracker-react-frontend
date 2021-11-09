import React, {Component, useState} from "react";
import {loginUser, logoutUser, User} from "../redux/actions";
import {StoreState} from "../redux/reducers";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import axios from "axios";


interface SignupProps {
    userLogin: User;
}

const _Signup: React.FunctionComponent<SignupProps> = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [warning, setWarning] = useState("");

    const localDBUrl = `http://localhost:8090/api/users/save`;
    const signUpUser = async (e: any) => {
        e.preventDefault()
        let user: User = {
            user_id: 0,
            email,
            firstname,
            lastname,
            password,
            profpic: "",
            userRole: "USER",
            username
        }
        const resp = await axios.post<User>(localDBUrl, user);
        if (resp.data.user_id !== 0) {
            setWarning(resp.data.username + " Was Created You May Login Now")
        } else {
            setWarning("User Coulndt be Created something went wrong!!!")
        }
    }

    return (
        <div>
            <form onSubmit={signUpUser}>
                <h3>Sign Up</h3>
                <h2>{warning}</h2>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" onChange={(e) => setFirstname(e.target.value)}
                           placeholder="First name" name="firstname" required/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name"
                           onChange={(e) => setLastname(e.target.value)} name="lastname" required/>
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Username"
                           onChange={(e) => setUsername(e.target.value)} name="username" required/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email"
                           onChange={(e) => setEmail(e.target.value)} name="email" required/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"
                           onChange={(e) => setPassword(e.target.value)} name="password" required/>
                </div>
                <br/>
                <input type="submit" className="form-control btn btn-primary btn-block" value={"Sign up"}/>
                <p className="forgot-password text-right">
                    Already registered <NavLink to={"/login"}>sign in?</NavLink>
                </p>
            </form>
        </div>
    );
}

const mapStateToProps = ({userLogin}: StoreState): { userLogin: User } => {
    return {userLogin}
}

export const Signup = connect(
    mapStateToProps,
    {}
)(_Signup)