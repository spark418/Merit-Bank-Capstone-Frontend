import React,{Component} from 'react';
import { Button, Form, FormGroup, Input, Label, Card } from 'reactstrap';

import {Redirect} from'react-router-dom';
import { baseUrl } from '../utils/constants';

const CDOFFERING_URL = "http://localhost:8080/cdofferings";
const BEST_CDOFFERING_URL="http://localhost:8080/bestcdofferings/{balance}";
const bearer = 'Bearer ' + localStorage.getItem('token');

class AdminCDOffering extends Component {
    constructor(props){
        super(props);
        this.state = {
            cdoffer:[],
            amount:"",
            authorized: localStorage.getItem('token'),
            interestRate:"",
            term:""
        }
       
    }
    handleChange = (event) => {
        const val = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: val
        })
    };

    handleSubmit = async (event) => {
        
        event.preventDefault();
        alert("InterestRate: " + this.state.interestRate + " Term: " + this.state.term);
        var payload = {
            "interestRate": this.state.interestRate,
            "term": this.state.term
        }
        if(localStorage.getItem('roles')==["ROLE_ADMIN"]){
            await fetch(CDOFFERING_URL, {
                    method: 'POST',
                    body: JSON.stringify(payload),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': bearer
                    }
                })
                    .then(res => res.json())
                    .then(data => console.log(data))
                    
                
                    .catch(err => console.log(err.message));
        
            } else {
                alert("not authorized");
            }            
        
    }
   componentDidMount(){
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
        
         .then(data=> {this.setState({
                cdoffer: data
             });
            })
            
        .catch(err => console.log(err.message));
                 
    }

    getBestCDOffering =async () => {
        alert(this.state.amount);
       await fetch(BEST_CDOFFERING_URL.replace('{balance}',this.state.amount), {
             
             method: 'GET',
             headers: {
                 'Content-Type': 'application/json',
                 'Authorization': bearer
             },
         })
         
         .then(res => res.json())
         .then ((res)=>console.log(res.json))
         
        //   .then((res)=> alert(res.json))
             
              
         .catch(err => console.log(err.message));
                  
     }
    render(){
        if(this.state.authorized == null) {
            return <Redirect to="/login" />
        }
       
        return (
            <div className="container margin-auto">
                <div className="row">
                
                <div className="col-md-4 mt-5  text-center cdform">
                    <Card>
                <Form className="login align-item-center" onSubmit={this.handleSubmit}>
                    <h2>Add new CDOffering</h2>
                    <FormGroup className="col-md-6">
                        <Label htmlFor="rate">Enter Interest Rate</Label>
                        <Input type="text" id="rate" name="interestRate" placeholder="Interest Rate"
                            innerRef={(input) => this.interestRate = input}
                           
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup className="col-md-6">
                        <Label htmlFor="term">Enter term</Label>
                        <Input type="text" id="term" name="term" placeholder="term"
                            innerRef={(input) => this.term = input}
                           
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup className="col-md-3" >
                        <Button type="submit" value="submit" color="info" className="left">Submit </Button>
                     </FormGroup>
                </Form>
                </Card>
                </div>

                <div className="col-md-4">
                    <Card className='mt-3'>
                <h2 className="text-center mt-5">CDOfferings List</h2>
                <table className="table table-hover"  >
                    <thead style={{fontWeight:600}}>
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
                    <Card>
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
                    </Card>
                </div>
            </div>
            </div>
        )
    }
}

export default AdminCDOffering;