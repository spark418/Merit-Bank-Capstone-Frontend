export default function DepositTransactionTypes() {
    return (
        <table className="table table-hover table-responsive ">
            <thead style={{ fontWeight: 600 }}>
                <tr>
                    <td>#</td>
                    <td>Transaction Type</td>
                </tr>
                <tr>
                <td>1</td>
                    <td>Cash</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Check</td>
                </tr>
                <tr>
                <td>3</td>
                    <td>ATM</td>
                </tr>
                
                <tr>
                <td>4</td>
                    <td>Transfers</td>
                </tr>
            </thead>

        </table>
    );
}

