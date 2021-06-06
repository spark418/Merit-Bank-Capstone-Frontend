import React from 'react';
import { Jumbotron,  Button } from 'reactstrap';

function Header() {
    return (
        <Jumbotron className="header" >
            <div className="row">
                <div className="col-sm-collapse col-md-3">
                    <img src="../images/logo2.png" height="100" width="150" alt="MeritBankLogo" href="/" />
                </div>
                <div className="col-md-7">
                    <img src="../images/Merit Bank Logo.png" height="100" width="450" alt="MeritBankTitle" />
                </div>
                <div className=" col-md-2" >
                    <a href="/login"><Button type="submit" value="submit" color="primary btn-outline" className="headerLogIn" ><span className="fa fa-sign-in fa-lg">SignIn</span></Button></a>
                </div>
            </div>
        </Jumbotron>

    );
}
export default Header;