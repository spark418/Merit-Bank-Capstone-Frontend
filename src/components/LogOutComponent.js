import React from 'react';
import {Button} from 'reactstrap';

function Logout(props) {
    
    const logout = () => {
        localStorage.clear();
        window.location.href = "/login";
    }
    return (
        <Button className="btn  btn-basic" onClick={logout}>Logout</Button>
    )

}
export default Logout;