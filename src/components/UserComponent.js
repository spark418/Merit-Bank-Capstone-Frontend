import  React from 'react';
import Logout from "./LogoutComponent";
import { NavLink, Redirect } from 'react-router-dom';

function User({authorized}) {
    if(authorized==null) {
        return <Redirect to="/login" />
    }
    return(
        <div>
        <div className="col-md-8">
        Welcome User!!
        </div>
        <div className="col-md-4">
        <Logout/>
        </div>
    </div>
    );
}

export default User;