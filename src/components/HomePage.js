import React, { Component } from 'react';

import { Card, CardBody, Button } from 'reactstrap';
import { Carousel } from 'react-bootstrap';

function Welcome() {
    
        return (
            <div className="container">
                <div className="row " id="welcomeText">
                    <div className="col-md-12">
                        <h1>Welcome to your Most Trusted Bank!!</h1>
                        <h2>Join the MESH</h2>
                        <a href="/login"><Button type="submit" value="submit" color="primary btn-outline" className="headerLogIn" ><span className="fa fa-sign-in fa-lg">SignIn</span></Button></a> 
                    </div>
                </div>
                <div className="row row-content" id="welcomeText">
                <div className="col-md-12">
            <Carousel >
                <Carousel.Item>
                    <img width={900} height={600} alt="900x600" src="images/coin-plants.jpg" />
                    <Carousel.Caption>
                        <h3 style={{ color:"white",fontSize:"30px",fontWeight:"bolder"}}> Grow your Investment</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={600} alt="900x600" src="images/atm.jpg" />
                    <Carousel.Caption>
                        <h3 style={{ color:"white",fontSize:"30px",fontWeight:"bolder"}}>Any Time Money</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={600} alt="900x600" src="images/personal-banking.jpg" />
                    <Carousel.Caption>
                        <h3 style={{ color:"white",fontSize:"30px",fontWeight:"bolder"}}>Checking, Credit Card, Investments</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
            </div>
                <div className="row row-content cardStyle">
                    <div className="col-md-3">
                        <Card >
                            <div
                                className="bg-image card shadow-1-strong"
                                style={{ backgroundImage: `url('https://mdbcdn.b-cdn.net/img/new/slides/003.jpg')` }}
                            >
                                <div className="card-body text-white">
                                    <h5 className="card-title">Checking</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </p>
                                    <a href="#!" className="btn btn-outline-light">Button</a>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card>
                            <div
                                className="bg-image card shadow-1-strong"
                                style={{ backgroundImage: `url('https://mdbcdn.b-cdn.net/img/new/slides/003.jpg')` }}
                            >
                                <div className="card-body text-white">
                                    <h5 className="card-title">Savings</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </p>
                                    <a href="#!" className="btn btn-outline-light">Button</a>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card>
                            <div
                                className="bg-image card shadow-1-strong"
                                style={{ backgroundImage: `url('https://mdbcdn.b-cdn.net/img/new/slides/003.jpg')` }}
                            >
                                <div class="card-body text-white">
                                    <h5 className="card-title">CD</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </p>
                                    <a href="#!" className="btn btn-outline-light">Button</a>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card>
                            <div
                                className="bg-image card shadow-1-strong"
                                style={{ backgroundImage: `url('https://mdbcdn.b-cdn.net/img/new/slides/003.jpg')` }}
                            >
                                <div className="card-body text-white">
                                    <h5 className="card-title">IRA</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </p>
                                    <a href="#!" className="btn btn-outline-light">Button</a>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        );
    
}
export default Welcome;
