import  React from 'react';
import Logout from "./LogOutComponent";

function User(){
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