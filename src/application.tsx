import React from "react";
import {Route, Routes, Navigate, Link} from 'react-router-dom';
import Layout from "./component/layout/Layout";
import {Login} from "./component/Login";
import {Home} from "./pages/Home";
import {AllUsers} from "./component/AllUsers";
import {Signup} from "./component/Signup";


const Application: React.FunctionComponent<{}> = props => {

    return(
        <Layout>
            <Routes>
                <Route path='/' element={<Navigate replace to='/home' />} />
                <Route path='/login' element={<Login/>} />
                <Route path='/Users' element={<AllUsers />} />
                <Route path='/home' element={<Home />} />
                <Route path='/signup' element={<Signup />} />
                {/*<Route path='*' element={<NotFound />} />*/}
            </Routes>
        </Layout>
    );
}

export default Application;