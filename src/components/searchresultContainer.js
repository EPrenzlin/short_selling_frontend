import React, {Component} from 'react'
import ExemptionSingle from './exemptionSingle' 
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import DownloadCsv from'./DownloadCsv' 

export default class SearchResult extends Component{
    


    refresh = () => {
        this.props.refreshExemption() 
    }

    render(){
        return(
    <div> 
    <DownloadCsv exemptions={this.props.result}/> 
    <Button variant="outline-warning"  size="sm" onClick={this.refresh}>Refresh the page</Button>{' '}
    <Container> 
    <Row md={3}> 
    {this.props.result.map(exemption => {
    return <ExemptionSingle exemption ={exemption} key={exemption.id} deleteExemption={this.props.deleteExemption}/>})}
    </Row>
    </Container>
    </div>
    )}
    }
