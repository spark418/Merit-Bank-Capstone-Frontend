import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label, Card } from 'reactstrap';

export function AddPersonalCheckingAccount() {
    const [balance, setBalance] = useState('');
    const [accHolderid, setAccHolderid] = useState('');

    const PERSONAL_CHECKINGACCOUNT_URL = `http://localhost:8080/accountholder/{accHolderid}/checkingaccounts`;
    const bearer = 'Bearer ' + localStorage.getItem('token');

    const handleSubmit = async (event) => {
        event.preventDefault();
        alert("balance:" + balance);
        var payload = {
            "balance": balance,
        }
        await fetch(PERSONAL_CHECKINGACCOUNT_URL.replace('{accHolderid}', accHolderid), {

            method: 'POST',
            body: JSON.stringify(payload),

            headers: {
                'Content-Type': 'application/json',
                'Authorization': bearer
            },
            credentials: 'same-origin'
        })
        .then(res=> {
            if(res.ok){
                //console.log(res.json());
                alert(`Successfully opened a new Personal Checking Account for account holder: ${accHolderid}`);
                return res;
            } else {
                const error = new Error(`Error ${res.status}: ${res.statusText}`);
                error.res = res;
                throw error ;
            }
        },
        error=> { 
            throw error;
        }
        )
        .then(res => res.json())
       
        .catch((error) => {
            if(error.res.status == "400"){
                alert('Account cannot be opened\nError: Exceeds the maximum limit of accounts')
            } 
            if(error.res.status == "404"){
                alert('Account cannot be opened\nError: AccountHolder not found')
            }
            if(error.res.status == "406"){
                alert('Account cannot be opened\nError: Invalid details provided')
            }

        });;
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <Card>
                        <h2 className="text-center">Add New Personal CheckingAccount</h2>

                        <Form onSubmit={handleSubmit} className="mt-3">
                            <FormGroup className="col-md-6" >
                                <Label for="balance">Enter Opening Balance</Label>
                                <Input type="balance" name="balance"
                                    id="balance" placeholder=" Opening Balance" value={balance}
                                    onChange={ev => setBalance(ev.target.value)}></Input>
                            </FormGroup>

                            <FormGroup className="col-md-6" >
                                <Label for="accHolderid">AccountHolder-Id</Label>
                                <Input type="accHolderid" name="accHolderid"
                                    id="accHolderid" placeholder=" AccountHolder-Id" value={accHolderid}
                                    onChange={ev => setAccHolderid(ev.target.value)}></Input>
                            </FormGroup>

                            <FormGroup className="col-md-6" >
                                <Button type="submit" value="submit" color="primary">Submit</Button>
                            </FormGroup>
                        </Form>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export function GetPersonalCheckingAccount() {

    const [accHolderid, setAccHolderid] = useState('');
    const [account, setAccount] = useState([]);

    const PERSONAL_CHECKINGACCOUNT_URL = `http://localhost:8080/accountholder/{accHolderid}/checkingaccounts`;
    const bearer = 'Bearer ' + localStorage.getItem('token');

    const handleSubmit = async (event) => {
        event.preventDefault();
        alert(accHolderid);
        await fetch(PERSONAL_CHECKINGACCOUNT_URL.replace('{accHolderid}', accHolderid), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': bearer
            },
        })
        .then(res=> {
            if(res.ok){
                
                return res;
            } else {
                const error = new Error(`Error ${res.status}: ${res.statusText}`);
                error.res = res;
                throw error ;
            }
        },
        error=> { 
            throw error;
        }
        )
        .then(res => res.json())
        .then(res => {
            setAccount(res)
        })
        .then((account)=>console.log(account))
       
        .catch((error) => {
             
            if(error.res.status == "404"){
                alert('Error: AccountHolder not found')
            }
            

        });
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-7">
                    <Card>
                        <h2 className="text-center">Personal Checking Account List</h2>
                        <Form onSubmit={handleSubmit} className="mt-3">
                            <FormGroup className="col-md-6" >
                                <Label for="accHolderid">Enter the AccountHolder-Id</Label>
                                <Input type="accHolderid" name="accHolderid"
                                    id="accHolderid" placeholder=" AccountHolder-Id" value={accHolderid}
                                    onChange={ev => setAccHolderid(ev.target.value)}></Input>
                                <Button type="submit" value="submit" color="primary" className="mt-3">Submit</Button>
                            </FormGroup>
                        </Form>
                    </Card>
                    <div>
                         <AccountsTable account={account} /> 
                    </div>
                </div>
            </div>
        </div>
    );
}

function AccountsTable({ account }) {
    console.log("account:"+account)
    if (account == null) {
        return (
            <h3>No accounts to be displayed!</h3>
        )
    } 
     if (account != null) {
        return (
            <table className="table table-bordered table-responsive table-hover">
                <thead style={{fontWeight:600}}>
                    <tr>
                        <td>Account Num</td>
                        <td>Balance</td>
                        <td>Opening Date</td>

                    </tr>
                </thead>
                <tbody>
                    {
                        account.map(
                            ac =>
                                <tr key={ac.id}>
                                    <td> {ac.accountNumber}</td>
                                    <td> {ac.balance}</td>
                                    <td> {ac.openingDate}</td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        );
    }
    return <div />
}