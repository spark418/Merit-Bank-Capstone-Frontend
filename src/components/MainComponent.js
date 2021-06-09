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
                    <Redirect to="/login" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(Main);