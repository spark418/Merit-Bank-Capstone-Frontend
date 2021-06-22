
import React, { useState, useEffect } from 'react';
import {Breadcrumb,BreadcrumbItem } from 'reactstrap';
//import {baseUrl} from "../utils/constants";
import {Link} from 'react-router-dom';


export function AccountUsersList() {


    const [user, setUser] = useState([]);

    const ALL_USERS_URL = process.env.REACT_APP_API_ENDPOINT+"users";
    const bearer = 'Bearer ' + localStorage.getItem('token');

    useEffect(() => {
        handleClick()
      })
         

    const handleClick = async () => {

        //console.log("entered function componentDidMount");
        await fetch(ALL_USERS_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': bearer
            },
        })
            .then(res => res.json())
            .then(res => {
                setUser(res)
            })
           // .then((account) => console.log(account))

            .catch(err => console.log(err.message));
    }

    return (
        <div className="container ">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/admin">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Users</BreadcrumbItem>
                </Breadcrumb>

                <hr />
            </div>
            <div className="row">
                <div className="col-md-4">

                    <h3 className="text-center"> Users List</h3>
                </div>
                
                <div className="row mt-3">
                    <AccountsTable user={user} />
                </div>
            </div>
        </div>

    );
}

function AccountsTable({ user }) {
   // console.log("user:" + user)
    if (user == null) {
        return (
            <h3>No users to be displayed!</h3>
        )
    }
    if (user != null) {
        return (
            <table className="table table-hover table-responsive table-bordered">
                <thead style={{fontWeight:600}}>
                    <tr>
                        <td>User Id</td>
                        <td>Username</td>
                        
                    <td>Role</td>
                        
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map(
                            us =>
                                <tr key={us.id}>
                                    <td>{us.id}</td>
                                    <td>{us.userName}</td>
                                   
                                   
                                    <td>{us.roles}</td>

                                   
                                </tr>
                        )}
                </tbody>
            </table>

        );
    }
    return <div />
}






