import React, {Component} from 'react' 
import ExemptionSingle from './exemptionSingle' 
import Button from 'react-bootstrap/Button'
import { CSVLink } from "react-csv";
import DownloadCsv from'./DownloadCsv' 

export default class ExemptionList extends Component{

    render(){
        return( 
            <ul> 
            <DownloadCsv exemptions={this.props.exemptions}/> 
            {this.props.exemptions.map(exemption => {
            return <ExemptionSingle exemption ={exemption} key={exemption.id} deleteExemption={this.props.deleteExemption}/> 
            })}
            
             </ul>
        )
      
    }
}
