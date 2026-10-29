export default  funtion InvoiceRow(props) {
    return <tr>
        <td>{props.data.customer.name}</td>
        <td>{props.data.amount}</td>
        <td>{props.data.issueData}</td>
        <td>{props.data.dueDate}</td>
        <td>{statusLabel(props.data.status)}</td>
        
    </tr>
}