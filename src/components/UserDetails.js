
import React, { useState, useEffect } from 'react';
//import { Button, Form, FormGroup, Input, Label, Card,table } from 'reactstrap';
//import {baseUrl} from "../utils/constants";
import { Link } from 'react-router-dom';

export function UserDetails() {


    const [account, setAccount] = useState(null);
    //const [accountHolderId, setAccountHolderId] = useState('');

    const GET_ACCOUNTHOLDER_URL = process.env.REACT_APP_API_ENDPOINT+"Me";
    const bearer = 'Bearer ' + localStorage.getItem('token');

    useEffect(() => {
        handleSubmit()
    })
    const handleSubmit = async () => {

      //  console.log("entered function componentDidMount");

        await fetch(GET_ACCOUNTHOLDER_URL, {
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
            //.then((account) => console.log(account))

            .catch(err => console.log(err.message));
    }

    return (
        <div className="container mt-2">
            <div className="row">
                
                    <AccountsTable account={account} />
               
            </div>
        </div>

    );
}

function AccountsTable({ account }) {

   // console.log("account:" + account)
    if (account === null) {
        return (
            <h3>Accounts to be displayed!</h3>
        )
    }
    if (account != null) {
        return (
            <div>
                <div className="row">
                <h3 className="col-md-12 text-center mb-3"> Your Account Details</h3>
                    <table className="table table-striped table-bordered table-responsive table-hover">
                        <thead style={{ fontWeight: 600 }}>
                            <tr>
                                <td>User Id</td>
                                <td>AccountHolder Id</td>
                                <td>First Name</td>
                                <td>Middle Name</td>
                                <td>Last Name</td>

                                <td>SSN</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                <tr >
                                    <td>{account.user.id}</td>
                                    
                                    <td>{account.id}</td>
                                    <td> {account.firstName}</td>
                                    <td> {account.middleName}</td>
                                    <td> {account.lastName}</td>
                                    <td>{account.ssn}</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                    
                    <ContactDetails account={account} />
                   
                </div>
                

                <PersonalCheckingAccountsTable account={account} />
                <DBACheckingAccountsTable account={account} />    
                <SavingsAccountsTable account={account}/>
                <CDAccountsTable account={account} />
                <RolloverIRAAccountsTable account={account} />
                <RegularIRAAccountsTable account={account}/>
                <RothIRAAccountsTable account={account}/>

            </div >
        );
    }

    function ContactDetails({ account }) {
        if (account.accountHolderContactDetails != null) {
            return (
                <table className="table table-striped table-bordered table-responsive">
                    <thead style={{ fontWeight: 600 }}>
                        <tr>
                            <td>Contact Id</td>
                            <td>Phone Number</td>
                            <td>Email</td>
                            <td>Address</td>
                        </tr>
                    </thead>
                    <tbody>
                        <td>{account.accountHolderContactDetails.id}</td>
                        <td>{account.accountHolderContactDetails.phoneNum}</td>
                        <td>{account.accountHolderContactDetails.email}</td>
                        <td>{account.accountHolderContactDetails.address}</td>
                    </tbody>
                </table>
            )
        }
        return <div />
    }

    function PersonalCheckingAccountsTable({ account }) {
        if (account.checkingAccountList !== "" ) {
            return (
                <div>
                    <a href="/userPersonalCheckingGetTransaction"> <h5 className="col-md-12">{account.numberOfCheckingAccounts} Personal Checking Account</h5></a>
                    <table className="table table-striped table-bordered table-responsive">

                        <thead style={{ fontWeight: 600 }}>
                            <tr>
                                <td>Account Num #</td>
                                <td>Balance $</td>
                                <td>Interest Rate</td>
                                <td>Opening Date</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (account.checkingAccountList).map(ch =>
                                    <tr key={ch.accountNumber} >
                                        <td>{ch.accountNumber}</td>
                                        <td> {ch.balance}</td>
                                        <td> {ch.interestRate}</td>
                                        <td> {ch.openingDate.substring(0, 10)} at {ch.openingDate.substring(11, 19)}</td>
                                    </tr>

                                )}
                        </tbody>
                        <thead style={{ fontWeight: 600 }}>
                            <tr>
                                <td>Total Balance</td>
                                <td>{account.checkingBalance}</td>
                            </tr>
                        </thead>
                    </table>
                </div >
            );
        }
        return <div />
    }

    function DBACheckingAccountsTable({ account }) {
        if (account.dbaCheckingAccountList != "") {
            return (
                <div>
                   <a href="/userDBACheckingGetTransaction"> <h5 className="col-md-9"> {account.numberOfDBACheckingAccounts} DBA Checking Account</h5></a>
                    <table className="table table-striped table-bordered table-responsive">

                        <thead style={{ fontWeight: 600 }}>
                            <tr>
                                <td>Account Num #</td>
                                <td>Balance $</td>
                                <td>Interest Rate</td>
                                <td>Opening Date</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (account.dbaCheckingAccountList).map(ch =>
                                    <tr key={ch.accountNumber} >
                                        <td>{ch.accountNumber}</td>
                                        <td> {ch.balance}</td>
                                        <td> {ch.interestRate}</td>
                                        <td> {ch.openingDate.substring(0, 10)} at {ch.openingDate.substring(11, 19)}</td>
                                    </tr>
                                )}
                        </tbody>
                        <thead style={{ fontWeight: 600 }}>
                            <tr>
                                <td>Total Balance</td>
                                <td>{account.dbacheckingBalance}</td>
                            </tr>
                        </thead>
                    </table>
                </div >
            );
        }
        return <div />
    }

    function SavingsAccountsTable({ account }) {
        if (account.savingsAccountList != "") {
            return (
                <div>
                   <a href="/userSavingsGetTransaction">  <h5 className="col-md-12">{account.numberOfSavingsAccounts} Savings Account</h5></a>
                    <table className="table table-striped table-bordered table-responsive">

                        <thead style={{ fontWeight: 600 }}>
                            <tr>
                                <td>Account Num #</td>
                                <td>Balance $</td>
                                <td>Interest Rate</td>
                                <td>Opening Date</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (account.savingsAccountList).map(ch =>
                                    <tr key={ch.accountNumber} >
                                        <td>{ch.accountNumber}</td>
                                        <td> {ch.balance}</td>
                                        <td> {ch.interestRate}</td>
                                        <td> {ch.openingDate.substring(0, 10)} at {ch.openingDate.substring(11, 19)}</td>
                                    </tr>

                                )}
                        </tbody>
                        <thead style={{ fontWeight: 600 }}>
                            <tr>
                                <td>Total Balance</td>
                                <td>{account.savingsBalance}</td>
                            </tr>
                        </thead>
                    </table>
                </div >
            );
        }
        return <div />
    }

    function CDAccountsTable({ account }) {
        if (account.cdAccList != "") {
            return (
                <div>
            <a href="/userCDGetTransaction"> <h5 className="col-md-9"> {account.numberOfCDAccounts} CD Account</h5></a>       
                    <table className="table table-striped table-bordered table-responsive">

                        <thead style={{ fontWeight: 600 }}>
                            <tr>
                                <td>Account Num #</td>
                                <td>Balance $</td>
                                <td>Interest Rate</td>
                                <td>Opening Date</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (account.cdAccList).map(ch =>
                                    <tr key={ch.accountNumber} >
                                        <td>{ch.accountNumber}</td>
                                        <td> {ch.balance}</td>
                                        <td> {ch.interestRate}</td>
                                        <td> {ch.openingDate.substring(0, 10)} at {ch.openingDate.substring(11, 19)}</td>
                                    </tr>
                                )}
                        </tbody>
                        <thead style={{ fontWeight: 600 }}>
                            <tr>
                                <td>Total Balance</td>
                                <td>{account.cdbalance}</td>
                            </tr>
                        </thead>
                    </table>
                </div >
            );
        }
        return <div />
    }

    function RolloverIRAAccountsTable({ account }) {
        if (account.rolloverIRAAccountList != "") {
            return (
                <div>
                   <a href="/userRolloverIRAGetTransaction"> <h5 className="col-md-12">{account.numberOfRolloverIRAAccounts} Rollover IRA Account</h5></a>
                    <table className="table table-striped table-bordered table-responsive">

                        <thead style={{ fontWeight: 600 }}>
                            <tr>
                                <td>Account Num #</td>
                                <td>Balance $</td>
                                <td>Interest Rate</td>
                                <td>Opening Date</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (account.rolloverIRAAccountList).map(ch =>
                                    <tr key={ch.accountNumber} >
                                        <td>{ch.accountNumber}</td>
                                        <td> {ch.balance}</td>
                                        <td> {ch.interestRate}</td>
                                        <td> {ch.openingDate.substring(0, 10)} at {ch.openingDate.substring(11, 19)}</td>
                                    </tr>

                                )}
                        </tbody>
                        <thead style={{ fontWeight: 600 }}>
                            <tr>
                                <td>Total Balance</td>
                                <td>{account.rolloverIRABalance}</td>
                            </tr>
                        </thead>
                    </table>
                </div >
            );
        }
        return <div />
    }

    function RegularIRAAccountsTable({ account }) {
        if (account.regularIRAAccountList != "") {
            return (
                <div>
                <a href="/userRegularIRAGetTransaction">    <h5 className="col-md-12">{account.numberOfRegularIRAAccounts} Regular IRA Account</h5></a>
                    <table className="table table-striped table-bordered table-responsive">

                        <thead style={{ fontWeight: 600 }}>
                            <tr>
                                <td>Account Num #</td>
                                <td>Balance $</td>
                                <td>Interest Rate</td>
                                <td>Opening Date</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (account.regularIRAAccountList).map(ch =>
                                    <tr key={ch.accountNumber} >
                                        <td>{ch.accountNumber}</td>
                                        <td> {ch.balance}</td>
                                        <td> {ch.interestRate}</td>
                                        <td> {ch.openingDate.substring(0, 10)} at {ch.openingDate.substring(11, 19)}</td>
                                    </tr>

                                )}
                        </tbody>
                        <thead style={{ fontWeight: 600 }}>
                            <tr>
                                <td>Total Balance</td>
                                <td>{account.regularIRABalance}</td>
                            </tr>
                        </thead>
                    </table>
                </div >
            );
        }
        return <div />
    }

    function RothIRAAccountsTable ({ account }) {
        if (account.rothIRAAccountList != "") {
            return (
                <div>
               <a href="/userRothIRAGetTransaction">    <h5 className="col-md-12">{account.numberOfRothIRAAccounts} Roth IRA Account</h5></a> 
                    <table className="table table-striped table-bordered table-responsive">

                        <thead style={{ fontWeight: 600 }}>
                            <tr>
                                <td>Account Num #</td>
                                <td>Balance $</td>
                                <td>Interest Rate</td>
                                <td>Opening Date</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (account.rothIRAAccountList).map(ch =>
                                    <tr key={ch.accountNumber} >
                                        <td>{ch.accountNumber}</td>
                                        <td> {ch.balance}</td>
                                        <td> {ch.interestRate}</td>
                                        <td> {ch.openingDate.substring(0, 10)} at {ch.openingDate.substring(11, 19)}</td>
                                    </tr>

                                )}
                        </tbody>
                        <thead style={{ fontWeight: 600 }}>
                            <tr>
                                <td>Total Balance</td>
                                <td>{account.rothIRABalance}</td>
                            </tr>
                        </thead>
                    </table>
                </div >
            );
        }
        return <div />
    }

}  


{/*  <table className="table table-striped table-bordered table-responsive">
                   
                    <thead style={{ fontWeight: 600 }}>
                        <tr>
                            <td>Savings Accounts </td>
                            <td>Personal Checking Accounts</td>
                            <td>DBA Checking Accounts</td>
                            <td>CD Accounts</td>

                            <td>Regular IRA Accounts</td>
                            <td>Roth IRA Accounts</td>
                            <td>Rollover IRA Accounts</td>
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
                    <thead style={{ fontWeight: 600 }}>
                        <tr>
                            <td>Savings Balance </td>
                            <td>Personal Checking Balance</td>
                            <td>DBA Checking Balance</td>
                            <td>CD Balance</td>

                            <td>Regular IRA Balance</td>
                            <td>Roth IRA Balance</td>
                            <td>Rollover IRA Balance</td>
                            <td>Combined Balance</td>

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

                </table> */}
