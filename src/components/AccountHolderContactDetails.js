import React, { useEffect, useState } from 'react';
import { Button,Form, FormGroup, Input, Label } from 'reactstrap';

function AccountHolderContactDetails() {
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
            .then(res => res.json())
           
            .then(data=> console.log(data))
            .then(()=> alert(" AccountHolder Contact Details registered successfully!" ))
           
            .catch(err => console.log(err.message));
    }


    return (
        <div className="container mt-5">
            <Form onSubmit={handleSubmit}>
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
export default AccountHolderContactDetails;