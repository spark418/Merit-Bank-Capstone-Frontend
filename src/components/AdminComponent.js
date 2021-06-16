import React, { useState } from 'react';
import Logout from "./LogoutComponent";
import {
    Navbar, Row, Col, Jumbotron, NavbarBrand, Nav, NavItem, Button, Card,
    NavbarToggler, Collapse
} from 'reactstrap';
import { NavLink, Redirect } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

function Admin({ authorized }) {
    const[isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav=()=> {
        setIsNavOpen(!isNavOpen)
    }
    if (authorized != "[ROLE_ADMIN]") {
        return <Redirect to="/login" />
    }
    return (
        <React.Fragment>
                  
            <Navbar light expand ="lg" fixed-top>
              
                <div className="container" >

                <NavbarToggler onClick={toggleNav} />
                <Collapse isOpen={isNavOpen} navbar>
                    <Nav navbar>
                        <NavItem  >
                            <NavLink className="nav-link" to="/createuser">
                                <span className="fa fa-user  text-black navstyle">CreateUser</span>
                            </NavLink>
                        </NavItem>

                    </Nav>
                    <Nav navbar>
                        <NavItem className="mr-2">
                            <NavLink className="nav-link" to="/updateuser">
                                <span className="fa fa-user text-black navstyle">UpdateUser</span>
                            </NavLink>
                        </NavItem>

                    </Nav>

                    

                    <Nav navbar>
                        <NavItem className="mr-2">
                            <NavLink className="nav-link" to="/createaccountholder">
                                <span className="fa fa-user  text-black navstyle" >CreateAccountHolder</span>
                            </NavLink>
                            </NavItem>
                    </Nav>

                    <Nav navbar>
                       <NavItem className="mr-2">
                            <NavLink className="nav-link" to="/addaccountholdercontacts">
                                <span className="fa fa-address-card-o  text-black navstyle" >AddContacts</span>
                            </NavLink>
                            </NavItem>
                    </Nav>

                    <Nav navbar>
                    <NavItem className="mr-2">
                            <NavLink className="nav-link" to="/getaccountholders">

                                <span className="fa fa-user  text-black navstyle">ListAccountHolders </span>
                            </NavLink>
                            </NavItem>
                    </Nav>

                    <Nav navbar>
                        <NavItem className="mr-2">
                            <NavLink className="nav-link" to="/getaccountholder">
                                <span className="fa fa-money  text-black navstyle" >AccountHolderInfo</span>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav navbar>
                        <NavItem className="mr-2">
                            <NavLink className="nav-link" to="/cdoffering">
                                <span className="fa fa-money  text-black navstyle">CDOffering</span>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav navbar>
                        <NavItem className="mr-2">
                            <NavLink className="nav-link" to="/adminTransferTransaction">
                                <span className="fa fa-money  text-black navstyle">Transfer</span>
                            </NavLink>
                        </NavItem>
                    </Nav>

                    <Nav navbar>
                        <NavItem className="mr-2">
                            <NavLink className="nav-link" to="/login">
                                <span className="fa fa-sign-out fa-lg text-white" ><Logout /></span>
                            </NavLink>
                        </NavItem>
                    </Nav>

</Collapse>
                </div>
            </Navbar>
         

        

            <div className="container ">
                <div className="row row-content">
                    <div className="col-md-3">
                        <Card className="admindash">
                            <div
                                // className="bg-image card shadow-1-strong"
                                // style={{ backgroundImage: `url('https://av.sc.com/hk/content/images/hotpromotion-900x490-882x480.jpg')` }}
                            >
                                <div className="card-body text-white">
                                    <h5 className="card-title">DBA Checking Account</h5>
                                    <p className="card-text">

                                    </p>
                                    <div className="col">
                                        <a href="/addDBACheckingAccount" className="btn btn-outline-light ">Add Account</a><p></p>
                                        <a href="/getDBACheckingAccount" className="btn btn-outline-light">Get Accounts</a>
                                    </div>
                                    <div className="col">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="info" id="dropdown-basic" className="btn btn-outline-light mt-3">
                                                Transactions
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="/adminDBACheckingDepositTransaction" className="transact">Deposit Transaction</Dropdown.Item>
                                                <Dropdown.Item href="/adminDBACheckingWithdrawTransaction" className="transact">Withdraw Transaction</Dropdown.Item>
                                                <Dropdown.Item href="/adminDBACheckingGetTransaction" className="transact">Account Transactions</Dropdown.Item>

                                            </Dropdown.Menu>
                                        </Dropdown>

                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card className="admindash">
                            <div
                                //className="bg-image card shadow-1-strong"
                                // style={{ backgroundImage: `url('https://av.sc.com/hk/content/images/hotpromotion-900x490-882x480.jpg')` }}
                            >
                                <div className="card-body text-white">
                                    <h5 className="card-title">Personal Checking Acc</h5>
                                    <p className="card-text">

                                    </p>
                                    <div className="col">
                                        <a href="/addPersonalCheckingAccount" className="btn btn-outline-light ">Add Account</a><p></p>
                                        <a href="/getPersonalCheckingAccount" className="btn btn-outline-light">Get Accounts</a>
                                    </div>
                                    <div className="col">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="info" id="dropdown-basic" className="btn btn-outline-light mt-3">
                                                Transactions
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="/adminAddDBACheckingDepositTransaction" className="transact">Deposit Transaction</Dropdown.Item>
                                                <Dropdown.Item href="/adminAddWithdrawTransaction" className="transact">Withdraw Transaction</Dropdown.Item>
                                                <Dropdown.Item href="/adminAddAccountTransaction" className="transact">Account Transactions</Dropdown.Item>

                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card className="admindash">
                            <div
                                //className="bg-image card shadow-1-strong"
                                // style={{ backgroundImage: `url('https://av.sc.com/hk/content/images/hotpromotion-900x490-882x480.jpg')` }}
                            >
                                <div className="card-body text-white">
                                    <h5 className="card-title">Savings Account</h5>
                                    <p className="card-text">

                                    </p>
                                    <div className="col">
                                        <a href="/addSavingsAccount" className="btn btn-outline-light ">Add Account</a><p></p>
                                        <a href="/getSavingsAccount" className="btn btn-outline-light">Get Accounts</a>
                                    </div>
                                    <div className="col">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="info" id="dropdown-basic" className="btn btn-outline-light mt-3">
                                                Transactions
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="/adminAddDBACheckingDepositTransaction" className="transact">Deposit Transaction</Dropdown.Item>
                                                <Dropdown.Item href="/adminAddWithdrawTransaction" className="transact">Withdraw Transaction</Dropdown.Item>
                                                <Dropdown.Item href="/adminAddTransferTransaction" className="transact">Account Transactions</Dropdown.Item>

                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>


                    <div className="col-md-3 ">
                        <Card className="admindash">
                            <div
                                //className="bg-image card shadow-1-strong"
                                // style={{ backgroundImage: `url('https://av.sc.com/hk/content/images/hotpromotion-900x490-882x480.jpg')` }}
                            >
                                <div className="card-body text-white">
                                    <h5 className="card-title">CD Account</h5>
                                    <p className="card-text">

                                    </p>
                                    <div className="col">
                                        <a href="/addCDAccount" className="btn btn-outline-light ">Add Account</a><p></p>
                                        <a href="/getCDAccount" className="btn btn-outline-light">Get Accounts</a>
                                    </div>
                                    <div className="col">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="info" id="dropdown-basic" className="btn btn-outline-light mt-3">
                                                Transactions
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="/adminAddDBACheckingDepositTransaction" className="transact">Deposit Transaction</Dropdown.Item>
                                                <Dropdown.Item href="/adminAddWithdrawTransaction" className="transact">Withdraw Transaction</Dropdown.Item>
                                                <Dropdown.Item href="/adminAddTransferTransaction" className="transact">Account Transactions</Dropdown.Item>

                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>

                <div className="row row-content">
                    <div className="col-md-3">
                        <Card className="admindash">
                            <div
                                //className="bg-image card shadow-1-strong"
                                // style={{ backgroundImage: `url('https://av.sc.com/hk/content/images/hotpromotion-900x490-882x480.jpg')` }}
                            >
                                <div className="card-body text-white">
                                    <h5 className="card-title">Regular IRA Account</h5>
                                    <p className="card-text">

                                    </p>
                                    <div className="col">
                                        <a href="/addRegularIRAAccount" className="btn btn-outline-light ">Add Account</a><p></p>
                                        <a href="/getRegularIRAAccount" className="btn btn-outline-light">Get Accounts</a>
                                    </div>
                                    <div className="col">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="info" id="dropdown-basic" className="btn btn-outline-light mt-3">
                                                Transactions
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="/adminAddDBACheckingDepositTransaction" className="transact">Deposit Transaction</Dropdown.Item>
                                                <Dropdown.Item href="/adminAddWithdrawTransaction" className="transact">Withdraw Transaction</Dropdown.Item>
                                                <Dropdown.Item href="/adminAddTransferTransaction"className="transact">Account Transactions</Dropdown.Item>

                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>


                    <div className="col-md-3">
                        <Card className="admindash">
                            <div
                                //className="bg-image card shadow-1-strong"
                                // style={{ backgroundImage: `url('https://av.sc.com/hk/content/images/hotpromotion-900x490-882x480.jpg')` }}
                            >
                                <div className="card-body text-white">
                                    <h5 className="card-title">Roth IRA Account</h5>
                                    <p className="card-text">

                                    </p>
                                    <div className="col">
                                    <a href="/addRothIRAAccount" className="btn btn-outline-light ">Add Account</a><p></p>
                                    <a href="/getRothIRAAccount" className="btn btn-outline-light">Get Accounts</a>
                                    </div>
                                <div className="col">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="info" id="dropdown-basic" className="btn btn-outline-light mt-3">
                                            Transactions
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="/adminAddDBACheckingDepositTransaction"className="transact">Deposit Transaction</Dropdown.Item>
                                            <Dropdown.Item href="/adminAddWithdrawTransaction"className="transact">Withdraw Transaction</Dropdown.Item>
                                            <Dropdown.Item href="/adminAddTransferTransaction"className="transact">Account Transaction</Dropdown.Item>

                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card className="admindash">
                            <div
                                //className="bg-image card shadow-1-strong"
                                // style={{ backgroundImage: `url('https://av.sc.com/hk/content/images/hotpromotion-900x490-882x480.jpg')` }}
                            >
                                <div className="card-body text-white">
                                    <h5 className="card-title">Rollover IRA Account</h5>
                                    <p className="card-text">

                                    </p>
                                    <div className="col">
                                    <a href="/addRolloverIRAAccount" className="btn btn-outline-light ">Add Account</a><p></p>
                                    <a href="/getRolloverIRAAccount" className="btn btn-outline-light">Get Accounts</a>
                                </div>
                                <div className="col">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="info" id="dropdown-basic" className="btn btn-outline-light mt-3">
                                            Transactions
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="/adminAddDBACheckingDepositTransaction"className="transact">Deposit Transaction</Dropdown.Item>
                                            <Dropdown.Item href="/adminAddWithdrawTransaction"className="transact">Withdraw Transaction</Dropdown.Item>
                                            <Dropdown.Item href="/adminAddTransferTransaction"className="transact">Account Transaction</Dropdown.Item>

                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>

        {/* </div> */}
        </React.Fragment>
    );
}

export default Admin;


