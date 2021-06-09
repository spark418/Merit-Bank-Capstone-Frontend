import React, { useState } from 'react';
import Logout from "./LogoutComponent";
import {
    Navbar, Row, Col, Jumbotron, NavbarBrand, Nav, NavItem, Button, Card,
    Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label
} from 'reactstrap';
import { NavLink, Redirect } from 'react-router-dom';

function Admin({ authorized }) {
    if (authorized != "[ROLE_ADMIN]") {
        return <Redirect to="/login" />
    }
    return (
        <div className="container-fluid">
            
                <Navbar dark sticky="top" >
                   
                        <div className="container-fluid" style={{ backgroundImage: `url('https://mdbcdn.b-cdn.net/img/new/slides/003.jpg')` }}>
                          
                            <Nav navbar>
                                <NavItem className="mr-4">
                                    <NavLink className="nav-link" to="/createuser">
                                        <span className="fa fa-user fa-lg text-white"> Create User</span>
                                    </NavLink>
                                </NavItem>

                            </Nav>

                            <Nav navbar>
                                <NavItem className="mr-4">
                                <NavLink className="nav-link" to="/cdoffering">
                                        <span className="fa fa-money fa-lg text-white"> CDOffering</span>
                                        </NavLink>
                                </NavItem>
                            </Nav>

                            <Nav navbar>
                                <NavItem className="mr-4">
                                    <NavLink className="nav-link" to="/createaccountholder">
                                        <span className="fa fa-user fa-lg text-white" >Create AccountHolder</span>
                                    </NavLink>
                                </NavItem>
                            </Nav>

                            <Nav navbar>
                                <NavItem className="mr-4">
                                <NavLink className="nav-link" to="/getaccountholders">
                                    
                                        <span className="fa fa-user fa-lg text-white"> Account Holders</span>
                                </NavLink>
                                </NavItem>
                            </Nav>

                            <Nav navbar>
                                <NavItem className="mr-4">
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-money fa-lg text-white" >Accounts/AH-id/Access</span>
                                    </NavLink>
                                </NavItem>
                            </Nav>

                            <Nav navbar>
                                <NavItem className="mr-4">
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-money fa-lg text-white" >Transactions</span>
                                    </NavLink>
                                </NavItem>
                            </Nav>


                        </div>
                    </Navbar>

               
                <div className="container">
                <div className="row row-content">
                    <div className="col-md-3">
                        <Card>
                            <div
                                className="bg-image card shadow-1-strong"
                                style={{ backgroundImage: `url('https://mdbcdn.b-cdn.net/img/new/slides/003.jpg')` }}
                            >
                                <div class="card-body text-white">
                                    <h5 class="card-title">Checking Account</h5>
                                    <p class="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </p>
                                    <a href="#!" class="btn btn-outline-light">Button</a>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card>
                            <div
                                className="bg-image card shadow-1-strong"
                                style={{ backgroundImage: `url('https://mdbcdn.b-cdn.net/img/new/slides/003.jpg')` }}
                            >
                                <div class="card-body text-white">
                                    <h5 class="card-title">Savings Account</h5>
                                    <p class="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </p>
                                    <a href="#!" class="btn btn-outline-light">Button</a>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card>
                            <div
                                className="bg-image card shadow-1-strong"
                                style={{ backgroundImage: `url('https://mdbcdn.b-cdn.net/img/new/slides/003.jpg')` }}
                            >
                                <div class="card-body text-white">
                                    <h5 class="card-title">CD Account</h5>
                                    <p class="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </p>
                                    <a href="#!" class="btn btn-outline-light">Button</a>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card>
                            <div
                                className="bg-image card shadow-1-strong"
                                style={{ backgroundImage: `url('https://mdbcdn.b-cdn.net/img/new/slides/003.jpg')` }}
                            >
                                <div class="card-body text-white">
                                    <h5 class="card-title">IRA Account</h5>
                                    <p class="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </p>
                                    <a href="#!" class="btn btn-outline-light">Button</a>
                                </div>
                            </div>
                        </Card>
                    </div>
                    </div>
                </div>


            
            <div className="row row-content">
            <div className="col-md-4">
                <Logout />
            </div>
            </div>
        </div>
    );
}

export default Admin;


