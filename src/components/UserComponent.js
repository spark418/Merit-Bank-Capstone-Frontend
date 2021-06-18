import React, { useState } from 'react';
import Logout from "./LogoutComponent";
import {
    Navbar, Row, Col, Jumbotron, NavbarBrand, Nav, NavItem, Button, Card,
    Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label,NavbarToggler, Collapse
} from 'reactstrap';
import { NavLink, Redirect } from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';
import {UserDetails} from './UserDetails';
function User({ authorized }) {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen)
    }
    if (authorized == null) {
        return <Redirect to="/login" />
    }
    const user = localStorage.getItem('username');
    return (
        <div className="container-fluid title">
            {/* <h2>Welcome {user} !</h2> */}

            
            
            <Navbar light expand="lg" sticky="top" className="usernavbar">

                <div className="container" >

                    <NavbarToggler onClick={toggleNav} />
                    <Collapse isOpen={isNavOpen} navbar>
            
                    





                    <Nav navbar>
                        <NavItem className="mr-4 mb-2">
                            <NavLink className="nav-link" to="/home">
                            <Button className="btn btn-info">       <span className="fa fa-money  text-white" >Transactions</span></Button>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav navbar>
                        <NavItem className="mr-4 mb-2">
                            <NavLink className="nav-link" to="/userCdoffering">
                          <Button className="btn btn-info">      <span className="fa fa-money  text-white"> CDOffering</span></Button>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav navbar>
                        <NavItem className="ml-10 mb-2">
                            <NavLink className="nav-link" to="/login">
                                <span className="fa fa-sign-out fa-lg text-white " ><Logout /></span>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    </Collapse>
                    </div>
                </Navbar>
                <Navbar light expand="lg" sticky="top">

                <div className="container" >

                    <NavbarToggler onClick={toggleNav} />
                    <Collapse isOpen={isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem  >
                         
                            <Dropdown className="mr-2">
                                <Dropdown.Toggle variant="info" id="dropdown-basic">
                                    DBA Checking Account
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/userAddDBACheckingAccount">Add Account</Dropdown.Item>
                                    <Dropdown.Item href="/userGetDBACheckingAccount">List of Accounts</Dropdown.Item>
                                    <Dropdown.Item href="/userDBACheckingDepositTransaction">Deposit</Dropdown.Item>
                                    <Dropdown.Item href="/userDBACheckingWithdrawTransaction">Withdraw</Dropdown.Item>
                                    <Dropdown.Item href="/userDBACheckingTransferTransaction">Transfer</Dropdown.Item>

                                </Dropdown.Menu>
                            </Dropdown>
                            
                 
                            </NavItem>

                        </Nav>
                        
                      <Nav navbar>
                            <NavItem className="mr-2">
                            <Dropdown>
                                <Dropdown.Toggle variant="info" id="dropdown-basic">
                                    Personal Checking Account
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/userAddPersonalCheckingAccount">Add Account</Dropdown.Item>
                                    <Dropdown.Item href="/userGetPersonalCheckingAccount">List of Accounts</Dropdown.Item>

                                </Dropdown.Menu>
                            </Dropdown>
                            </NavItem>

                        </Nav> 



                        <Nav navbar>
                            <NavItem className="mr-2">
                            <Dropdown>
                                <Dropdown.Toggle variant="info" id="dropdown-basic">
                                    Savings Account
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/userAddSavingsAccount">Add Account</Dropdown.Item>
                                    <Dropdown.Item href="/userGetSavingsAccount">List of Accounts</Dropdown.Item>

                                </Dropdown.Menu>
                            </Dropdown>
                            </NavItem>
                        </Nav>

                        <Nav navbar>
                            <NavItem className="mr-2">
                            <Dropdown>
                                <Dropdown.Toggle variant="info" id="dropdown-basic">
                                    CD Account
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/userAddCDAccount">Add Account</Dropdown.Item>
                                    <Dropdown.Item href="/userGetCDAccount">List of Accounts</Dropdown.Item>

                                </Dropdown.Menu>
                            </Dropdown>
                            </NavItem>
                        </Nav>

                        <Nav navbar>
                            <NavItem className="mr-2">
                            <Dropdown>
                                <Dropdown.Toggle variant="info" id="dropdown-basic">
                                    Roth IRA Account
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/userAddRothIRAAccount">Add Account</Dropdown.Item>
                                    <Dropdown.Item href="/userGetRothIRAAccount">List of Accounts</Dropdown.Item>

                                </Dropdown.Menu>
                            </Dropdown>
                            </NavItem>
                        </Nav>

                        <Nav navbar>
                            <NavItem className="mr-2">
                            <Dropdown>
                                <Dropdown.Toggle variant="info" id="dropdown-basic">
                                   Regular IRA Account
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/userAddRegularIRAAccount">Add Account</Dropdown.Item>
                                    <Dropdown.Item href="/userGetRegularIRAAccount">List of Accounts</Dropdown.Item>

                                </Dropdown.Menu>
                            </Dropdown>
                            </NavItem>
                        </Nav>
                        <Nav navbar>
                            <NavItem className="mr-2">
                            <Dropdown>
                                <Dropdown.Toggle variant="info" id="dropdown-basic">
                                   Rollover IRA Account
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/userAddRolloverIRAAccount">Add Account</Dropdown.Item>
                                    <Dropdown.Item href="/userGetRolloverIRAAccount">List of Accounts</Dropdown.Item>

                                </Dropdown.Menu>
                            </Dropdown>
                            </NavItem>
                        </Nav>
                        

                    </Collapse>
                </div>
            </Navbar>


               
            <h2>Welcome {user} !</h2>

            <div className="container ">
                <div className="row row-content">
                    <div className="col-md-5">
                    <UserDetails/> 
                    </div>
                </div>
            </div>

        </div>
    );
}


export default User;




