import React, {Component} from 'react' 
import ExemptionSingle from './exemptionSingle' 
import Button from 'react-bootstrap/Button'
import { CSVLink } from 'react-csv'


export default class NewExemption extends Component{


    refresh = () => {
        console.log("I am being pressed")
        this.props.refreshExemption() 
    }

    render(){
        return( 
            <ul> 
        <CSVLink data ={this.props.exemptions} seperator={";"}>
        <Button variant="outline-success"> Download</Button>{' '}
        </CSVLink>
        <Button variant="outline-warning" onClick={this.refresh}>Refresh</Button>{' '}
        {this.props.exemptions.map(exemption => {
        return <ExemptionSingle exemption ={exemption} key={exemption.id} deleteExemption={this.props.deleteExemption}/> 
            })}
             </ul>
        )
      
    }
}
