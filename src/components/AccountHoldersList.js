
import React, { useState, useEffect } from 'react';
import { Breadcrumb,BreadcrumbItem } from 'reactstrap';
//import {baseUrl} from "../utils/constants";
import {Link} from 'react-router-dom';


function AccountHoldersList() {


    const [account, setAccount] = useState([]);

    const ALL_ACCOUNTHOLDERS_URL = process.env.REACT_APP_API_ENDPOINT+"accountholders";
    const bearer = 'Bearer ' + localStorage.getItem('token');

    useEffect(() => {
        handleClick()
      })
         

    const handleClick = async () => {

        //console.log("entered function componentDidMount");
        await fetch(ALL_ACCOUNTHOLDERS_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': bearer
            },
        })
            .then(res => res.json())
            .then(res => {
                setAccount(res)
            })
           // .then((account) => console.log(account))

            .catch(err => console.log(err.message));
    }

    return (
        <div className="container ">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/admin">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>AccountHolders</BreadcrumbItem>
                </Breadcrumb>

                <hr />
            </div>
            <div className="row">
                <div className="col-md-6">

                    <h3 className="text-center"> Account Holders List</h3>
                </div>
                
                <div className="row mt-3">
                    <AccountsTable account={account} />
                </div>
            </div>
        </div>

    );
}

function AccountsTable({ account }) {
   // console.log("account:" + account)
    if (account == null) {
        return (
            <h3>No accounts to be displayed!</h3>
        )
    }
    if (account != null) {
        return (
            <table className="table table-hover table-responsive table-bordered">
                <thead style={{fontWeight:600}}>
                    <tr>
                        <td>User Id</td>
                        <td>Username</td>
                        {/* <td>Middle Name</td>
                        <td>Last Name</td> */}
                        <td>AccountHolder Id</td>
                        <td>First Name</td>
                        <td>Middle Name</td>
                        <td>Last Name</td>
                        <td>SSN</td>
                        
                        <td>Contact Id</td>
                        <td>Email</td>
                        <td>Address</td>
                        <td>Phone Number</td>

                        <td>Add New Account</td>
                        <td>Accounts List</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        account.map(
                            ac =>
                                <tr key={ac.id}>
                                    <td>{ac.user.id}</td>
                                    <td>{ac.user.userName}</td>
                                    <td>{ac.id}</td>
                                    <td> {ac.firstName}</td>
                                    <td> {ac.middleName}</td>
                                    <td> {ac.lastName}</td>
                                    <td>{ac.ssn}</td>

                                  <td><ContactId account={ac}/></td>
                                  <td><Email account={ac}/></td>
                                  <td><Address account={ac}/></td>
                                  <td><Phonenum account={ac}/></td>
                                    
                                    <td><a href="/addAccount" className="btn btn-dark fa fa-plus"></a></td>
                                    <td><a href="/getAccount" className="btn btn-dark fa fa-list"></a></td>
                                </tr>
                        )}
                </tbody>
            </table>

        );
    }
    return <div />
}


export default AccountHoldersList;

function ContactId({ account }) {
    if (account.accountHolderContactDetails != null) {
        return (<div>{account.accountHolderContactDetails.id}</div>)
    }
    return <div />
}

function Phonenum({ account }) {
    if (account.accountHolderContactDetails != null) {
        return (<div>{account.accountHolderContactDetails.phoneNum}</div>)
    }
    return <div />
}

function Email({ account }) {
    if (account.accountHolderContactDetails != null) {
        return ( <div>{account.accountHolderContactDetails.email}</div>)
    }
    return <div />
}

function Address({ account }) {
    if (account.accountHolderContactDetails != null) {
        return ( <div>{account.accountHolderContactDetails.address}</div>)
    }
    return <div />
}
