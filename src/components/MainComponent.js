import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Welcome from './HomePage';
import Login from './LoginComponent';
import Admin from './AdminComponent';
import User from './UserComponent';
import AdminCDOffering from './AdminCDOfferingComponent';
import UserCDOffering from './UserCDOfferingComponent';
import AccountHoldersList from './AccountHoldersList';
import {CreateUser} from './CreateUpdateUser';
import {UpdateUser} from './CreateUpdateUser';
import {CreateAccountHolder} from './CreateUpdateAccountHolder';
import {UpdateAccountHolder} from './CreateUpdateAccountHolder';
import {CreateAccountHolderContactDetails} from './CreateUpdateAccountHoderContactDetails';
import {UpdateAccountHolderContactDetails} from './CreateUpdateAccountHoderContactDetails';
import {GetAccountHolder} from './AccountHolderInfo';

import {AddPersonalCheckingAccount} from './PersonalCheckingAccount';
import {GetPersonalCheckingAccount} from './PersonalCheckingAccount';
import {AddDBACheckingAccount} from './DBACheckingAccount';
import {GetDBACheckingAccount} from './DBACheckingAccount';
import {AddSavingsAccount} from './SavingsAccount';
import {GetSavingsAccount} from './SavingsAccount';
import {AddRegularIRAAccount} from './RegularIRAAccount';
import {GetRegularIRAAccount} from './RegularIRAAccount';
import {AddRolloverIRAAccount} from './RolloverIRAAccount';
import {GetRolloverIRAAccount} from './RolloverIRAAccount';
import {AddRothIRAAccount} from './RothIRAAccount';
import {GetRothIRAAccount} from './RothIRAAccount';
import {AddCDAccount} from './CDAccount';
import {GetCDAccount} from './CDAccount';

import {UserAddDBACheckingAccount} from './UserDBACheckingAccount';
import {UserGetDBACheckingAccount} from './UserDBACheckingAccount';
import {UserAddPersonalCheckingAccount} from './UserPersonalCheckingAccount';
import {UserGetPersonalCheckingAccount} from './UserPersonalCheckingAccount';
import {UserAddSavingsAccount} from './UserSavingsAccount';
import {UserGetSavingsAccount} from './UserSavingsAccount';
import {UserAddCDAccount} from './UserCDAccount';
import {UserGetCDAccount} from './UserCDAccount';
import {UserAddRothIRAAccount} from './UserRothIRAAccount';
import {UserGetRothIRAAccount} from './UserRothIRAAccount';
import {UserAddRegularIRAAccount} from './UserRegularIRAAccount';
import {UserGetRegularIRAAccount} from './UserRegularIRAAccount';
import {UserAddRolloverIRAAccount} from './UserRolloverIRAAccount';
import {UserGetRolloverIRAAccount} from './UserRolloverIRAAccount';

import {AddAccount} from './AccountsComponent';
import {GetAccount} from './AccountsComponent';

import {UserAddAccount} from './UserAccountsComponent';
import {UserGetAccount} from './UserAccountsComponent';

import {AdminTransferTransaction} from './AdminTransferTransaction';
 import {DBACheckingDepositTransaction} from './AdminDBACheckingTransaction';
 import {DBACheckingWithdrawTransaction} from './AdminDBACheckingTransaction';
 import {DBACheckingGetTransaction} from './AdminDBACheckingTransaction';

//  import {PersonalCheckingDepositTransaction} from './AdminPersonalCheckingTransaction';
//  import {PersonalCheckingWithdrawTransaction} from './AdminPersonalCheckingTransaction';
//  import {PersonalCheckingGetTransaction} from './AdminPersonalCheckingTransaction';

//  import {CDDepositTransaction} from './AdminCDTransaction';
//  import {CDWithdrawTransaction} from './AdminCDTransaction';
//  import {CDGetTransaction} from './AdminCDTransaction';

//  import {SavingsDepositTransaction} from './AdminSavingsTransaction';
//  import {SavingsWithdrawTransaction} from './AdminSavingsTransaction';
//  import {SavingsGetTransaction} from './AdminSavingsTransaction';

//  import {RolloverIRADepositTransaction} from './AdminRolloverIRATransaction';
//  import {RolloverIRAWithdrawTransaction} from './AdminRolloverIRATransaction';
//  import {RolloverIRAGetTransaction} from './AdminRolloverIRATransaction';

//  import {RegularIRADepositTransaction} from './AdminRegularIRATransaction';
//  import {RegularIRAWithdrawTransaction} from './AdminRegularIRATransaction';
//  import {RegularIRAGetTransaction} from './AdminRegularIRATransaction';

//  import {RothIRADepositTransaction} from './AdminRothIRATransaction';
//  import {RothIRAWithdrawTransaction} from './AdminRothIRATransaction';
//  import {RothIRAGetTransaction} from './AdminRothIRATransaction';

 import {UserDBACheckingDepositTransaction} from './UserDBACheckingTransaction';
 import {UserDBACheckingWithdrawTransaction} from './UserDBACheckingTransaction';
 import {UserDBACheckingTransferTransaction} from './UserDBACheckingTransaction'
  
 

import { Switch, Route, Redirect, withRouter, Link } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route path="/login" component={Login} />
                    <Route path="/admin" component={()=><Admin authorized={localStorage.getItem('role')} />}/>
                    <Route path="/user" component={()=><User authorized={localStorage.getItem('token')} />}/>
                    <Route path="/createuser" component={CreateUser} />
                    <Route path="/updateuser" component={UpdateUser} />
                    <Route path="/cdoffering" component={AdminCDOffering} />
                    <Route path="/userCdoffering" component={UserCDOffering} />
                    <Route path="/getaccountholders" component={AccountHoldersList} />
                    <Route path="/createaccountholder" component={CreateAccountHolder} />
                    <Route path="/updateaccountholder" component={UpdateAccountHolder} />
                    <Route path="/addaccountholdercontacts" component={CreateAccountHolderContactDetails} />
                    <Route path="/updateaccountholdercontacts" component={UpdateAccountHolderContactDetails} />
                    <Route path="/getaccountholder" component={GetAccountHolder}/>

                    <Route path="/addPersonalCheckingAccount" component={AddPersonalCheckingAccount} />
                    <Route path="/getPersonalCheckingAccount" component={GetPersonalCheckingAccount} />
                    <Route path="/addDBACheckingAccount" component={AddDBACheckingAccount} />
                    <Route path="/getDBACheckingAccount" component={GetDBACheckingAccount} />
                    <Route path="/addSavingsAccount" component={AddSavingsAccount} />
                    <Route path="/getSavingsAccount" component={GetSavingsAccount} />
                    <Route path="/addRegularIRAAccount" component={AddRegularIRAAccount} />
                    <Route path="/getRegularIRAAccount" component={GetRegularIRAAccount} />
                    <Route path="/addRolloverIRAAccount" component={AddRolloverIRAAccount} />
                    <Route path="/getRolloverIRAAccount" component={GetRolloverIRAAccount} />
                    <Route path="/addRothIRAAccount" component={AddRothIRAAccount} />
                    <Route path="/getRothIRAAccount" component={GetRothIRAAccount} />
                    <Route path="/addCDAccount" component={AddCDAccount} />
                    <Route path="/getCDAccount" component={GetCDAccount} />
                    
                    <Route path="/userAddDBACheckingAccount" component={UserAddDBACheckingAccount} />
                    <Route path="/userGetDBACheckingAccount" component={UserGetDBACheckingAccount} />
                    <Route path="/userAddPersonalCheckingAccount" component={UserAddPersonalCheckingAccount} />
                    <Route path="/userGetPersonalCheckingAccount" component={UserGetPersonalCheckingAccount} />
                    <Route path="/userAddSavingsAccount" component={UserAddSavingsAccount} />
                    <Route path="/userGetSavingsAccount" component={UserGetSavingsAccount} />
                    <Route path="/userAddCDAccount" component={UserAddCDAccount} />
                    <Route path="/userGetCDAccount" component={UserGetCDAccount} />
                    <Route path="/userAddRegularIRAAccount" component={UserAddRegularIRAAccount} />
                    <Route path="/userGetRegularIRAAccount" component={UserGetRegularIRAAccount} />
                    <Route path="/userAddRolloverIRAAccount" component={UserAddRolloverIRAAccount} />
                    <Route path="/userGetRolloverIRAAccount" component={UserGetRolloverIRAAccount} />
                    <Route path="/userAddRothIRAAccount" component={UserAddRothIRAAccount} />
                    <Route path="/userGetRothIRAAccount" component={UserGetRothIRAAccount} />

                    <Route path="/addAccount" component={AddAccount}/>
                    <Route path="/getAccount" component={GetAccount}/>  
                    <Route path= "/userAddAccounts" component={UserAddAccount}/>
                    <Route path="/userGetAccounts" component={UserGetAccount}/>
                    
                    <Route path="/adminTransferTransaction" component={AdminTransferTransaction}/> 

                    <Route path="/adminDBACheckingDepositTransaction" component={DBACheckingDepositTransaction}/>
                    <Route path="/adminDBACheckingWithdrawTransaction" component={DBACheckingWithdrawTransaction}/>
                    <Route path="/adminDBACheckingGetTransaction" component={DBACheckingGetTransaction} />
                    {/* <Route path="/adminPersonalCheckingDepositTransaction" component={PersonalCheckingDepositTransaction}/>
                    <Route path="/adminPersonalCheckingWithdrawTransaction" component={PersonalCheckingWithdrawTransaction}/>
                    <Route path="/adminPersonalCheckingGetTransaction" component={PersonalCheckingGetTransaction} />
                    <Route path="/adminCDDepositTransaction" component={CDDepositTransaction}/>
                    <Route path="/adminCDWithdrawTransaction" component={CDWithdrawTransaction}/>
                    <Route path="/adminCDGetTransaction" component={CDGetTransaction} />
                    <Route path="/adminSavingsDepositTransaction" component={SavingsDepositTransaction}/>
                    <Route path="/adminSavingsWithdrawTransaction" component={SavingsWithdrawTransaction}/>
                    <Route path="/adminSavingsGetTransaction" component={SavingsGetTransaction} />
                    <Route path="/adminRolloverDepositTransaction" component={RolloverIRADepositTransaction}/>
                    <Route path="/adminRolloverWithdrawTransaction" component={RolloverIRAWithdrawTransaction}/>
                    <Route path="/adminRolloverGetTransaction" component={RolloverIRAGetTransaction} />
                    <Route path="/adminRothDepositTransaction" component={RothIRADepositTransaction}/>
                    <Route path="/adminRothWithdrawTransaction" component={RothIRAWithdrawTransaction}/>
                    <Route path="/adminRothGetTransaction" component={RothIRAGetTransaction} />
                    <Route path="/adminRegularDepositTransaction" component={RegularIRADepositTransaction}/>
                    <Route path="/adminRegularWithdrawTransaction" component={RegularIRAWithdrawTransaction}/>
                    <Route path="/adminRegularGetTransaction" component={RegularIRAGetTransaction} /> */}


                    <Route path="/userDBACheckingDepositTransaction" component={UserDBACheckingDepositTransaction}/>
                    <Route path ="/userDBACheckingWithdrawTransaction" component={UserDBACheckingWithdrawTransaction}/>
                   <Route path="/userDBACheckingTransferTransaction" component={UserDBACheckingTransferTransaction}/>

                    
                    <Redirect to="/login" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(Main);