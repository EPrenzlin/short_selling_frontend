import React, {Component} from 'react' 
import ExemptionSingle from './exemptionSingle' 
import Button from 'react-bootstrap/Button'
import DownloadCsv from'./DownloadCsv' 

export default class NewExemption extends Component{


    refresh = () => {
        console.log("I am being pressed")
        this.props.refreshExemption() 
    }

    render(){
        return( 
            <ul> 
        <DownloadCsv exemptions={this.props.exemptions}/> 
        <Button variant="outline-warning" onClick={this.refresh}>Refresh</Button>{' '}
        {this.props.exemptions.map(exemption => {
        return <ExemptionSingle exemption ={exemption} key={exemption.id} deleteExemption={this.props.deleteExemption}/> 
            })}
             </ul>
        )
      
    }
}
