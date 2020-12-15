import React, {Component} from 'react'
import ExemptionSingle from './exemptionSingle' 
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import DownloadCsv from'./DownloadCsv' 

export default class SearchResult extends Component{
    
    onClick = (event) =>{
        event.preventDefault() 
        console.log(this.props.exemption.id)
        this.props.deleteExemption(this.props.exemption.id)
    }

    render(){
        return(
    <div> 
    <DownloadCsv exemptions={this.props.result}/> 
    <Container> 
    <Row md={3}> 
    {this.props.result.map(exemption => {
    return <ExemptionSingle exemption ={exemption} key={exemption.id} deleteExemption={this.props.deleteExemption}/>})}
    </Row>
    </Container>
    </div>
    )}
    }
