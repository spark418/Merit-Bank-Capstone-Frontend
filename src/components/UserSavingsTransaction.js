import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Input, Label, BreadcrumbItem,Breadcrumb } from 'reactstrap';
import DepositTransactionTypes from './DepositTransactionTypes';
import WithdrawTransactionTypes from './WithdrawTransactionTypes';
//import {baseUrl} from "../utils/constants";
import { Link } from 'react-router-dom';

export function UserSavingsDepositTransaction() {
    const [amount, setAmount] = useState("");
    //const [accHolderId, setAccHolderId] = useState("");
    //const [accNum, setAccNum] = useState("");
    const [type, setType] = useState("");
    const USER_SAVINGS_DEPOSIT_URL = process.env.REACT_APP_API_ENDPOINT+"Me/savingsaccount/deposittransaction";


    const bearer = 'Bearer ' + localStorage.getItem('token');

    const handleSubmit = async(event) => {
        event.preventDefault();
        alert("amount:" + amount  + "type: " + type);
        var payload = {
            "amount": amount,

            "transactionType": type

        }
        await fetch(USER_SAVINGS_DEPOSIT_URL, {

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
                }
                 else {
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
                if (error.res.status == "400") {
                    alert('Error: 400')
                }
                if (error.res.status == "404") {
                    alert('\nError: AccountHolder not found')
                }
                if (error.res.status == "406") {
                    alert('\nError: Invalid details provided')
                }
console.log(error)
            });

    }

    return (
        <div className="container ">
             <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/user">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Savings Deposit</BreadcrumbItem>
                </Breadcrumb>

                <hr />
            </div>
            <div className="row ">
            <div className="col-md-7">
            <h3>Please make your Deposit </h3>
            <Form onSubmit={handleSubmit} className="mt-3">

                <FormGroup className="col-sm-5" >
                    <Label for="amount">Amount</Label>
                    <Input type="amount" name="amount" required
                        id="amount" placeholder="amount" value={amount}
                        onChange={ev => setAmount(ev.target.value)}></Input>
                </FormGroup>

                

                

                <FormGroup className="col-sm-5">
                    <Label for="type">Transaction Type</Label>
                    <Input type="type" name="type" required
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


export function UserSavingsWithdrawTransaction() {
    const [amount, setAmount] = useState("");
    //const [accHolderId, setAccHolderId] = useState("");
    //const [accNum, setAccNum] = useState("");
    const [type, setType] = useState("");
    const USER_SAVINGS_WITHDRAW_URL = process.env.REACT_APP_API_ENDPOINT+"Me/savingsaccount/withdrawtransaction";


    const bearer = 'Bearer ' + localStorage.getItem('token');

    const handleSubmit =async (event) => {
        event.preventDefault();
        alert("amount:" + amount  + "type: " + type);
        var payload = {
            "amount": amount,

            "transactionType": type

        }
        await fetch(USER_SAVINGS_WITHDRAW_URL, {

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
            }
             else {
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
console.log(error)
            });

    }

    return (
        <div className="container">
             <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/user">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active> Savings Withdraw</BreadcrumbItem>
                </Breadcrumb>

                <hr />
            </div>
            <div className="row ">
            <div className="col-md-7">
            <h3>Please make your Withdrawal </h3>
            <Form onSubmit={handleSubmit} className="mt-3">

                <FormGroup className="col-sm-5" >
                    <Label for="amount">Amount</Label>
                    <Input type="amount" name="amount" required
                        id="amount" placeholder="amount" value={amount}
                        onChange={ev => setAmount((ev.target.value))}></Input>
                </FormGroup>

                

                {/* <FormGroup className="col-sm-5">
                    <Label for="accNum">Account Number</Label>
                    <Input type="accNum" name="accNum"
                        id="accNum" placeholder="Account Number" value={accNum}
                        onChange={ev => setAccNum(ev.target.value)}></Input>
                </FormGroup> */}

                <FormGroup className="col-sm-5">
                    <Label for="type">Transaction Type</Label>
                    <Input type="type" name="type" required
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

export function UserSavingsTransferTransaction() {
    const [amount, setAmount] = useState("");
    const [accHolderId, setAccHolderId] = useState("");
    const [sourceAccNum, setSourceAccNum] = useState("");
    const [targetAccNum, setTargetAccNum] = useState("");
    const [type, setType] = useState("");
    const SAVINGS_TRANSFER_URL = process.env.REACT_APP_API_ENDPOINT+"Me/savingsaccount/transfer";


    const bearer = 'Bearer ' + localStorage.getItem('token');

    const handleSubmit = async (event) => {
        event.preventDefault();
        //alert("amount: " + amount + " accHolderId: " + accHolderId + " From AccNum: " + sourceAccNum + " To AccNum: " + targetAccNum);
        var payload = {
                "amount":amount,
                "transactionType":type,
                "source":sourceAccNum,
                "target":targetAccNum,
                    
                "targetId":accHolderId
                

        }
        await fetch(SAVINGS_TRANSFER_URL, {

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
                    //console.log(res.json());
                   
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
            .then((res) => alert(`Amount successfully transferred!\n Balance in a/c ${targetAccNum} is ${res.targetBalance}`))

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
        <div className="container ">
             <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/user">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active> Savings Transfer</BreadcrumbItem>
                </Breadcrumb>

                <hr />
            </div>
            <h3>Please make the Transfer </h3>
            <Form onSubmit={handleSubmit} className="mt-3">

                <FormGroup className="col-sm-5" >
                    <Label for="amount">Amount</Label>
                    <Input type="amount" name="amount" required
                        id="amount" placeholder="amount" value={amount}
                        onChange={ev => setAmount(ev.target.value)}></Input>
                </FormGroup>

                

                <FormGroup className="col-sm-5">
                    <Label for="sourceAccNum">From Account Number</Label>
                    <Input type="sourceAccNum" name="sourceAccNum" required
                        id="sourceAccNum" placeholder="Source a/c Number" value={sourceAccNum}
                        onChange={ev => setSourceAccNum(ev.target.value)}></Input>
                </FormGroup>

                <FormGroup className="col-sm-5">
                    <Label for="targetAccNum">To Account Number</Label>
                    <Input type="targetAccNum" name="targetAccNum" required
                        id="targetAccNum" placeholder="Target a/c Number" value={targetAccNum}
                        onChange={ev => setTargetAccNum(ev.target.value)}></Input>
                </FormGroup>
                <FormGroup className="col-sm-5">
                    <Label for="accHolderId"> To Account Holder Id</Label>
                    <Input type="accHolderId" name="accHolderId" required
                        id="accHolderId" placeholder="Account Holder Id" value={accHolderId}
                        onChange={ev => setAccHolderId(ev.target.value)}></Input>
                </FormGroup>

                <FormGroup className="col-sm-5">
                    <Label for="type">Transaction Type</Label>
                    <Input type="type" name="type" required
                        id="type" placeholder="Transaction Type" value={type}
                        onChange={ev => setType(ev.target.value)}></Input>
                </FormGroup>

                <FormGroup className="col-sm-5" >
                    <Button type="submit" value="submit" color="primary">Submit</Button>
                </FormGroup>
            </Form>
        </div>
    );
 }

 export function UserSavingsGetTransaction() {

    //const [accHolderId, setAccHolderId] = useState("");
    //const [accNum, setAccNum] = useState("");
    const [transact, setTransact] = useState([]);

    const USER_SAVINGS_TRANSACTION_URL = process.env.REACT_APP_API_ENDPOINT+"Me/savingsaccount/transactions";


    const bearer = 'Bearer ' + localStorage.getItem('token');

    useEffect(() => {
        handleSubmit()
      })


    const handleSubmit = async () => {
        //event.preventDefault();
        //alert("accNum: " + accNum);

        await fetch(USER_SAVINGS_TRANSACTION_URL, {

            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': bearer
            },
        })
            .then(res => {
                if (res.ok) {
                    //console.log(res.json());

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
            //.then((res) => console.log(res))
            .then(res => {
                setTransact(res)
            })

            .catch((error) => {
                
                if (error.res.status == "404") {
                    alert('Error: Invalid a/c number or Vacant Account')
                }
                

            });

    }

    return (
        <div className=" container">
             <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/user">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active> Savings Transactions</BreadcrumbItem>
                </Breadcrumb>

                <hr />
            </div>
                <TransactionTable transact={transact} />
            {/* </div> */}
        </div>
    );
}

function TransactionTable({ transact }) {
   // console.log("transact:" + transact)
    if (transact == []) {
        return (
            <h3>No Transactions to be displayed!</h3>
        )
    }
    if (transact != []) {
        return (
            <table className="table table-hover table-responsive table-bordered">
                <thead style={{ fontWeight: 600 }}>
                    <tr>
                        <td> Type</td>
                        <td>Amount $</td>
                        <td>Transaction</td>
                        <td>a/c Balance $</td>
                        <td>Date</td>

                    </tr>
                </thead>
                <tbody>
                    {
                        transact.map(
                            t =>
                                <tr key={t.id}>
                                    <td>{t.type}</td>
                                    <td> {t.amount}</td>
                                    <td>{t.action}</td>
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





