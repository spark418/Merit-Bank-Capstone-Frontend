import React, { useState } from 'react';
import Logout from "./LogoutComponent";
import {
    Navbar, Row, Col, Jumbotron, NavbarBrand, Nav, NavItem, Button, Card,
    Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label
} from 'reactstrap';
import { NavLink, Redirect } from 'react-router-dom';

function User({authorized}) {
     
    if(authorized==null) {
        return <Redirect to="/login" />
    }
    const user=localStorage.getItem('username');
    return (
        <div className="container-fluid title">
           <h2>Welcome {user} !</h2>
            <Navbar dark sticky="top" >
              
                <div className="container-fluid" style={{ backgroundImage: `url('https://mdbcdn.b-cdn.net/img/new/slides/003.jpg')` }}>
                    
                   

                   

                    <Nav navbar>
                        <NavItem className="mr-4">
                            <NavLink className="nav-link" to="/userCdoffering">
                                <span className="fa fa-money fa-lg text-white"> CDOffering</span>
                            </NavLink>
                        </NavItem>
                    </Nav>

                    <Nav navbar>
                     <NavItem className="mr-4">
                         <NavLink className="nav-link" to="/userGetAccounts">

                             <span className="fa fa-user fa-lg text-white"> Account List</span>
                         </NavLink>
                     </NavItem>
                 </Nav>

                    <Nav navbar>
                     <NavItem className="mr-4">
                         <NavLink className="nav-link" to="/userAddAccounts">
                             <span className="fa fa-address-card-o fa-lg text-white" >Add Account</span>
                         </NavLink>
                     </NavItem>
                 </Nav>

                    {/* <Nav navbar>
                        <NavItem className="mr-4">
                            <NavLink className="nav-link" to="/addaccountholdercontacts">
                                <span className="fa fa-address-card-o fa-lg text-white" >Add AccountHolder Contacts</span>
                            </NavLink>
                        </NavItem>
                    </Nav> */}

                    {/* <Nav navbar>
                        <NavItem className="mr-4">
                            <NavLink className="nav-link" to="/getaccountholders">

                                <span className="fa fa-user fa-lg text-white"> Account Holders</span>
                            </NavLink>
                        </NavItem>
                    </Nav> */}

                    {/* <Nav navbar>
                        <NavItem className="mr-4">
                            <NavLink className="nav-link" to="/user">
                                <span className="fa fa-money fa-lg text-white" >Accounts/AH-id/Access</span>
                            </NavLink>
                        </NavItem>
                    </Nav> */}

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

            
            <div className="container ">
                <div className="row row-content">
                    <div className="col-md-4">
                        {/* <Card>
                            <div
                                className="bg-image card shadow-1-strong"
                                style={{ backgroundImage: `url('https://mdbcdn.b-cdn.net/img/new/slides/003.jpg')` }}
                            >
                                <div className="card-body text-white">
                                    <h5 className="card-title">DBA Checking Account</h5>
                                    <p className="card-text">

                                    </p>
                                    <div className="col">
                                        <a href="/userAddDBACheckingAccount" className="btn btn-outline-light ">Add Account</a><p></p>
                                        <a href="/userGetDBACheckingAccount" className="btn btn-outline-light">Get Accounts</a>
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
                                        <a href="/userAddPersonalCheckingAccount" className="btn btn-outline-light ">Add Account</a><p></p>
                                        <a href="/userGetPersonalCheckingAccount" className="btn btn-outline-light">Get Accounts</a>
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
                                        <a href="/userAddSavingsAccount" className="btn btn-outline-light ">Add Account</a><p></p>
                                        <a href="/userGetSavingsAccount" className="btn btn-outline-light">Get Accounts</a>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
                <div className="row row-content"> 
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
                                        <a href="/userAddCDAccount" className="btn btn-outline-light ">Add Account</a><p></p>
                                        <a href="/userGetCDAccount" className="btn btn-outline-light">Get Accounts</a>
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
                                        <a href="/userAddRegularIRAAccount" className="btn btn-outline-light ">Add Account</a><p></p>
                                        <a href="/userGetRegularIRAAccount" className="btn btn-outline-light">Get Accounts</a>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                   </div>
                    <div className="row row-content"> 
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
                                    <a href="/userAddRothIRAAccount" className="btn btn-outline-light ">Add Account</a><p></p>
                                    <a href="/userGetRothIRAAccount" className="btn btn-outline-light">Get Accounts</a>
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
                                    <a href="/userAddRolloverIRAAccount" className="btn btn-outline-light ">Add Account</a><p></p>
                                    <a href="/userGetRolloverIRAAccount" className="btn btn-outline-light">Get Accounts</a>
                                </div>
                            </div>
                        </Card> */}
                    </div>
                </div>
            </div>

        </div>
    );
}


export default User;




