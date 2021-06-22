import React from 'react';
// import Logout from "./LogoutComponent";
 import { Breadcrumb,BreadcrumbItem } from 'reactstrap';
 import { Link } from 'react-router-dom';
//import {baseUrl} from "../utils/constants";

export function UserAddAccount() {
    return (
        <div className="container ">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/user">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Add AccountS</BreadcrumbItem>
                </Breadcrumb>

                <hr />
            </div>
            <div className="row row-content">
                <div className="col-md-4">

                    <h5 >DBA Checking Account</h5>



                    <div className="col">
                        <a href="/userAddDBACheckingAccount" className="btn btn-dark ">Add Account</a>
                        
                    </div>
                </div>



                <div className="col-md-4">
                    
                                <h5 >Personal Checking Account</h5>
                               
                                <div className="col">
                                    <a href="/userAddPersonalCheckingAccount" className="btn btn-dark ">Add Account</a>
                                    
                            </div>
                       
                </div>
                <div className="col-md-4">
                    
                                <h5 >Savings Account</h5>
                              
                                <div className="col">
                                    <a href="/userAddSavingsAccount" className="btn btn-dark ">Add Account</a><p></p>
                                   
                        </div>
                  
                </div>
            </div>
            <div className="row row-content">
                <div className="col-md-4">
                    
                                <h5 >CD Account</h5>
                               
                                <div className="col">
                                    <a href="/userAddCDAccount" className="btn btn-dark ">Add Account</a><p></p>
                                    
                        </div>
                    
                </div>
                <div className="col-md-4 ">
                   
                                <h5 >Regular IRA Account</h5>
                               
                                <div className="col">
                                    <a href="/userAddRegularIRAAccount" className="btn btn-dark ">Add Account</a><p></p>
                                    
                        </div>
                    
                </div>
            </div>
            <div className="row row-content">
                <div className="col-md-4">
                   
                                <h5 >Roth IRA Account</h5>
                                <div className="col">
                                <a href="/userAddRothIRAAccount" className="btn btn-dark ">Add Account</a><p></p>
                                
                                </div>
                </div>
                <div className="col-md-4">
                    
                                <h5 className="card-title">Rollover IRA Account</h5>
                                <div className="col">
                                <a href="/userAddRolloverIRAAccount" className="btn btn-dark ">Add Account</a><p></p>
                                
                        </div>
                   
                </div>
           
        </div>
        </div>
    );
}

export function UserGetAccount() {
    
    return(
        <div className="container ">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/user">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active> AccountS List</BreadcrumbItem>
                </Breadcrumb>

                <hr />
            </div>
        <div className="row row-content">
            <div className="col-md-4">

                <h5 >DBA Checking Account</h5>



                <div className="col">
                    <a href="/userGetDBACheckingAccount" className="btn btn-dark ">List Account</a>
                </div>
            </div>



            <div className="col-md-4">
                
                            <h5 >Personal Checking Account</h5>
                           
                            <div className="col">
                                <a href="/userGetPersonalCheckingAccount" className="btn btn-dark ">List Account</a>
                                
                        </div>
                   
            </div>
            <div className="col-md-4">
                
                            <h5 >Savings Account</h5>
                          
                            <div className="col">
                                <a href="/userGetSavingsAccount" className="btn btn-dark ">List Account</a><p></p>
                               
                    </div>
              
            </div>
        </div>
        <div className="row row-content">
            <div className="col-md-4">
                
                            <h5 >CD Account</h5>
                           
                            <div className="col">
                                <a href="/userGetCDAccount" className="btn btn-dark ">List Account</a><p></p>
                                
                    </div>
                
            </div>
            <div className="col-md-4 ">
               
                            <h5 >Regular IRA Account</h5>
                           
                            <div className="col">
                                <a href="/userGetRegularIRAAccount" className="btn btn-dark ">List Account</a><p></p>
                                
                    </div>
                
            </div>
        </div>
        <div className="row row-content">
            <div className="col-md-4">
               
                            <h5 >Roth IRA Account</h5>
                            <div className="col">
                            <a href="/userGetRothIRAAccount" className="btn btn-dark ">List Account</a><p></p>
                            
                            </div>
            </div>
            <div className="col-md-4">
                
                            <h5 className="card-title">Rollover IRA Account</h5>
                            <div className="col">
                            <a href="/userGetRolloverIRAAccount" className="btn btn-dark ">List Account</a><p></p>
                            
                    </div>
               
            </div>
       
    </div>
    </div>
    );

}