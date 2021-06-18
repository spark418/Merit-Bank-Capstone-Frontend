import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Input, Label, Card } from 'reactstrap';
import DepositTransactionTypes from './DepositTransactionTypes';
import WithdrawTransactionTypes from './WithdrawTransactionTypes';

export function UserDBACheckingDepositTransaction() {
    const [amount, setAmount] = useState("");
    //const [accHolderId, setAccHolderId] = useState("");
    const [accNum, setAccNum] = useState("");
    const [type, setType] = useState("");
    const USER_DBA_DEPOSIT_URL = "http://localhost:8080/Me/dbaccount/{accountNum}/deposittransaction";


    const bearer = 'Bearer ' + localStorage.getItem('token');

    const handleSubmit = async(event) => {
        event.preventDefault();
        alert("amount:" + amount + " accNum: " + accNum + "type: " + type);
        var payload = {
            "amount": amount,

            "transactionType": type

        }
        await fetch(USER_DBA_DEPOSIT_URL.replace('{accountNum}', `${accNum}`), {

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


export function UserDBACheckingWithdrawTransaction() {
    const [amount, setAmount] = useState("");
    //const [accHolderId, setAccHolderId] = useState("");
    const [accNum, setAccNum] = useState("");
    const [type, setType] = useState("");
    const USER_DBA_WITHDRAW_URL = "http://localhost:8080/Me/dbaccount/{accountNum}/withdrawtransaction";


    const bearer = 'Bearer ' + localStorage.getItem('token');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("amount:" + amount + " accNum: " + accNum + "type: " + type);
        var payload = {
            "amount": amount,

            "transactionType": type

        }
        fetch(USER_DBA_WITHDRAW_URL.replace('{accountNum}', `${accNum}`), {

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

export function UserDBACheckingTransferTransaction() {
    const [amount, setAmount] = useState("");
    const [accHolderId, setAccHolderId] = useState("");
    const [sourceAccNum, setSourceAccNum] = useState("");
    const [targetAccNum, setTargetAccNum] = useState("");
    const [type, setType] = useState("");
    const DBA_TRANSFER_URL = "http://localhost:8080/Me/dbaccount/{accountNum}/transfer";


    const bearer = 'Bearer ' + localStorage.getItem('token');

    const handleSubmit = (event) => {
        event.preventDefault();
        //alert("amount: " + amount + " accHolderId: " + accHolderId + " From AccNum: " + sourceAccNum + " To AccNum: " + targetAccNum);
        var payload = {
                "amount":amount,
                "transactionType":type,
                "source":sourceAccNum,
                "target":targetAccNum,
                    
                "targetId":accHolderId
                

        }
        fetch(DBA_TRANSFER_URL.replace('{accountNum}', sourceAccNum), {

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
        <div className="container mt-5">
            <h3>Please make the Transfer </h3>
            <Form onSubmit={handleSubmit} className="mt-3">

                <FormGroup className="col-sm-5" >
                    <Label for="amount">Amount</Label>
                    <Input type="amount" name="amount"
                        id="amount" placeholder="amount" value={amount}
                        onChange={ev => setAmount(ev.target.value)}></Input>
                </FormGroup>

                

                <FormGroup className="col-sm-5">
                    <Label for="sourceAccNum">From Account Number</Label>
                    <Input type="sourceAccNum" name="sourceAccNum"
                        id="sourceAccNum" placeholder="Source a/c Number" value={sourceAccNum}
                        onChange={ev => setSourceAccNum(ev.target.value)}></Input>
                </FormGroup>

                <FormGroup className="col-sm-5">
                    <Label for="targetAccNum">To Account Number</Label>
                    <Input type="targetAccNum" name="targetAccNum"
                        id="targetAccNum" placeholder="Target a/c Number" value={targetAccNum}
                        onChange={ev => setTargetAccNum(ev.target.value)}></Input>
                </FormGroup>
                <FormGroup className="col-sm-5">
                    <Label for="accHolderId"> To Account Holder Id</Label>
                    <Input type="accHolderId" name="accHolderId"
                        id="accHolderId" placeholder="Account Holder Id" value={accHolderId}
                        onChange={ev => setAccHolderId(ev.target.value)}></Input>
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
    );
 }



// export function UserDBACheckingGetTransaction() {

//     const [accHolderId, setAccHolderId] = useState("");
//     const [accNum, setAccNum] = useState("");
//     const [transact, setTransact] = useState([]);

//     const DBA_TRANSACTION_URL = "http://localhost:8080/Me/dbaaccounts/{accNum}/transactions";


//     const bearer = 'Bearer ' + localStorage.getItem('token');

//     // useEffect(() => {
//     //     handleSubmit()
//     //   })

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         alert(" accHolderId: " + accHolderId + " accNum: " + accNum);

//         await fetch(DBA_TRANSACTION_URL.replace('{accHolderId}/dbaaccounts/{accNum}', `${accHolderId}/dbaaccounts/${accNum}`), {

//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': bearer
//             },
//         })
//             .then(res => {
//                 if (res.ok) {
//                     //console.log(res.json());

//                     return res;
//                 } else {
//                     const error = new Error(`Error ${res.status}: ${res.statusText}`);
//                     error.res = res;
//                     throw error;
//                 }
//             },
//                 error => {
//                     throw error;
//                 }
//             )
//             .then(res => res.json())
//             //.then((res) => console.log(res))
//             .then(res => {
//                 setTransact(res)
//             })

//             .catch((error) => {
//                 if (error.res.status == "400") {
//                     alert('Error: 400')
//                 }
//                 if (error.res.status == "404") {
//                     alert('\nError: AccountHolder not found')
//                 }
//                 if (error.res.status == "406") {
//                     alert('\nError: Invalid details provided')
//                 }

//             });

//     }

//     return (
//         <div className=" container">
//             <div className="col-md-7">
//                 <h3>Get the Transactions Here</h3>
//                 <Form onSubmit={handleSubmit} className="mt-3">

//                     <FormGroup className="col-sm-5">
//                         <Label for="accHolderId">Account Holder Id</Label>
//                         <Input type="accHolderId" name="accHolderId"
//                             id="accHolderId" placeholder="Account Holder Id" value={accHolderId}
//                             onChange={ev => setAccHolderId(ev.target.value)}></Input>
//                     </FormGroup>

//                     <FormGroup className="col-sm-5">
//                         <Label for="accNum">Account Number</Label>
//                         <Input type="accNum" name="accNum"
//                             id="accNum" placeholder="Account Number" value={accNum}
//                             onChange={ev => setAccNum(ev.target.value)}></Input>
//                     </FormGroup>


//                     <FormGroup className="col-sm-5" >
//                         <Button type="submit" value="submit" color="primary">Submit</Button>
//                     </FormGroup>
//                 </Form>
//             </div>
//             <div className="row mt-3">

//                 <TransactionTable transact={transact} />
//             </div>
//         </div>
//     );
// }

// function TransactionTable({ transact }) {
//     console.log("transact:" + transact)
//     if (transact == []) {
//         return (
//             <h3>Transactions to be displayed!</h3>
//         )
//     }
//     if (transact != []) {
//         return (
//             <table className="table table-hover table-responsive table-bordered">
//                 <thead style={{ fontWeight: 600 }}>
//                     <tr>
//                         <td>Transaction Type</td>
//                         <td>Transaction Amount $</td>
//                         <td>a/c Balance $</td>
//                         <td>Transaction Date</td>

//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         transact.map(
//                             t =>
//                                 <tr key={t.id}>
//                                     <td>{t.type}</td>
//                                     <td> {t.amount}</td>
//                                     <td> {t.postedBalance}</td>
//                                     <td> {(t.date.substring(0, 10))} at {t.date.substring(11, 19)}</td>

//                                 </tr>
//                         )
//                     }
//                 </tbody>
//             </table>

//         );
//     }
//     return <div />
// }

