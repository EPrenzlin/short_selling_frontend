import React, {Component} from 'react' 
import ExemptionSingle from './exemptionSingle' 
import Button from 'react-bootstrap/Button'
import { CSVLink } from "react-csv";


export default class ExemptionList extends Component{

    render(){
        return( 
            <ul> 
        <CSVLink data ={this.props.exemptions} seperator={";"}>
        <Button variant="outline-success"> Download</Button>{' '}
        </CSVLink>
            {this.props.exemptions.map(exemption => {
            return <ExemptionSingle exemption ={exemption} key={exemption.id} deleteExemption={this.props.deleteExemption}/> 
            })}
            
             </ul>
        )
      
    }
}
