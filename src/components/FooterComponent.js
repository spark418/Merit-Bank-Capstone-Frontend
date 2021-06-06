import React from 'react';

function Footer() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <hr/>
                        <a className="btn btn-social-icon btn-google btn-xs" href="http://google.com/+"><i className="fa fa-google-plus"> </i></a>
                        <a className="btn btn-social-icon btn-facebook btn-xs" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"> </i> </a>
                        <a className="btn btn-social-icon btn-linkedin btn-xs" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"> </i></a>
                        <a className="btn btn-social-icon btn-twitter btn-xs" href="http://twitter.com/"><i className="fa fa-twitter"> </i></a>
                        <a className="btn btn-social-icon btn-google btn-xs" href="http://youtube.com/"><i className="fa fa-youtube"> </i></a>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-auto">
                    <p>©2021 The Merit Bank Services. All rights reserved.</p>
                </div>
            </div>

        </div>
    );
}
export default Footer;