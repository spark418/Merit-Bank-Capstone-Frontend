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
        <div className="container-fluid title">
            {/* <div className="row">
                <div className="col-md-8"> */}
            <Navbar dark sticky="top" >
                {/* <div className="container"> */}
                <div className="container-fluid" style={{ backgroundImage: `url('https://mdbcdn.b-cdn.net/img/new/slides/003.jpg')` }}>
                    {/* <NavbarBrand className="mr-auto" className="lg"></NavbarBrand> */}
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
                            <NavLink className="nav-link" to="/addaccountholdercontacts">
                                <span className="fa fa-address-card-o fa-lg text-white" >Add AccountHolder Contacts</span>
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
                            <NavLink className="nav-link" to="/user">
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
                    <Nav navbar>
                        <NavItem className="mr-4">
                            <NavLink className="nav-link" to="/login">
                                <span className="fa fa-sign-out fa-lg text-white" ><Logout /></span>
                            </NavLink>
                        </NavItem>
                    </Nav>


                </div>
            </Navbar>

            {/* </div> */}
            <div className="container ">
                <div className="row row-content">
                    <div className="col-md-4">
                        <Card>
                            <div
                                className="bg-image card shadow-1-strong"
                                style={{ backgroundImage: `url('https://mdbcdn.b-cdn.net/img/new/slides/003.jpg')` }}
                            >
                                <div className="card-body text-white">
                                    <h5 className="card-title">DBA Checking Account</h5>
                                    <p className="card-text">

                                    </p>
                                    <div className="col">
                                        <a href="/addDBACheckingAccount" className="btn btn-outline-light ">Add Account</a><p></p>
                                        <a href="/getDBACheckingAccount" className="btn btn-outline-light">Get Accounts</a>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <div
                                className="bg-image card shadow-1-strong"
                                style={{ backgroundImage: `url('https://mdbcdn.b-cdn.net/img/new/slides/003.jpg')` }}
                            >
                                <div className="card-body text-white">
                                    <h5 className="card-title">Personal Checking Account</h5>
                                    <p className="card-text">

                                    </p>
                                    <div className="col">
                                        <a href="/addPersonalCheckingAccount" className="btn btn-outline-light ">Add Account</a><p></p>
                                        <a href="/getPersonalCheckingAccount" className="btn btn-outline-light">Get Accounts</a>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <div
                                className="bg-image card shadow-1-strong"
                                style={{ backgroundImage: `url('https://mdbcdn.b-cdn.net/img/new/slides/003.jpg')` }}
                            >
                                <div className="card-body text-white">
                                    <h5 className="card-title">Savings Account</h5>
                                    <p className="card-text">

                                    </p>
                                    <div className="col">
                                        <a href="/addSavingsAccount" className="btn btn-outline-light ">Add Account</a><p></p>
                                        <a href="/getSavingsAccount" className="btn btn-outline-light">Get Accounts</a>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
                <div row row-content> 
                    <div className="col-md-4 ">
                        <Card>
                            <div
                                className="bg-image card shadow-1-strong"
                                style={{ backgroundImage: `url('https://mdbcdn.b-cdn.net/img/new/slides/003.jpg')` }}
                            >
                                <div className="card-body text-white">
                                    <h5 className="card-title">CD Account</h5>
                                    <p className="card-text">

                                    </p>
                                    <div className="col">
                                        <a href="/addCDAccount" className="btn btn-outline-light ">Add Account</a><p></p>
                                        <a href="/getCDAccount" className="btn btn-outline-light">Get Accounts</a>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <div
                                className="bg-image card shadow-1-strong"
                                style={{ backgroundImage: `url('https://mdbcdn.b-cdn.net/img/new/slides/003.jpg')` }}
                            >
                                <div className="card-body text-white">
                                    <h5 className="card-title">Regular IRA Account</h5>
                                    <p className="card-text">

                                    </p>
                                    <div className="col">
                                        <a href="/addRegularIRAAccount" className="btn btn-outline-light ">Add Account</a><p></p>
                                        <a href="/getRegularIRAAccount" className="btn btn-outline-light">Get Accounts</a>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                   </div>
                    <div row row-content> 
                    <div className="col-md-4">
                        <Card>
                            <div
                                className="bg-image card shadow-1-strong"
                                style={{ backgroundImage: `url('https://mdbcdn.b-cdn.net/img/new/slides/003.jpg')` }}
                            >
                                <div class="card-body text-white">
                                    <h5 className="card-title">Roth IRA Account</h5>
                                    <p className="card-text">

                                    </p>
                                    <a href="/addRothIRAAccount" className="btn btn-outline-light ">Add Account</a><p></p>
                                    <a href="/getRothIRAAccount" className="btn btn-outline-light">Get Accounts</a>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <div
                                className="bg-image card shadow-1-strong"
                                style={{ backgroundImage: `url('https://mdbcdn.b-cdn.net/img/new/slides/003.jpg')` }}
                            >
                                <div class="card-body text-white">
                                    <h5 className="card-title">Rollover IRA Account</h5>
                                    <p className="card-text">

                                    </p>
                                    <a href="/addRolloverIRAAccount" className="btn btn-outline-light ">Add Account</a><p></p>
                                    <a href="/getRolloverIRAAccount" className="btn btn-outline-light">Get Accounts</a>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Admin;


