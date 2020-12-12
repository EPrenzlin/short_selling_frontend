import React, {Component} from 'react' 
import ExemptionSingle from './exemptionSingle' 
import DownloadCsv from'./DownloadCsv' 

import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

export default class NewExemption extends Component{

    refresh = () => {
        console.log("I am being pressed")
        this.props.refreshExemption() 
    }

    render(){
        return( 
            <div> 
        <DownloadCsv exemptions={this.props.exemptions}/> 
        <Button variant="outline-warning" onClick={this.refresh}>Refresh</Button>{' '}
        <Container> 
        <Row md={3}> 
        {this.props.exemptions.map(exemption => {
        return <ExemptionSingle exemption ={exemption} key={exemption.id} deleteExemption={this.props.deleteExemption}/> 
            })} 
        </Row>
        </Container>

        </div>
        )
      
    }
}
