import React from 'react';
import { Card, CardBody } from 'reactstrap';

function Welcome() {
    return (
        <div className="container">
            <div className="row" id="welcomeText">
                <div className="col-md-12">
                    <h1>Welcome to your Most Trusted Bank!!</h1>
                    <h2>Join the MESH</h2>
                </div>
            </div>
            <div className="row cardStyle">
                <div className="col-md-4">
                    <Card >
                        <div
                            className="bg-image card shadow-1-strong"
                            style={{ backgroundImage: `url('https://mdbcdn.b-cdn.net/img/new/slides/003.jpg')` }}
                        >
                            <div class="card-body text-white">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">
                                    Some quick example text to build on the card title and make up the bulk of the
                                    card's content.
                                    </p>
                                <a href="#!" class="btn btn-outline-light">Button</a>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card>
                        <div
                            className="bg-image card shadow-1-strong"
                            style={{ backgroundImage: `url('https://mdbcdn.b-cdn.net/img/new/slides/003.jpg')` }}
                        >
                            <div class="card-body text-white">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">
                                    Some quick example text to build on the card title and make up the bulk of the
                                    card's content.
                                    </p>
                                <a href="#!" class="btn btn-outline-light">Button</a>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card>
                        <div
                            className="bg-image card shadow-1-strong"
                            style={{ backgroundImage: `url('https://mdbcdn.b-cdn.net/img/new/slides/003.jpg')` }}
                        >
                            <div class="card-body text-white">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">
                                    Some quick example text to build on the card title and make up the bulk of the
                                    card's content.
                                    </p>
                                <a href="#!" class="btn btn-outline-light">Button</a>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
export default Welcome;
