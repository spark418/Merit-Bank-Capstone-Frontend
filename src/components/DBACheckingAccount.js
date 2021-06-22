import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label, Card, BreadcrumbItem,Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom';
//import {baseUrl} from "../utils/constants";

export function AddDBACheckingAccount() {
    const [balance, setBalance] = useState('');
    const [accHolderid, setAccHolderid] = useState('');
   

    const DBA_CHECKINGACCOUNT_URL = process.env.REACT_APP_API_ENDPOINT+"accountholder/{accHolderid}/dbacheckingaccounts";
    const bearer = 'Bearer ' + localStorage.getItem('token');

    const handleSubmit = async (event) => {
        event.preventDefault();
        alert("balance:" + balance);
        var payload = {
            "balance": balance,
        }
        await fetch(DBA_CHECKINGACCOUNT_URL.replace('{accHolderid}', accHolderid), {

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
                alert(`Successfully opened a new DBA Checking Account for account holder: ${accHolderid}`);
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

        });
    }

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/admin">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Add Account</BreadcrumbItem>
                </Breadcrumb>

                <hr />
            </div>
            <div className="row">
                <div className="col-md-6">
                    <Card>
                        <h2 className="text-center">Add New DBA Checking Account</h2>

                        <Form onSubmit={handleSubmit} className="mt-3">
                            <FormGroup className="col-md-6" >
                                <Label for="balance">Enter Opening Balance</Label>
                                <Input type="balance" name="balance" required
                                    id="balance" placeholder=" Opening Balance" value={balance}
                                    onChange={ev => setBalance(ev.target.value)}></Input>
                            </FormGroup>

                            <FormGroup className="col-md-6" >
                                <Label for="accHolderid">AccountHolder-Id</Label>
                                <Input type="accHolderid" name="accHolderid" required
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

export function GetDBACheckingAccount() {

    const [accHolderid, setAccHolderid] = useState('');
    const [account, setAccount] = useState([]);

    const DBA_CHECKINGACCOUNT_URL = process.env.REACT_APP_API_ENDPOINT+"accountholder/{accHolderid}/dbacheckingaccounts";
    const bearer = 'Bearer ' + localStorage.getItem('token');

    const handleSubmit = async (event) => {
        event.preventDefault();
        alert(accHolderid);
        await fetch(DBA_CHECKINGACCOUNT_URL.replace('{accHolderid}', accHolderid), {
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
           // .then((account)=>console.log(account))
           
            .catch((error) => {
                
                if(error.res.status == "404"){
                    alert('Error: AccountHolder not found')
                }
               

            });

    }
    return (
        <div className="container ">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/admin">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Account List</BreadcrumbItem>
                </Breadcrumb>

                <hr />
            </div>
            <div className="row">
                <div className="col-md-7">
                    <Card>
                        <h2 className="text-center">DBA Checking Account List</h2>
                        <Form onSubmit={handleSubmit} className="mt-3">
                            <FormGroup className="col-md-6" >
                                <Label for="accHolderid">Enter the AccountHolder-Id</Label>
                                <Input type="accHolderid" name="accHolderid" required
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
    //console.log("account:"+account)
    if (account == undefined) {
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
                        <td>Balance $</td>
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
    return (<div>

        <h4>No Accounts to be Displayed</h4>
    </div> 
    );
}

export function CloseDBACheckingAccount(){
    const [accHolderid,setAccHolderid] = useState("");
    const [message, setMessage] = useState("");
    const [accNumber, setAccNumber] = useState('');
    //const [accNumber, setAccNumber] = useState("");
    const bearer = 'Bearer ' + localStorage.getItem('token');

    const CLOSE_DBA_CHECKING_ACCOUNT_URL = process.env.REACT_APP_API_ENDPOINT+"accountholder/{id}/closedbaaccount/{accountNum}";
    const handleSubmit=async(event)=>{
        event.preventDefault();
        await fetch(CLOSE_DBA_CHECKING_ACCOUNT_URL.replace('{id}/closedbaaccount/{accountNum}',`${accHolderid}/closedbaaccount/${accNumber}`),{
            method: 'PUT',
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
            .then(res=>console.log(res.text()))
            // .then(message => {
            //     setMessage(message);
            // })
   
           // .then(()=>alert(message))
            .then(()=>alert("Account closed!\n Remaining Balance has been transferred"))
            .catch((error) => {
             
                if(error.res.status == "404"){
                    alert('Error: AccountHolder not found')
                }
                if(error.res.status == "403") {
                    alert('Error: Account is closed!')
                }
                
    
            });
  
    }
    return(
        <div className="container ">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/admin">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Close Account </BreadcrumbItem>
                </Breadcrumb>

                <hr />
            </div>
            <div className="row">
                <div className="col-md-7">
                    <Card>
                        <h2 className="text-center">Close DBA Checking Account </h2>
                        <Form onSubmit={handleSubmit} className="mt-3">
                            <FormGroup className="col-md-6" >
                                <Label for="accHolderid">Enter the AccountHolder-Id</Label>
                                <Input type="accHolderid" name="accHolderid" required
                                    id="accHolderid" placeholder=" AccountHolder-Id" value={accHolderid}
                                    onChange={ev => setAccHolderid(ev.target.value)}></Input>
                                
                            </FormGroup>
                       

                       
                            <FormGroup className="col-md-6" >
                                <Label for="accNumber">Enter the Account Number</Label>
                                <Input type="accNumber" name="accNumber" required
                                    id="accNumber" placeholder=" AccountHolder-Id" value={accNumber}
                                    onChange={ev => setAccNumber(ev.target.value)}></Input>
                                
                            </FormGroup>
                            <FormGroup className="col-md-6" >
                            <Button type="submit" value="submit" color="primary" className="mt-3">Submit</Button>
                            </FormGroup>
                        </Form>
                    </Card>
                    
                </div>
            </div>
        </div>
    );
}

