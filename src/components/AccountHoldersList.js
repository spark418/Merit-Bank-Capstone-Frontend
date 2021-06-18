
import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Input, Label, Card } from 'reactstrap';



function AccountHoldersList() {


    const [account, setAccount] = useState([]);

    const ALL_ACCOUNTHOLDERS_URL = `http://localhost:8080/accountholders`;
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
        <div className="container mt-5">
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
    console.log("account:" + account)
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
                        <td>AccountHolder Id</td>
                        <td>First Name</td>
                        <td>Middle Name</td>
                        <td>Last Name</td>
                        <td>SSN</td>
                        
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
                                    <td>{ac.id}</td>
                                    <td> {ac.firstName}</td>
                                    <td> {ac.middleName}</td>
                                    <td> {ac.lastName}</td>
                                    <td>{ac.ssn}</td>

                                   
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
