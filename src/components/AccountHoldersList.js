import React, {Component} from 'react';

class AccountHoldersList extends Component {
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <div className="container">
                <div className="row row-content">
                <div className="col-md-8">
                <h2 className="text-center mt-5">AccountHolders List</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>AccountHolder Id</td>
                            <td>First Name</td>
                            <td>Middle Name</td>
                            <td>Last Name</td>
                            <td>SSN</td>
                        </tr>
                    </thead>
                     <tbody>
                        
                    </tbody> 
                </table>
                </div>
                </div>
                </div>
        );

    }
}

export default AccountHoldersList;