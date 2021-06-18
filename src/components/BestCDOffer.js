import React, { Component, useState } from 'react';
import { Button, Form, FormGroup, Input, Label, Card } from 'reactstrap';

const BEST_CDOFFERING_URL = "http://localhost:8080/bestcdofferings/{balance}";
const bearer = 'Bearer ' + localStorage.getItem('token');
export function BestCDOffer() {
    const [amount, setAmount] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("balance:" + amount);

        fetch(BEST_CDOFFERING_URL.replace(`{balance}`, amount), {

            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': bearer
            },

        })
            .then(res => {
                if (res.ok) {
                    //console.log(res.json());
                    alert(res);
                    return res;
                } else {
                    const error = new Error(`Error ${res.status}: ${res.statusText}`);
                    error.res = res;
                    throw error;
                }
            },
                error => {
                    throw error;
                }
            )
            .then(res => res.json())

            .catch((error) => {
                if (error.res.status == "400") {
                    alert('nError:')
                }
                if (error.res.status == "404") {
                    alert('\nError:')
                }
                if (error.res.status == "406") {
                    alert('\nError: ')
                }

            });
    }


    return (
        <Card>
            <Form className="login align-item-center" onSubmit={handleSubmit} >
                <h2>Get Best CDOffering</h2>
                <FormGroup className="col-md-6">
                    <Label htmlFor="amount">Enter Amount</Label>
                    <Input type="text" id="amount" name="amount" placeholder="Amount"
                        value={amount}

                        onChange={ev => setAmount(ev.target.value)}
                    />
                </FormGroup>
                <FormGroup className="col-md-3" >
                    <Button type="submit" value="submit" color="info" className="left" >Submit </Button>
                </FormGroup>
            </Form>
        </Card>
    )
}