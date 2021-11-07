import React, {Fragment} from 'react';

import classes from './Layout.module.css';
import MainNavigation from './MainHeader';

const Layout: React.FunctionComponent<{}> = (props) => {
    return (
        <Fragment>
            <MainNavigation/>
            <main className={classes.main}>{props.children}</main>
        </Fragment>
    );
};

export default Layout;