import React, { Component } from 'react'

function Logout(props) {
    
    const logout = () => {
        localStorage.clear();
        window.location.href = "/login";
    }
    return (
        <button onClick={logout}>Logout</button>
    )

}
export default Logout;