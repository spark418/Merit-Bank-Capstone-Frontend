import React, { Component } from 'react';
import {  Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { baseUrl } from '../utils/constants';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            token: null,
            role: null
        }
    }
    handleChange = (event) => {
        const val = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: val
        })
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        //alert("Username: " + this.state.username + " Password: " + this.state.password);
        var payload = {
            "username": this.state.username,
            "password": this.state.password
        }
        console.log(process.env.REACT_APP_API_ENDPOINT+"authenticate")
       await  fetch(process.env.REACT_APP_API_ENDPOINT+"authenticate", {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
            .then(Object => {
                this.setState({
                    token: Object.jwt,
                    role: Object.roles
                });
                localStorage.setItem('token',this.state.token);
                localStorage.setItem('role',this.state.role);
                localStorage.setItem('username',this.state.username);
                console.log(this.state.token);
                console.log(this.state.role);

                if (this.state.token != null) {

                    if (this.state.role == "[ROLE_ADMIN]") {
                        this.props.history.push("/admin");
                    } else {
                        this.props.history.push("/user");
                    }
                } else {
                    this.props.history.push("/login");
                    alert("not authorized");
                }
            })
            .catch(err => console.log(err.message));    
    };

    render() {
        return (
            <div className="container" >
                <img src="../images/userlogo.jpg" height="150" width="150" alt="UserLogo" id="logo" href="/" />
                <Form className="login" onSubmit={this.handleSubmit}>
                    <FormGroup className="col-sm-5">
                        <Label htmlFor="username">Username</Label>
                        <Input type="text" id="username" name="username" required placeholder="Enter username"
                            innerRef={(input) => this.username = input}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup className="col-sm-5">
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" name="password" required placeholder="Enter password"
                            innerRef={(input) => this.password = input}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup className="col-sm-5" >
                        <Button type="submit" value="submit" color="primary"  className="left">LogIn</Button>
    
                    </FormGroup>
                </Form>
            </div>
        );
    }
}
export default Login;

