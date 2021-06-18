import React, { useEffect, useState } from 'react';
import { Button,Form, FormGroup, Input, Label } from 'reactstrap';

export function CreateAccountHolderContactDetails() {
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phonenum, setPhonenum] = useState('');
    const [accHolderid, setAccHolderid] = useState('');


    const REGISTER_AH_CONTACTS_URL=`http://localhost:8080/accountholder/{accHolderid}/contactdetails`;
    const bearer = 'Bearer ' + localStorage.getItem('token');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("address:" + address + " email: " + email + " phonenum:" + phonenum);
        var payload={
            "address": address,
            "email": email,
            "phoneNum": phonenum,
           
        }
        fetch(REGISTER_AH_CONTACTS_URL.replace('{accHolderid}', accHolderid),{

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
                   
                    alert(`Successfully added the contact details to Account Holder`);
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
                    alert('Contact Details could not be added\nError: Excceds the maximum limit of accounts')
                } 
                if(error.res.status == "404"){
                    alert('Contact Details could not be added\nError: AccountHolder not found')
                }
                if(error.res.status == "406"){
                    alert('Contact Details could not be added\nError: Invalid details provided')
                }
    
            });
    }


    return (
        <div className="container mt-5">
             <h3>Add the Account Holder Contacts</h3> 
            <Form onSubmit={handleSubmit} className="mt-4">
                <FormGroup className="col-sm-5" >
                    <Label for="email">Email</Label>
                    <Input type="email" name="email"
                        id="email" placeholder="Email" value={email}
                        onChange={ev => setEmail(ev.target.value)}></Input>
                </FormGroup>


                <FormGroup className="col-sm-5" >
                    <Label for="address">Address</Label>
                    <Input type="address" name="address"
                        id="address" placeholder="Address" value={address}
                        onChange={ev => setAddress(ev.target.value)}></Input>
                </FormGroup>
    
                
                <FormGroup className="col-sm-5">
                    <Label for="phonenum">Phone Number</Label>
                    <Input type="phonenum" name="phonenum"
                        id="phonenum" placeholder="Phone Number" value={phonenum}
                        onChange={ev => setPhonenum(ev.target.value)}></Input>
                </FormGroup>
                <FormGroup className="col-sm-5">
                    <Label for="accHolderid">AccountHolder-Id</Label>
                    <Input type="accHolderid" name="accHolderid"
                        id="accHolderid" placeholder="AccountHolder-Id" value={accHolderid}
                        onChange={ev => setAccHolderid(ev.target.value)}></Input>
                </FormGroup>

               
                <FormGroup className="col-sm-5" >
                    <Button type="submit" value="submit" color="primary">Submit</Button>
                </FormGroup>
            </Form>
        </div>
    );
}

export function UpdateAccountHolderContactDetails() {
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phonenum, setPhonenum] = useState('');
    const [accHolderContactid, setAccHolderContactid] = useState('');


    const UPDATE_AH_CONTACTS_URL=`http://localhost:8080/accountholder/{id}/contactdetails/update`;
    const bearer = 'Bearer ' + localStorage.getItem('token');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("address:" + address + " email: " + email + " phonenum:" + phonenum);
        var payload={
            "address": address,
            "email": email,
            "phoneNum": phonenum,
           
        }
        fetch(UPDATE_AH_CONTACTS_URL.replace('{id}', accHolderContactid),{

            method: 'PUT',
            body: JSON.stringify(payload),

            headers: {
                'Content-Type': 'application/json',
                'Authorization': bearer
            },
            credentials: 'same-origin'
        })
            
            .then(res=> {
                if(res.ok){
                   
                    alert(`Successfully updated the contact details of Account Holder`);
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
                    alert('Contact Details could not be added\nError:')
                } 
                if(error.res.status == "404"){
                    alert('Contact Details could not be added\nError: AccountHolder not found')
                }
                if(error.res.status == "406"){
                    alert('Contact Details could not be added\nError: Invalid details provided')
                }
    
            });
    }


    return (
        <div className="container mt-5">
             <h3>Update the Account Holder Contacts</h3> 
            <Form onSubmit={handleSubmit} className="mt-4">

            <FormGroup className="col-sm-5" >
                    <Label for="accHolderContactid">Enter the Contact Id to update</Label>
                    <Input type="accHolderContactid" name="accHolderContactid"
                        id="accHolderContactid" placeholder="Contacts Id" value={accHolderContactid}
                        onChange={ev => setAccHolderContactid(ev.target.value)}></Input>
                </FormGroup>

                <FormGroup className="col-sm-5" >
                    <Label for="email">Email</Label>
                    <Input type="email" name="email"
                        id="email" placeholder="Email" value={email}
                        onChange={ev => setEmail(ev.target.value)}></Input>
                </FormGroup>


                <FormGroup className="col-sm-5" >
                    <Label for="address">Address</Label>
                    <Input type="address" name="address"
                        id="address" placeholder="Address" value={address}
                        onChange={ev => setAddress(ev.target.value)}></Input>
                </FormGroup>
    
                
                <FormGroup className="col-sm-5">
                    <Label for="phonenum">Phone Number</Label>
                    <Input type="phonenum" name="phonenum"
                        id="phonenum" placeholder="Phone Number" value={phonenum}
                        onChange={ev => setPhonenum(ev.target.value)}></Input>
                </FormGroup>
                {/* <FormGroup className="col-sm-5">
                    <Label for="accHolderid">AccountHolder-Id</Label>
                    <Input type="accHolderid" name="accHolderid"
                        id="accHolderid" placeholder="AccountHolder-Id" value={accHolderid}
                        onChange={ev => setAccHolderid(ev.target.value)}></Input>
                </FormGroup> */}

               
                <FormGroup className="col-sm-5" >
                    <Button type="submit" value="submit" color="primary">Submit</Button>
                </FormGroup>
            </Form>
        </div>
    );
}