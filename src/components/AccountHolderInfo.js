
import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label, Card } from 'reactstrap';



export function GetAccountHolder() {

    const [account, setAccount] = useState(null);
    const [accountHolderId, setAccountHolderId] = useState('');

    const GET_ACCOUNTHOLDER_URL = "http://localhost:8080/accountholder/{id}";
    const bearer = 'Bearer ' + localStorage.getItem('token');

    const handleSubmit = async (event) => {

        console.log("entered function componentDidMount");
        event.preventDefault();
        await fetch(GET_ACCOUNTHOLDER_URL.replace('{id}', accountHolderId), {
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
                    <Form onSubmit={handleSubmit}>
                        <FormGroup className="col-sm-5">
                            <Label for="accHolderid">Enter AccountHolder-Id</Label>
                            <Input type="accHolderid" name="accHolderid"
                                id="accHolderid" placeholder="AccountHolder-Id" value={accountHolderId}
                                onChange={ev => setAccountHolderId(ev.target.value)}></Input>
                        </FormGroup>

                        <FormGroup className="col-sm-5" >
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </FormGroup>
                    </Form>

                    {/* <h3 className="text-center">To Get Account Holders List</h3>
                </div>
                <div className="col-md-5">
                    <span> <Button onClick={handleClick} className="btn btn-info">Click here</Button> </span> */}
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
            <div>
                <table className="table table-striped table-bordered table-responsive">
                    <thead style={{fontWeight:600}}>
                        <tr>
                            <td>AccountHolder Id</td>
                            <td>First Name</td>
                            <td>Middle Name</td>
                            <td>Last Name</td>

                            <td>SSN</td>
                            <td>Phone Number</td>
                            <td>Email</td>
                            <td>Address</td>
                            
                            <td>Add New Account</td>
                            <td>Accounts List</td>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            <tr >
                                <td>{account.id}</td>
                                <td> {account.firstName}</td>
                                <td> {account.middleName}</td>
                                <td> {account.lastName}</td>
                                <td>{account.ssn}</td>


                                <td><Email account={account}/></td>
                                  <td><Address account={account}/></td>
                                  <td><Phonenum account={account}/></td>
                                
                                <td><a href="/addAccount" className="btn btn-dark fa fa-plus"></a></td>
                                <td><a href="/getAccount" className="btn btn-dark fa fa-list"></a></td>

                            </tr>
                        }
                    </tbody>
                    <thead style={{fontWeight:600}}>
                        <tr>
                            <td>Savings a/c </td>
                            <td>Personal Checking a/c</td>
                            <td>DBA Checking a/c</td>
                            <td>CD a/c</td>

                            <td>Regular IRA a/c</td>
                            <td>Roth IRA a/c</td>
                            <td>Rollover IRA a/c</td>
                            <td>Total Accounts</td>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            <tr >
                                <td>{account.numberOfSavingsAccounts}</td>
                                <td> {account.numberOfCheckingAccounts}</td>
                                <td> {account.numberOfDBACheckingAccounts}</td>
                                <td> {account.numberOfCDAccounts}</td>
                                <td>{account.numberOfRegularIRAAccounts}</td>
                                <td>{account.numberOfRothIRAAccounts}</td>
                                <td>{account.numberOfRolloverIRAAccounts}</td>
                                <td> {account.totalAccounts}</td>
                            </tr>
                        }
                    </tbody>
                    <thead style={{fontWeight:600}}>
                        <tr>
                            <td>Savings Balance $</td>
                            <td>Personal Checking Balance $</td>
                            <td>DBA Checking Balance $</td>
                            <td>CD Balance $</td>

                            <td>Regular IRA Balance $</td>
                            <td>Roth IRA Balance $</td>
                            <td>Rollover IRA Balance $</td>
                            <td>Combined Balance $</td>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            <tr >
                                <td>{account.savingsBalance}</td>
                                <td> {account.checkingBalance}</td>
                                <td> {account.dbacheckingBalance}</td>
                                <td> {account.cdbalance}</td>
                                <td>{account.regularIRABalance}</td>
                                <td>{account.rothIRABalance}</td>
                                <td>{account.rolloverIRABalance}</td>
                                <td>{account.combinedBalance}</td>
                            </tr>
                        }
                    </tbody>

                </table>
                
            
            </div >

        );
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


