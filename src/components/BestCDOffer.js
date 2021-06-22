import React, { Component, useState } from 'react';
import { Button, Form, FormGroup, Input, Label, Card } from 'reactstrap';
//import {baseUrl} from "../utils/constants";

const BEST_CDOFFERING_URL = process.env.REACT_APP_API_ENDPOINT+"bestcdofferings/{balance}";
const bearer = 'Bearer ' + localStorage.getItem('token');
export function BestCDOffer() {
    const [amount, setAmount] = useState("");

    const handleSubmit = async(event) => {
        event.preventDefault();
        alert("balance:" + amount);

        await fetch(BEST_CDOFFERING_URL.replace(`{balance}`, amount), {

            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': bearer
            },

        })
            .then(res => {
                if (res.ok) {
                    
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
            .then ((Object)=>{alert("Best CD Offering:\n Id:"+Object.id+"\n Term:"+ Object.term+"\n Interest Rate:"+Object.interestRate)})

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
                        value={amount} required

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