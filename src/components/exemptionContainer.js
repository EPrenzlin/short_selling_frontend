import React, {Component} from 'react' 
import ExemptionSingle from './exemptionSingle' 
import DownloadCsv from'./DownloadCsv' 
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

export default class ExemptionList extends Component{

    sortExemptions = event => {
        console.log("I am being pressed")
        this.props.sortItems(this.props.exemptions) 
    }

    render(){
        return( 
            <div> 
            <DownloadCsv exemptions={this.props.exemptions}/> 
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


