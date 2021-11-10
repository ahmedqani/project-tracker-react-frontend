import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {LoginType, loginUser, User} from "../redux/actions";
import {StoreState} from "../redux/reducers";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import axios from "axios";

interface UserHomeComponentProps {
    userLogin: User;
}

const _UserHomeComponent: React.FunctionComponent<UserHomeComponentProps> = props => {
    const [user_id, setUser_id] = useState(props.userLogin.user_id);
    const [username, setUsername] = useState(props.userLogin.username);
    const [password, setPassword] = useState(props.userLogin.password);
    const [email, setEmail] = useState(props.userLogin.email);
    const [firstname, setFirstname] = useState(props.userLogin.firstname);
    const [lastname, setLastname] = useState(props.userLogin.lastname);
    const [profpic, setProfpic] = useState(props.userLogin.profpic);
    const [userRole, setUserRole] = useState(props.userLogin.userRole);
    const [warning, setWarning] = useState("");

    const localDBUrl = `http://52.14.40.145:8080/api/users/update/`;

    const renderPic = (): string => {
        if (profpic == null || profpic === "") {
            return "https://ptracker-java-react.s3.us-east-2.amazonaws.com/images/profile.png";
        } else {
            return "https://ptracker-java-react.s3.us-east-2.amazonaws.com/images/" + profpic;
        }
    }
    useEffect(()=>{

    },[props.userLogin])

    const updateUser = async (e: any) => {
        e.preventDefault()
        let user: User = {
            user_id,
            email,
            firstname,
            lastname,
            password,
            profpic,
            userRole,
            username
        }
        let login :LoginType ={
            username,
            password
        }
        const resp = await axios.put<User>(localDBUrl+user_id, user);
        console.log(resp.data)
        if (resp.data.user_id !== 0) {
            loginUser(login);
            setWarning(resp.data.username + " Was Updated!! ")
        } else {
            setWarning("User Coulndt be Updated!! something went wrong!!!")
        }
    }

    // @ts-ignore
    return (

        <div  key={props.userLogin.user_id}>
            <div>
                <form onSubmit={updateUser}>
                    <h3>Update your information</h3>
                    <h2>{warning}</h2>
                    <div>
                        <img src={renderPic()} alt=""/>
                    </div>
                    <div className="form-group">
                        <label>User ID</label>
                        <input type="text" className="form-control"
                               value={user_id} name="user_id" disabled/>
                    </div>
                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" className="form-control" onChange={(e) => setFirstname(e.target.value)}
                               value={firstname} name="firstname" required/>
                    </div>
                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" className="form-control" placeholder="Last name" value={lastname}
                               onChange={(e) => setLastname(e.target.value)} name="lastname" required/>
                    </div>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="Username" value={username}
                               onChange={(e) => setUsername(e.target.value)} name="username" required/>
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" value={email}
                               onChange={(e) => setEmail(e.target.value)} name="email" required/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" value={password}
                               onChange={(e) => setPassword(e.target.value)} name="password" required/>
                    </div>

                    <div className="form-group">
                        <label>User Role</label>
                        <select className={"form-control"} name="userRole"
                                onChange={event =>{
                                    if (event.target.value === "ADMIN"){
                                        setUserRole("ADMIN");
                                    }
                                    if (event.target.value === "ADMIN"){
                                        setUserRole("USER")
                                    }
                                } } defaultValue={userRole}>
                            <option value="ADMIN">ADMIN</option>
                            <option value="USER">USER</option>
                        </select>
                    </div>
                    <br/>
                    <input type="submit" className="form-control btn btn-primary btn-block" value={"Update User"}/>
                </form>
            </div>
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