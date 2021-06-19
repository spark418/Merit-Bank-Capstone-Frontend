import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label, Card } from 'reactstrap';
//import {baseUrl} from "../utils/constants";

export function AdminTransferTransaction() {
    const [amount, setAmount] = useState("");
    const [accHolderId, setAccHolderId] = useState("");
    const [sourceAccNum, setSourceAccNum] = useState("");
    const [targetAccNum, setTargetAccNum] = useState("");
    const [type, setType] = useState("");
    const TRANSFER_URL = process.env.REACT_APP_API_ENDPOINT+"accountholder/{id}/accounts/{sourceNum}/transfer/{targetNum}";


    const bearer = 'Bearer ' + localStorage.getItem('token');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("amount: " + amount + " accHolderId: " + accHolderId + " From AccNum: " + sourceAccNum + " To AccNum: " + targetAccNum);
        var payload = {
            "amount": amount,

            "transactionType": type

        }
        fetch(TRANSFER_URL.replace('{id}/accounts/{sourceNum}/transfer/{targetNum}', `${accHolderId}/accounts/${sourceAccNum}/transfer/${targetAccNum}`), {

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
                        id="amount" placeholder="Amount" value={amount}
                        onChange={ev => setAmount(ev.target.value)}></Input>
                </FormGroup>

                <FormGroup className="col-sm-5">
                    <Label for="accHolderId">Account Holder Id</Label>
                    <Input type="accHolderId" name="accHolderId"
                        id="accHolderId" placeholder="Account Holder Id" value={accHolderId}
                        onChange={ev => setAccHolderId(ev.target.value)}></Input>
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

 