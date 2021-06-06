import  React from 'react';
import Logout from "./LogOutComponent";

function Admin(){
    return(
        <div>
            <div className="col-md-8">
            Welcome Admin!!
            </div>
            <div className="col-md-4">
            <Logout/>
            </div>
        </div>
    );
}

export default Admin;