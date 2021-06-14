import React,{Component} from 'react';
import { Button, Form, FormGroup, Input, Label, Card } from 'reactstrap';
import axios from 'axios';
import {Redirect} from'react-router-dom';
import { baseUrl } from '../utils/constants';

const CDOFFERING_URL = "http://localhost:8080/cdofferings";
const BEST_CDOFFERING_URL="http://localhost:8080/bestcdofferings/{balance}/";
const bearer = 'Bearer ' + localStorage.getItem('token');

class CDOffering extends Component {
    constructor(props){
        super(props);
        this.state = {
            cdoffer:[],
            amount:"",
            authorized: localStorage.getItem('token'),
            interestRate:"",
            term:"",
            bestCDOffer:null
        }
       
    }
    handleChange = (event) => {
        const val = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: val
        })
    };

    
   
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
         
         //.then(res => console.log(res.json()))
         .then (res=> {this.setState({
            bestCDOffer: res.json()
         });
        })
       // .then(()=> alert(this.state.bestCDOffer))
        .then(()=>console.log(this.state.bestCDOffer))
             
              
         .catch(err => console.log(err.message));
                  
     }
    render(){
        if(this.state.authorized == null) {
            return <Redirect to="/login" />
        }
       
        return (
            <div className="container margin-auto">
                <div className="row">
                
                

                <div className="col-md-4">
                    <Card>
                <h2 className="text-center mt-5">CDOfferings List</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Interest Rate</td>
                            <td>Term</td>
                        </tr>
                    </thead>
                     <tbody>
                        {
                            this.state.cdoffer.map(
                                cd => 
                                <tr key={cd.id}>
                                    <td>{cd.id}</td>
                                    <td>{cd.interestRate}</td>
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
                <div>
                    {this.state.getBestCDOffering}
                </div>
            </div>
            </div>
        )
    }
}

export default CDOffering;