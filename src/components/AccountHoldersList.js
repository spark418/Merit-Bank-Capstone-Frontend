
import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label, Card } from 'reactstrap';



function AccountHoldersList() {


    const [account, setAccount] = useState([]);

    const ALL_ACCOUNTHOLDERS_URL = `http://localhost:8080/accountholders`;
    const bearer = 'Bearer ' + localStorage.getItem('token');

    const handleClick = async () => {

        console.log("entered function componentDidMount");
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
            .then((account) => console.log(account))

            .catch(err => console.log(err.message));
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">

                    <h3 className="text-center">To Get Account Holders List</h3>
                </div>
                <div className="col-md-5">
                    <span> <Button onClick={handleClick} className="btn btn-info">Click here</Button> </span>
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
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <td>AccountHolder Id</td>
                        <td>First Name</td>
                        <td>Middle Name</td>
                        <td>Last Name</td>

                        <td>SSN</td>
                        <td>Phone Number</td>
                        <td>Email</td>
                        <td>Address</td>
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

                                    <td>{ac.accountHolderContactDetails.phoneNum}</td>
                                    <td>{ac.accountHolderContactDetails.email}</td>
                                    <td>{ac.accountHolderContactDetails.address}</td>

                                </tr>
                        )}
                </tbody>
            </table>

        );
    }
    return <div />
}


export default AccountHoldersList;