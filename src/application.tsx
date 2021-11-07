import React from "react";
import {Route, Routes, Navigate, Link} from 'react-router-dom';
import Layout from "./component/layout/Layout";
import {Login} from "./component/Login";
import Home from "./pages/Home";


const Application: React.FunctionComponent<{}> = props => {

    return(
        <Layout>
            <Routes>
                <Route path='/' element={<Navigate replace to='/home' />} />
                <Route path='/login' element={<Login />} />
                <Route path='/home' element={<Home />} />
                {/*<Route path='*' element={<NotFound />} />*/}
            </Routes>
        </Layout>
    );
}

export default Application;