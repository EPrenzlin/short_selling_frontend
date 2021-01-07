import React, {Component} from 'react' 
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default class ExemptionSingle extends Component{

state = {
    likes: 0 
}

    onClick = (event) =>{
        event.preventDefault() 
        console.log(this.props.exemption.id)
        this.props.deleteExemption(this.props.exemption.id)
    }


    onLike = (event) => {
        event.preventDefault() 
        this.setState({
            likes: this.state.likes +1 
        })
    }


render(){
    return(
        <div> 
        <Card className ="text-center" style={{ width: '21rem' }}>
        <Card.Body>
            <Card.Title>{this.props.exemption.name}</Card.Title>
            <Card.Text>
            ISIN: {this.props.exemption.isin} <br/>
            Stock Market: {this.props.exemption.stock_market} <br/> 
            <Button variant="primary" size='sm' onClick={this.onClick}>Remove from DB</Button> <br/> 
            <Button variant="dark" size='sm' onClick={this.onLike}>Like me: {this.state.likes} </Button> <br/> 
            </Card.Text>
        </Card.Body>
        </Card>
        </div>
    )
}
}

