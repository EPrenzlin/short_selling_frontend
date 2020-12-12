import React, {Component} from 'react' 
import ExemptionSingle from './exemptionSingle' 
import DownloadCsv from'./DownloadCsv' 
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

export default class ExemptionList extends Component{

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
            {/* // {this.props.exemptions.map(exemption => { */}
            </div>
            // return <ExemptionSingle exemption ={exemption} key={exemption.id} deleteExemption={this.props.deleteExemption}/> 
            // })}
            
        )
      
    }
}
