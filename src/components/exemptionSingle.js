// idea is to iterate over the mass list of exmeptions, and display each one in the form of a card ( like pokemon basically ) 
import React, {Component} from 'react' 
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default class ExemptionSingle extends Component{

    onClick = (event) =>{
        event.preventDefault() 
        console.log(this.props.exemption.id)
        this.props.deleteExemption(this.props.exemption.id)
    }

render(){
    return(
        <div> 
        <Card style={{ width: '21rem' }}>
        <Card.Body>
            <Card.Title>{this.props.exemption.name}</Card.Title>
            <Card.Text>
            ISIN: {this.props.exemption.isin} <br/>
            Stock Market: {this.props.exemption.stock_market} <br/> 
            <Button variant="primary" size='sm' onClick={this.onClick}>Remove from DB</Button> 
            </Card.Text>
        </Card.Body>
        </Card>
        </div>


    )
}
}
