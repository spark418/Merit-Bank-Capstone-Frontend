import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Input, Label, Card, CardBody } from 'reactstrap';
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

    handleSubmit = (event) => {
        event.preventDefault();
        alert("Username: " + this.state.username + " Password: " + this.state.password);
        var payload = {
            "username": this.state.username,
            "password": this.state.password
        }
        fetch(baseUrl + 'authenticate', {
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
                        <Input type="text" id="username" name="username" placeholder="Enter username"
                            innerRef={(input) => this.username = input}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup className="col-sm-5">
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" name="password" placeholder="Enter password"
                            innerRef={(input) => this.password = input}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup className="col-sm-5" >
                        <Button type="submit" value="submit" color="primary" className="left">LogIn</Button>
                        <Button type="submit" value="submit" color="danger" className="right">LogOut</Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}
export default Login;

