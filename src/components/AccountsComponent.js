import React from 'react';
// import Logout from "./LogoutComponent";
 import { Breadcrumb,BreadcrumbItem} from 'reactstrap';
 import { Link } from 'react-router-dom';
//import {baseUrl} from "../utils/constants";

export function AddAccount() {
    return (
        <div className="container ">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/admin">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Add Accounts</BreadcrumbItem>
                </Breadcrumb>

                <hr />
            </div>
            <div className="row row-content">
                <div className="col-md-4">

                    <h5 >DBA Checking Account</h5>



                    <div className="col">
                        <a href="/addDBACheckingAccount" className="btn btn-dark ">Add Account</a>
                        
                    </div>
                </div>



                <div className="col-md-4">
                    
                                <h5 >Personal Checking Account</h5>
                               
                                <div className="col">
                                    <a href="/addPersonalCheckingAccount" className="btn btn-dark ">Add Account</a>
                                    
                            </div>
                       
                </div>
                <div className="col-md-4">
                    
                                <h5 >Savings Account</h5>
                              
                                <div className="col">
                                    <a href="/addSavingsAccount" className="btn btn-dark ">Add Account</a><p></p>
                                   
                        </div>
                  
                </div>
            </div>
            <div className="row row-content">
                <div className="col-md-4">
                    
                                <h5 >CD Account</h5>
                               
                                <div className="col">
                                    <a href="/addCDAccount" className="btn btn-dark ">Add Account</a><p></p>
                                    
                        </div>
                    
                </div>
                <div className="col-md-4 ">
                   
                                <h5 >Regular IRA Account</h5>
                               
                                <div className="col">
                                    <a href="/addRegularIRAAccount" className="btn btn-dark ">Add Account</a><p></p>
                                    
                        </div>
                    
                </div>
            </div>
            <div className="row row-content">
                <div className="col-md-4">
                   
                                <h5 >Roth IRA Account</h5>
                                <div className="col">
                                <a href="/addRothIRAAccount" className="btn btn-dark ">Add Account</a><p></p>
                                
                                </div>
                </div>
                <div className="col-md-4">
                    
                                <h5 className="card-title">Rollover IRA Account</h5>
                                <div className="col">
                                <a href="/addRolloverIRAAccount" className="btn btn-dark ">Add Account</a><p></p>
                                
                        </div>
                   
                </div>
           
        </div>
        </div>
    );
}

export function GetAccount() {
    
    return(
        <div className="container ">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/admin">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Account List</BreadcrumbItem>
                </Breadcrumb>

                <hr />
            </div>
        <div className="row row-content">
            <div className="col-md-4">

                <h5 >DBA Checking Account</h5>



                <div className="col">
                    <a href="/getDBACheckingAccount" className="btn btn-dark ">List Account</a>
                </div>
            </div>



            <div className="col-md-4">
                
                            <h5 >Personal Checking Account</h5>
                           
                            <div className="col">
                                <a href="/getPersonalCheckingAccount" className="btn btn-dark ">List Account</a>
                                
                        </div>
                   
            </div>
            <div className="col-md-4">
                
                            <h5 >Savings Account</h5>
                          
                            <div className="col">
                                <a href="/getSavingsAccount" className="btn btn-dark ">List Account</a><p></p>
                               
                    </div>
              
            </div>
        </div>
        <div className="row row-content">
            <div className="col-md-4">
                
                            <h5 >CD Account</h5>
                           
                            <div className="col">
                                <a href="/getCDAccount" className="btn btn-dark ">List Account</a><p></p>
                                
                    </div>
                
            </div>
            <div className="col-md-4 ">
               
                            <h5 >Regular IRA Account</h5>
                           
                            <div className="col">
                                <a href="/getRegularIRAAccount" className="btn btn-dark ">List Account</a><p></p>
                                
                    </div>
                
            </div>
        </div>
        <div className="row row-content">
            <div className="col-md-4">
               
                            <h5 >Roth IRA Account</h5>
                            <div className="col">
                            <a href="/getRothIRAAccount" className="btn btn-dark ">List Account</a><p></p>
                            
                            </div>
            </div>
            <div className="col-md-4">
                
                            <h5 className="card-title">Rollover IRA Account</h5>
                            <div className="col">
                            <a href="/getRolloverIRAAccount" className="btn btn-dark ">List Account</a><p></p>
                            
                    </div>
               
            </div>
       
    </div>
    </div>
    );

}