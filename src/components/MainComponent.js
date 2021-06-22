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
import { AccountUsersList } from './AccountUsersList';

import { CreateUser, UpdateUser } from './CreateUpdateUser';
import { CreateAccountHolder, UpdateAccountHolder } from './CreateUpdateAccountHolder';
import { CreateAccountHolderContactDetails, UpdateAccountHolderContactDetails } from './CreateUpdateAccountHoderContactDetails';

import { GetAccountHolder } from './AccountHolderInfo';

import { AddPersonalCheckingAccount, GetPersonalCheckingAccount, ClosePersonalCheckingAccount } from './PersonalCheckingAccount';
import { AddDBACheckingAccount, GetDBACheckingAccount,CloseDBACheckingAccount } from './DBACheckingAccount';
import { AddSavingsAccount, GetSavingsAccount,CloseSavingsAccount } from './SavingsAccount';
import { AddRegularIRAAccount, GetRegularIRAAccount,CloseRegularIRAAccount } from './RegularIRAAccount';
import { AddRolloverIRAAccount, GetRolloverIRAAccount,CloseRolloverIRAAccount } from './RolloverIRAAccount';
import { AddRothIRAAccount, GetRothIRAAccount,CloseRothIRAAccount } from './RothIRAAccount';
import { AddCDAccount, GetCDAccount,CloseCDAccount } from './CDAccount';

import { UserAddDBACheckingAccount, UserGetDBACheckingAccount } from './UserDBACheckingAccount';
import { UserAddPersonalCheckingAccount, UserGetPersonalCheckingAccount } from './UserPersonalCheckingAccount';
import { UserAddSavingsAccount, UserGetSavingsAccount } from './UserSavingsAccount';
import { UserAddCDAccount, UserGetCDAccount } from './UserCDAccount';
import { UserAddRothIRAAccount, UserGetRothIRAAccount } from './UserRothIRAAccount';
import { UserAddRegularIRAAccount, UserGetRegularIRAAccount } from './UserRegularIRAAccount';
import { UserAddRolloverIRAAccount, UserGetRolloverIRAAccount } from './UserRolloverIRAAccount';

import { AddAccount, GetAccount } from './AccountsComponent';
import { UserAddAccount, UserGetAccount } from './UserAccountsComponent';

import { AdminTransferTransaction } from './AdminTransferTransaction';
import { DBACheckingDepositTransaction, DBACheckingWithdrawTransaction, DBACheckingGetTransaction } from './AdminDBACheckingTransaction';
import { PersonalCheckingDepositTransaction, PersonalCheckingWithdrawTransaction, PersonalCheckingGetTransaction } from './AdminPersonalCheckingTransaction';
import { CDDepositTransaction, CDWithdrawTransaction, CDGetTransaction } from './AdminCDTransaction';
import { SavingsDepositTransaction, SavingsWithdrawTransaction, SavingsGetTransaction } from './AdminSavingsTransaction';
import { RolloverIRADepositTransaction, RolloverIRAWithdrawTransaction, RolloverIRAGetTransaction } from './AdminRolloverIRATransaction';
import { RegularIRADepositTransaction, RegularIRAWithdrawTransaction, RegularIRAGetTransaction } from './AdminRegularIRATransaction';
import { RothIRADepositTransaction, RothIRAWithdrawTransaction, RothIRAGetTransaction } from './AdminRothIRATransaction';


import { UserDBACheckingDepositTransaction, UserDBACheckingWithdrawTransaction, UserDBACheckingTransferTransaction, UserDBACheckingGetTransaction } from './UserDBACheckingTransaction';
import { UserSavingsDepositTransaction, UserSavingsWithdrawTransaction, UserSavingsTransferTransaction, UserSavingsGetTransaction } from './UserSavingsTransaction';
import { UserPersonalCheckingDepositTransaction, UserPersonalCheckingWithdrawTransaction, UserPersonalCheckingTransferTransaction, UserPersonalCheckingGetTransaction } from './UserPersonalCheckingTransaction';
import { UserCDDepositTransaction, UserCDWithdrawTransaction, UserCDTransferTransaction, UserCDGetTransaction } from './UserCDTransaction';
import { UserRolloverIRADepositTransaction, UserRolloverIRAWithdrawTransaction, UserRolloverIRATransferTransaction, UserRolloverIRAGetTransaction } from './UserRolloverIRATransaction';
import { UserRegularIRADepositTransaction, UserRegularIRAWithdrawTransaction, UserRegularIRATransferTransaction, UserRegularIRAGetTransaction } from './UserRegularIRATransaction';
import { UserRothIRADepositTransaction, UserRothIRAWithdrawTransaction, UserRothIRATransferTransaction, UserRothIRAGetTransaction } from './UserRothIRATransaction';




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
                    <Route path="/admin" component={() => <Admin authorized={localStorage.getItem('role')} />} />
                    <Route path="/user" component={() => <User authorized={localStorage.getItem('token')} />} />
                    <Route path="/createuser" component={CreateUser} />
                    <Route path="/updateuser" component={UpdateUser} />

                    <Route path="/cdoffering" component={AdminCDOffering} />
                    <Route path="/userCdoffering" component={UserCDOffering} />
                    <Route path="/getaccountholders" component={AccountHoldersList} />
                    <Route path="/getusers" component={AccountUsersList} />
                    <Route path="/createaccountholder" component={CreateAccountHolder} />
                    <Route path="/updateaccountholder" component={UpdateAccountHolder} />
                    <Route path="/addaccountholdercontacts" component={CreateAccountHolderContactDetails} />
                    <Route path="/updateaccountholdercontacts" component={UpdateAccountHolderContactDetails} />
                    <Route path="/getaccountholder" component={GetAccountHolder} />

                    <Route path="/addPersonalCheckingAccount" component={AddPersonalCheckingAccount} />
                    <Route path="/getPersonalCheckingAccount" component={GetPersonalCheckingAccount} />
                    <Route path="/closePersonalCheckingAccount" component={ClosePersonalCheckingAccount} />

                    <Route path="/addDBACheckingAccount" component={AddDBACheckingAccount} />
                    <Route path="/getDBACheckingAccount" component={GetDBACheckingAccount} />
                    <Route path="/closeDBACheckingAccount" component={CloseDBACheckingAccount} />

                    <Route path="/addSavingsAccount" component={AddSavingsAccount} />
                    <Route path="/getSavingsAccount" component={GetSavingsAccount} />
                    <Route path="/closeSavingsAccount" component={CloseSavingsAccount} />

                    <Route path="/addRegularIRAAccount" component={AddRegularIRAAccount} />
                    <Route path="/getRegularIRAAccount" component={GetRegularIRAAccount} />
                    <Route path="/closeRegularIRAAccount" component={CloseRegularIRAAccount} />

                    <Route path="/addRolloverIRAAccount" component={AddRolloverIRAAccount} />
                    <Route path="/getRolloverIRAAccount" component={GetRolloverIRAAccount} />
                    <Route path="/closeRolloverIRAAccount" component={CloseRolloverIRAAccount} />

                    <Route path="/addRothIRAAccount" component={AddRothIRAAccount} />
                    <Route path="/getRothIRAAccount" component={GetRothIRAAccount} />
                    <Route path="/closeRothIRAAccount" component={CloseRothIRAAccount} />

                    <Route path="/addCDAccount" component={AddCDAccount} />
                    <Route path="/getCDAccount" component={GetCDAccount} />
                    <Route path="/closeCDAccount" component={CloseCDAccount} />

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

                    <Route path="/addAccount" component={AddAccount} />
                    <Route path="/getAccount" component={GetAccount} />
                    <Route path="/userAddAccounts" component={UserAddAccount} />
                    <Route path="/userGetAccounts" component={UserGetAccount} />

                    <Route path="/adminTransferTransaction" component={AdminTransferTransaction} />

                    <Route path="/adminDBACheckingDepositTransaction" component={DBACheckingDepositTransaction} />
                    <Route path="/adminDBACheckingWithdrawTransaction" component={DBACheckingWithdrawTransaction} />
                    <Route path="/adminDBACheckingGetTransaction" component={DBACheckingGetTransaction} />
                    <Route path="/adminPersonalCheckingDepositTransaction" component={PersonalCheckingDepositTransaction} />
                    <Route path="/adminPersonalCheckingWithdrawTransaction" component={PersonalCheckingWithdrawTransaction} />
                    <Route path="/adminPersonalCheckingGetTransaction" component={PersonalCheckingGetTransaction} />
                    <Route path="/adminCDDepositTransaction" component={CDDepositTransaction} />
                    <Route path="/adminCDWithdrawTransaction" component={CDWithdrawTransaction} />
                    <Route path="/adminCDGetTransaction" component={CDGetTransaction} />
                    <Route path="/adminSavingsDepositTransaction" component={SavingsDepositTransaction} />
                    <Route path="/adminSavingsWithdrawTransaction" component={SavingsWithdrawTransaction} />
                    <Route path="/adminSavingsGetTransaction" component={SavingsGetTransaction} />
                    <Route path="/adminRolloverIRADepositTransaction" component={RolloverIRADepositTransaction} />
                    <Route path="/adminRolloverIRAWithdrawTransaction" component={RolloverIRAWithdrawTransaction} />
                    <Route path="/adminRolloverIRAGetTransaction" component={RolloverIRAGetTransaction} />
                    <Route path="/adminRothIRADepositTransaction" component={RothIRADepositTransaction} />
                    <Route path="/adminRothIRAWithdrawTransaction" component={RothIRAWithdrawTransaction} />
                    <Route path="/adminRothIRAGetTransaction" component={RothIRAGetTransaction} />
                    <Route path="/adminRegularIRADepositTransaction" component={RegularIRADepositTransaction} />
                    <Route path="/adminRegularIRAWithdrawTransaction" component={RegularIRAWithdrawTransaction} />
                    <Route path="/adminRegularIRAGetTransaction" component={RegularIRAGetTransaction} />


                    <Route path="/userDBACheckingDepositTransaction" component={UserDBACheckingDepositTransaction} />
                    <Route path="/userDBACheckingWithdrawTransaction" component={UserDBACheckingWithdrawTransaction} />
                    <Route path="/userDBACheckingTransferTransaction" component={UserDBACheckingTransferTransaction} />
                    <Route path="/userDBACheckingGetTransaction" component={UserDBACheckingGetTransaction} />

                    <Route path="/userPersonalCheckingDepositTransaction" component={UserPersonalCheckingDepositTransaction} />
                    <Route path="/userPersonalCheckingWithdrawTransaction" component={UserPersonalCheckingWithdrawTransaction} />
                    <Route path="/userPersonalCheckingTransferTransaction" component={UserPersonalCheckingTransferTransaction} />
                    <Route path="/userPersonalCheckingGetTransaction" component={UserPersonalCheckingGetTransaction} />

                    <Route path="/userSavingsDepositTransaction" component={UserSavingsDepositTransaction} />
                    <Route path="/userSavingsWithdrawTransaction" component={UserSavingsWithdrawTransaction} />
                    <Route path="/userSavingsTransferTransaction" component={UserSavingsTransferTransaction} />
                    <Route path="/userSavingsGetTransaction" component={UserSavingsGetTransaction} />

                    <Route path="/userCDDepositTransaction" component={UserCDDepositTransaction} />
                    <Route path="/userCDWithdrawTransaction" component={UserCDWithdrawTransaction} />
                    <Route path="/userCDTransferTransaction" component={UserCDTransferTransaction} />
                    <Route path="/userCDGetTransaction" component={UserCDGetTransaction} />

                    <Route path="/userRothIRADepositTransaction" component={UserRothIRADepositTransaction} />
                    <Route path="/userRothIRAWithdrawTransaction" component={UserRothIRAWithdrawTransaction} />
                    <Route path="/userRothIRATransferTransaction" component={UserRothIRATransferTransaction} />
                    <Route path="/userRothIRAGetTransaction" component={UserRothIRAGetTransaction} />

                    <Route path="/userRegularIRADepositTransaction" component={UserRegularIRADepositTransaction} />
                    <Route path="/userRegularIRAWithdrawTransaction" component={UserRegularIRAWithdrawTransaction} />
                    <Route path="/userRegularIRATransferTransaction" component={UserRegularIRATransferTransaction} />
                    <Route path="/userRegularIRAGetTransaction" component={UserRegularIRAGetTransaction} />

                    <Route path="/userRolloverIRADepositTransaction" component={UserRolloverIRADepositTransaction} />
                    <Route path="/userRolloverIRAWithdrawTransaction" component={UserRolloverIRAWithdrawTransaction} />
                    <Route path="/userRolloverIRATransferTransaction" component={UserRolloverIRATransferTransaction} />
                    <Route path="/userRolloverIRAGetTransaction" component={UserRolloverIRAGetTransaction} />



                    <Redirect to="/login" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(Main);