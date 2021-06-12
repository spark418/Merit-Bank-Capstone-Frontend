import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label, Card } from 'reactstrap';

export function UserAddPersonalCheckingAccount() {
    const [balance, setBalance] = useState('');
    

    const USER_PERSONAL_CHECKINGACCOUNT_URL = `http://localhost:8080/Me/checkingaccounts`;
    const bearer = 'Bearer ' + localStorage.getItem('token');

    const handleSubmit = async (event) => {
        event.preventDefault();
        alert("balance:" + balance);
        var payload = {
            "balance": balance,
        }
        await fetch(USER_PERSONAL_CHECKINGACCOUNT_URL, {

            method: 'POST',
            body: JSON.stringify(payload),

            headers: {
                'Content-Type': 'application/json',
                'Authorization': bearer
            },
            credentials: 'same-origin'
        })
            .then(res => res.json())

            .then(data => console.log(data))
            .then(() => alert(" Opened a new Personal Checking Account successfully!"))

            .catch(err => console.log(err.message));
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
                                <Button type="submit" value="submit" color="primary">Submit</Button>
                            </FormGroup>
                        </Form>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export function UserGetPersonalCheckingAccount() {

   
    const [account, setAccount] = useState([]);

    const USER_PERSONAL_CHECKINGACCOUNT_URL = `http://localhost:8080/Me/checkingaccounts`;
    const bearer = 'Bearer ' + localStorage.getItem('token');

    const handleSubmit = async (event) => {
        event.preventDefault();
   
        await fetch(USER_PERSONAL_CHECKINGACCOUNT_URL, {
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
           .then((account)=>console.log(account))
         
            .catch(err => console.log(err.message));
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-7">
                    <Card>
                        <h2 className="text-center">Personal Checking Account List</h2>
                        <Form onSubmit={handleSubmit} className="mt-3">
                            
                                <Button type="submit" value="submit" color="primary" className="mt-3">Click here</Button>
                            
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
            <table className="table table-striped">
                <thead>
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