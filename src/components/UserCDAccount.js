import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Input, Label, Card } from 'reactstrap';
import CDOffering from './GetCDOfferingComponent';



export function UserAddCDAccount() {
    const [balance, setBalance] = useState('');
    const [cdOffer, setCdOffer] = useState('');

    const USER_CDACCOUNT_URL = `http://localhost:8080/Me/cdaccounts`;
    const bearer = 'Bearer ' + localStorage.getItem('token');

    const handleSubmit = async (event) => {
        event.preventDefault();
        alert("balance:" + balance);
        var payload = {
            "balance": balance,
            "cdOffering":{
                "id":cdOffer
            }
        }
        await fetch(USER_CDACCOUNT_URL, {

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
                alert(`Successfully opened a new CD Account for you!`);
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
                alert('Account cannot be opened\nError: Excceds the maximum limit of accounts')
            } 
            if(error.res.status == "404"){
                alert('Account cannot be opened\nError: AccountHolder not found')
            }
            if(error.res.status == "406"){
                alert('Account cannot be opened\nError: Invalid details provided')
            }

        });
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <Card>
                        <h2 className="text-center">Add New CD Account</h2>

                        <Form onSubmit={handleSubmit} className="mt-3">
                            <FormGroup className="col-md-6" >
                                <Label for="balance">Enter Opening Balance</Label>
                                <Input type="balance" name="balance"
                                    id="balance" placeholder=" Opening Balance" value={balance}
                                    onChange={ev => setBalance(ev.target.value)}></Input>
                            </FormGroup>
                            <FormGroup className="col-md-6" >
                                <Label for="cdOffer">Enter CDOffering-ID</Label>
                                <Input type="cdOffer" name="cdOffer"
                                    id="cdOffer" placeholder=" CD Offering ID" value={cdOffer}
                                    onChange={ev => setCdOffer(ev.target.value)}></Input>
                            </FormGroup>
                            

                            <FormGroup className="col-md-6" >
                                <Button type="submit" value="submit" color="primary">Submit</Button>
                            </FormGroup>
                        </Form>
                    </Card>
                </div>
                </div>
                <div className="row mt-3">
                <div className="col">
                  
                </div>  
            </div>
        </div>
    );
}

export function UserGetCDAccount() {

   
    const [account, setAccount] = useState([]);

    const USER_CDACCOUNT_URL = `http://localhost:8080/Me/cdaccounts`;
    const bearer = 'Bearer ' + localStorage.getItem('token');

    useEffect(() => {
        handleSubmit()
      })

    const handleSubmit = async () => {
        
   
        await fetch(USER_CDACCOUNT_URL, {
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

                    <h2 className="text-align-center">CD Account List</h2>

                </div>
            </div>
            <div className="row">
                <div className="center">
                    <AccountsTable account={account} />
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
            <table className="table table-bordered table-responsive table-hover mt-3">
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
                                    <td> {ac.openingDate.substring(0,10)} at {ac.openingDate.substring(11)}</td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        );
    }
    return <div />
}