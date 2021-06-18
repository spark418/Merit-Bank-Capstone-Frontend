import React, { Component,useState } from 'react';
import { Button, Form, FormGroup, Input, Label, Card } from 'reactstrap';

import { Redirect } from 'react-router-dom';
import { baseUrl } from '../utils/constants';

import {BestCDOffer} from './BestCDOffer'

const CDOFFERING_URL = "http://localhost:8080/cdofferings";
const BEST_CDOFFERING_URL = "http://localhost:8080/bestcdofferings/{balance}";
const bearer = 'Bearer ' + localStorage.getItem('token');

class CDOffering extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cdoffer: [],
            amount: "",
            authorized: localStorage.getItem('token'),
            interestRate: "",
            term: "",
            bestCDOffer: null
        }

    }
    handleChange = (event) => {
        const val = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: val
        })
    };



    componentDidMount() {
        this.getCDOfferingList();

    }
    getCDOfferingList() {
        fetch(CDOFFERING_URL, {

            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': bearer
            },
        })
            .then(res => res.json())

            .then(data => {
                this.setState({
                    cdoffer: data
                });
            })

            .catch(err => console.log(err.message));

    }

    // getBestCDOffering = async () => {
    //     alert(this.state.amount);
    //     await fetch(BEST_CDOFFERING_URL.replace(`{balance}`, `${this.state.amount}`), {

    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': bearer
    //         },
    //     })

    //         .then(res => console.log(res))
    //         //  .then (res=> {this.setState({
    //         //     bestCDOffer: res
    //         //  });
    //         // })
    //         // .then(()=> alert(this.state.bestCDOffer))
    //         .then(() => alert(this.state.bestCDOffer))


    //         .catch(err => alert(err.message));

    // }
    render() {
        if (this.state.authorized == null) {
            return <Redirect to="/login" />
        }

        return (
            <div className="container margin-auto">
                <div className="row">



                    <div className="col-md-4">
                        <Card>
                            <h2 className="text-center mt-5">CDOfferings List</h2>
                            <table className="table table-hover"  >
                                <thead style={{ fontWeight: 600 }}>
                                    <tr>
                                        <td>Id</td>
                                        <td>Interest Rate %</td>
                                        <td>Term</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.cdoffer.map(
                                            cd =>
                                                <tr key={cd.id}>
                                                    <td>{cd.id}</td>
                                                    <td>{(Math.round(cd.interestRate * 100) / 100).toFixed(2)}</td>
                                                    <td>{cd.term}</td>
                                                </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </Card>
                    </div>

                    <div className="col-md-4 mt-5  text-center cdform">
                        {/* <Card>
                <Form className="login align-item-center" >
                    <h2>Get Best CDOffering</h2>
                    <FormGroup className="col-md-6">
                        <Label htmlFor="amount">Enter Amount</Label>
                        <Input type="text" id="amount" name="amount" placeholder="Amount"
                            innerRef={(input) => this.amount = input}
                           
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup className="col-md-3" >
                        <Button type="submit" value="submit" color="info" className="left" onClick={this.getBestCDOffering}>Submit </Button>
                     </FormGroup>
                    </Form>
                    </Card> */}
                    <BestCDOffer/>
                  </div> 
                    
                </div> 
            </div>
        )
    }
}

export default CDOffering;

// function BestCDOffer() {
//     const [amount, setAmount] = useState("");

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         alert("balance:" + amount);
        
//         await fetch(BEST_CDOFFERING_URL.replace(`{balance}`, amount), {

//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': bearer
//             },
//         })
//         .then(res=> {
//             if(res.ok){
//                 //console.log(res.json());
//                 alert(res);
//                 return res;
//             } else {
//                 const error = new Error(`Error ${res.status}: ${res.statusText}`);
//                 error.res = res;
//                 throw error ;
//             }
//         },
//         error=> { 
//             throw error;
//         }
//         )
//         .then(res => res.json())
       
//         .catch((error) => {
//             if(error.res.status == "400"){
//                 alert('nError:')
//             } 
//             if(error.res.status == "404"){
//                 alert('\nError:')
//             }
//             if(error.res.status == "406"){
//                 alert('\nError: ')
//             }

//         });
//     }
    
        
//             // .then(res => console.log(res))
//             // .then(res => {
//             //     setOffer({
//         //     bestCDOffer: res
//         //  });
//         // })
//        // .then(()=> alert(this.state.bestCDOffer))
        
            
//     return (
//                     <Card>
//                         <Form className="login align-item-center" onSubmit={handleSubmit} >
//                             <h2>Get Best CDOffering</h2>
//                             <FormGroup className="col-md-6">
//                                 <Label htmlFor="amount">Enter Amount</Label>
//                                 <Input type="text" id="amount" name="amount" placeholder="Amount"
//                                     value={amount}

//                                     onChange={ev => setAmount(ev.target.value)}
//                                 />
//                             </FormGroup>
//                             <FormGroup className="col-md-3" >
//                                 <Button type="submit" value="submit" color="info" className="left" >Submit </Button>
//                             </FormGroup>
//                         </Form>
//                     </Card>
//                 )
//             }