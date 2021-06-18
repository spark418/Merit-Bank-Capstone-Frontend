import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Input, Label, Card } from 'reactstrap';
import DepositTransactionTypes from './DepositTransactionTypes';
import WithdrawTransactionTypes from './WithdrawTransactionTypes';

export function DBACheckingDepositTransaction() {
    const [amount, setAmount] = useState("");
    const [accHolderId, setAccHolderId] = useState("");
    const [accNum, setAccNum] = useState("");
    const [type, setType] = useState("");
    const DBA_DEPOSIT_URL = "http://localhost:8080/accountholder/{accHolderId}/dbaaccounts/{accNum}/deposittransaction";


    const bearer = 'Bearer ' + localStorage.getItem('token');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("amount:" + amount + " accHolderId: " + accHolderId + " accNum: " + accNum + "type: " + type);
        var payload = {
            "amount": amount,

            "transactionType": type

        }
        fetch(DBA_DEPOSIT_URL.replace('{accHolderId}/dbaaccounts/{accNum}', `${accHolderId}/dbaaccounts/${accNum}`), {

            method: 'POST',
            body: JSON.stringify(payload),

            headers: {
                'Content-Type': 'application/json',
                'Authorization': bearer
            },
            credentials: 'same-origin'
        })
            .then(res => {
                if (res.ok) {
        
                    return res;
                } else {
                    const error = new Error(`Error ${res.status}: ${res.statusText}`);
                    error.res = res;
                    throw error;
                }
            },
                error => {
                    throw error;
                }
            )
            .then(res => res.json())
            .then((res) => alert(`Successfully deposited!\n Your current balance is ${res.postedBalance}`))

            .catch((error) => {
                
                if (error.res.status == "404") {
                    alert('\nError: AccountHolder not found')
                }
                if (error.res.status == "406") {
                    alert('\nError: Invalid amount')
                }

            });

    }

    return (
        <div className="container mt-5">
            <div className="row ">
            <div className="col-md-7">
            <h3>Please make your Deposit </h3>
            <Form onSubmit={handleSubmit} className="mt-3">

                <FormGroup className="col-sm-5" >
                    <Label for="amount">Amount</Label>
                    <Input type="amount" name="amount"
                        id="amount" placeholder="amount" value={amount}
                        onChange={ev => setAmount(ev.target.value)}></Input>
                </FormGroup>

                <FormGroup className="col-sm-5">
                    <Label for="accHolderId">Account Holder Id</Label>
                    <Input type="accHolderId" name="accHolderId"
                        id="accHolderId" placeholder="Account Holder Id" value={accHolderId}
                        onChange={ev => setAccHolderId(ev.target.value)}></Input>
                </FormGroup>

                <FormGroup className="col-sm-5">
                    <Label for="accNum">Account Number</Label>
                    <Input type="accNum" name="accNum"
                        id="accNum" placeholder="Account Number" value={accNum}
                        onChange={ev => setAccNum(ev.target.value)}></Input>
                </FormGroup>

                <FormGroup className="col-sm-5">
                    <Label for="type">Transaction Type</Label>
                    <Input type="type" name="type"
                        id="type" placeholder="Transaction Type" value={type}
                        onChange={ev => setType(ev.target.value)}></Input>
                </FormGroup>

                <FormGroup className="col-sm-5" >
                    <Button type="submit" value="submit" color="primary">Submit</Button>
                </FormGroup>
            </Form>
            </div>
            <div className="col-md-5">
                <DepositTransactionTypes/>
            </div>
            </div>
        </div>
    );
}


export function DBACheckingWithdrawTransaction() {
    const [amount, setAmount] = useState("");
    const [accHolderId, setAccHolderId] = useState("");
    const [accNum, setAccNum] = useState("");
    const [type, setType] = useState("");
    const DBA_WITHDRAW_URL = "http://localhost:8080/accountholder/{accHolderId}/dbaaccounts/{accNum}/withdrawtransaction";


    const bearer = 'Bearer ' + localStorage.getItem('token');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("amount:" + amount + " accHolderId: " + accHolderId + " accNum: " + accNum + "type: " + type);
        var payload = {
            "amount": amount,

            "transactionType": type

        }
        fetch(DBA_WITHDRAW_URL.replace('{accHolderId}/dbaaccounts/{accNum}', `${accHolderId}/dbaaccounts/${accNum}`), {

            method: 'POST',
            body: JSON.stringify(payload),

            headers: {
                'Content-Type': 'application/json',
                'Authorization': bearer
            },
            credentials: 'same-origin'
        })
            .then(res => {
                if (res.ok) {
                 
                    return res;
                } else {
                    const error = new Error(`Error ${res.status}: ${res.statusText}`);
                    error.res = res;
                    throw error;
                }
            },
                error => {
                    throw error;
                }
            )
            .then(res => res.json())
            .then((res) => alert(`Successfully withdrawn!\n Your current balance is ${res.postedBalance}`))

            .catch((error) => {
                if (error.res.status == "409") {
                    alert('\nError: Insufficient balance')
                }
                if (error.res.status == "404") {
                    alert('\nError: AccountHolder not found')
                }
                if (error.res.status == "406") {
                    alert('\nError: Invalid amount')
                }

            });

    }

    return (
        <div className="container mt-5">
            <div className="row ">
            <div className="col-md-7">
            <h3>Please make your Withdrawal </h3>
            <Form onSubmit={handleSubmit} className="mt-3">

                <FormGroup className="col-sm-5" >
                    <Label for="amount">Amount</Label>
                    <Input type="amount" name="amount"
                        id="amount" placeholder="amount" value={amount}
                        onChange={ev => setAmount((ev.target.value))}></Input>
                </FormGroup>

                <FormGroup className="col-sm-5">
                    <Label for="accHolderId">Account Holder Id</Label>
                    <Input type="accHolderId" name="accHolderId"
                        id="accHolderId" placeholder="Account Holder Id" value={accHolderId}
                        onChange={ev => setAccHolderId(ev.target.value)}></Input>
                </FormGroup>

                <FormGroup className="col-sm-5">
                    <Label for="accNum">Account Number</Label>
                    <Input type="accNum" name="accNum"
                        id="accNum" placeholder="Account Number" value={accNum}
                        onChange={ev => setAccNum(ev.target.value)}></Input>
                </FormGroup>

                <FormGroup className="col-sm-5">
                    <Label for="type">Transaction Type</Label>
                    <Input type="type" name="type"
                        id="type" placeholder="Transaction Type" value={type}
                        onChange={ev => setType(ev.target.value)}></Input>
                </FormGroup>

                <FormGroup className="col-sm-5" >
                    <Button type="submit" value="submit" color="primary">Submit</Button>
                </FormGroup>
            </Form>
            </div>
            <div className="col-md-5">
                <WithdrawTransactionTypes/>
            </div>
            </div>

        </div>
    );
}

export function DBACheckingGetTransaction() {

    const [accHolderId, setAccHolderId] = useState("");
    const [accNum, setAccNum] = useState("");
    const [transact, setTransact] = useState([]);

    const DBA_TRANSACTION_URL = "http://localhost:8080/accountholder/{accHolderId}/dbaaccounts/{accNum}/transactions";


    const bearer = 'Bearer ' + localStorage.getItem('token');

    // useEffect(() => {
    //     handleSubmit()
    //   })

    const handleSubmit = async (event) => {
        event.preventDefault();
        alert(" accHolderId: " + accHolderId + " accNum: " + accNum);

        await fetch(DBA_TRANSACTION_URL.replace('{accHolderId}/dbaaccounts/{accNum}', `${accHolderId}/dbaaccounts/${accNum}`), {

            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': bearer
            },
        })
            .then(res => {
                if (res.ok) {
                   
                    return res;
                } else {
                    const error = new Error(`Error ${res.status}: ${res.statusText}`);
                    error.res = res;
                    throw error;
                }
            },
                error => {
                    throw error;
                }
            )
            .then(res => res.json())
            .then(res => {
                setTransact(res)
            })

            .catch((error) => {
                if (error.res.status == "400") {
                    alert('Error: 400')
                }
                if (error.res.status == "404") {
                    alert('\nError: AccountHolder not found')
                }
                if (error.res.status == "406") {
                    alert('\nError: Invalid details provided')
                }

            });

    }

    return (
        <div className=" container">
            <div className="col-md-7">
                <h3>Get the Transactions Here</h3>
                <Form onSubmit={handleSubmit} className="mt-3">

                    <FormGroup className="col-sm-5">
                        <Label for="accHolderId">Account Holder Id</Label>
                        <Input type="accHolderId" name="accHolderId"
                            id="accHolderId" placeholder="Account Holder Id" value={accHolderId}
                            onChange={ev => setAccHolderId(ev.target.value)}></Input>
                    </FormGroup>

                    <FormGroup className="col-sm-5">
                        <Label for="accNum">Account Number</Label>
                        <Input type="accNum" name="accNum"
                            id="accNum" placeholder="Account Number" value={accNum}
                            onChange={ev => setAccNum(ev.target.value)}></Input>
                    </FormGroup>


                    <FormGroup className="col-sm-5" >
                        <Button type="submit" value="submit" color="primary">Submit</Button>
                    </FormGroup>
                </Form>
            </div>
            <div className="row mt-3">

                <TransactionTable transact={transact} />
            </div>
        </div>
    );
}

function TransactionTable({ transact }) {
    console.log("transact:" + transact)
    if (transact == []) {
        return (
            <h3>Transactions to be displayed!</h3>
        )
    }
    if (transact != []) {
        return (
            <table className="table table-hover table-responsive table-bordered">
                <thead style={{ fontWeight: 600 }}>
                    <tr>
                        <td>Transaction Type</td>
                        <td>Transaction Amount $</td>
                        <td>a/c Balance $</td>
                        <td>Transaction Date</td>

                    </tr>
                </thead>
                <tbody>
                    {
                        transact.map(
                            t =>
                                <tr key={t.id}>
                                    <td>{t.type}</td>
                                    <td> {t.amount}</td>
                                    <td> {t.postedBalance}</td>
                                    <td> {(t.date.substring(0, 10))} at {t.date.substring(11, 19)}</td>

                                </tr>
                        )
                    }
                </tbody>
            </table>

        );
    }
    return <div />
}

