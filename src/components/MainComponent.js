import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Welcome from './HomePage';
import Login from './LoginComponent';
import Admin from './AdminComponent';
import User from './UserComponent';
import CDOffering from './CDOfferingComponent';
import AccountHoldersList from './AccountHoldersList';
import CreateUser from './CreateUser';
import AccountHolderContactDetails from './AccountHolderContactDetails';
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
                    <Route path="/cdoffering" component={CDOffering} />
                    <Route path="/getaccountholders" component={AccountHoldersList} />
                    <Route path="/createaccountholder" component={CreateUser} />
                    <Route path="/addaccountholdercontacts" component={AccountHolderContactDetails} />
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
                    <Redirect to="/login" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(Main);