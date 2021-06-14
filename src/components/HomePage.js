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
                    <img width={900} height={500} alt="900x500" src="https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="https://images.unsplash.com/photo-1589666564459-93cdd3ab856a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fDkwMHg1MDAlMjBiYW5raW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="https://images.unsplash.com/photo-1541410702738-f87a5449e456?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
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
                    <div className="col-md-3">
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
                    <div className="col-md-3">
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
                    <div className="col-md-3">
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
