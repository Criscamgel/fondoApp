import React, {Fragment} from 'react';
import AppBar from '@material-ui/core/AppBar'
import BarSession from './bar/BarSession';

function AppNavbar() {
        return ( 
            <Fragment>
                <AppBar position="static">
                    <BarSession/>
                </AppBar>
            </Fragment>
         );
}
 
export default AppNavbar;