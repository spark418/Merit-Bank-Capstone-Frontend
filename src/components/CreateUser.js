import React, { useEffect, useState } from 'react';
import { Button,Form, FormGroup, Input, Label } from 'reactstrap';
import {baseUrl} from "../utils/constants";

function CreateUser() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [active, setActive] = useState('true');
    const [role, setRole] = useState('');

    const REGISTER_URL="http://localhost:8080/authenticate/createuser";
    const bearer = 'Bearer ' + localStorage.getItem('token');

    

     const handleSubmit=  (event) => {
       event.preventDefault();
        alert("Username: " + username + " Password: " + password + " Active: " + active + " role: " +role);
        var payload = {
            "userName": username,
            "password": password,
            "active": active,
            "roles": role
        }
        

        fetch(REGISTER_URL, {

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
                alert(`Successfully updated the User!`);
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

        .catch((error) => {
            if (error.res.status == "400") {
                alert('\nError: ')
            }
            if (error.res.status == "404") {
                alert('User could not be updated\nError:')
            }
            if (error.res.status == "406") {
                alert('User could not be updated\nError: Invalid details provided')
            }

        });
    }

    return (
        <div className="container mt-5">
            <Form onSubmit={handleSubmit}>
                <FormGroup className="col-sm-5" >
                    <Label for="username">Username</Label>
                    <Input type="username" name="username"
                        id="username" placeholder="Username" value={username}
                        onChange={ev => setUsername(ev.target.value)}></Input>
                </FormGroup>

                <FormGroup className="col-sm-5">
                    <Label for="password">Password</Label>
                    <Input type="password" name="password"
                        id="password" placeholder="Password" value={password}
                        onChange={ev => setPassword(ev.target.value)}></Input>
                </FormGroup>

                <FormGroup className="col-sm-5">
                    <Label for="Select">Active</Label>
                    <Input type="select" name="select" id="active" onChange={ev => setActive(ev.target.value)}>
                        <option>true</option>
                        <option>false</option>
                    </Input>
                </FormGroup>

                <FormGroup className="col-sm-5">
                    <Label for="Select">Select Role</Label>
                    <Input type="select" name="select" id="role" onChange={ev => setRole(ev.target.value)}>
                        <option>ROLE_ADMIN</option>
                        <option>ROLE_USER</option>
                    </Input>
                </FormGroup>
               
                <FormGroup className="col-sm-5" >
                    <Button type="submit" value="submit" color="primary">Submit</Button>
                </FormGroup>
            </Form>
        </div>
    );
}
export default CreateUser;