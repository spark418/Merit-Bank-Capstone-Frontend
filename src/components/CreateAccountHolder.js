import React, { useEffect, useState } from 'react';
import { Button,Form, FormGroup, Input, Label } from 'reactstrap';
import {baseUrl} from "../utils/constants";

function CreateAccountHolder() {
    const [firstname, setFirstname] = useState('');
    const [middlename, setMiddlename] = useState('');
    const [lastname, setLastname] = useState('');
    const [ssn, setSsn] = useState('');
    const [userid,setUserid] = useState('');

    const REGISTER_AH_URL="http://localhost:8080/accountholder";
    const bearer = 'Bearer ' + localStorage.getItem('token');

    const handleSubmit = async (event) => {
        event.preventDefault();
        alert("Firstname:" + firstname + " Middlename:"+ middlename + " Lastname: " + lastname + " SSN:" + ssn);
        var payload={
            "firstName": firstname,
            "middleName": middlename,
            "lastName": lastname,
            "ssn":ssn,
            "user" : {
                "id": userid
            }
            
        }
        await fetch(REGISTER_AH_URL,{

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
                alert(`Successfully registered a new Account Holder.\nPlease add the contact details`);
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
            if(error.res.status === "400"){
                alert('\nError: Excceds the maximum limit of accounts')
            } 
            if(error.res.status === "404"){
                alert('Account Holder could not be registered\nError: User not found')
            }
            if(error.res.status ==="406"){
                alert('Account Holder could not be registered\nError: Invalid details provided')
            }

        });
    }

    

    return (
        <div className="container mt-5">
           <h3>Create a new Account Holder</h3> 
            <Form onSubmit={handleSubmit} className="mt-5"> 
                <FormGroup className="col-sm-5" >
                    <Label for="firstname">Firstname</Label>
                    <Input type="firstname" name="firstname"
                        id="firstname" placeholder="firstname" value={firstname}
                        onChange={ev => setFirstname(ev.target.value)}></Input>
                </FormGroup>


                <FormGroup className="col-sm-5" >
                    <Label for="middlename">Middlename</Label>
                    <Input type="middlename" name="middlename"
                        id="middlename" placeholder="middlename" value={middlename}
                        onChange={ev => setMiddlename(ev.target.value)}></Input>
                </FormGroup>
    
                
                <FormGroup className="col-sm-5">
                    <Label for="lastname">Lastname</Label>
                    <Input type="lastname" name="lastname"
                        id="lastname" placeholder="lastname" value={lastname}
                        onChange={ev => setLastname(ev.target.value)}></Input>
                </FormGroup>

                <FormGroup className="col-sm-5" >
                    <Label for="ssn">SSN</Label>
                    <Input type="ssn" name="ssn"
                        id="ssn" placeholder="ssn" value={ssn}
                        onChange={ev => setSsn(ev.target.value)}></Input>
                </FormGroup>
                <FormGroup className="col-sm-5" >
                    <Label for="userid">User-id</Label>
                    <Input type="userid" name="userid"
                        id="userid" placeholder="user-id" value={userid}
                        onChange={ev => setUserid(ev.target.value)}></Input>
                </FormGroup>

                
               
               
                <FormGroup className="col-sm-5" >
                    <Button type="submit" value="submit" color="primary">Submit</Button>
                </FormGroup>
            </Form>
        </div>
    );
}
export default CreateAccountHolder;