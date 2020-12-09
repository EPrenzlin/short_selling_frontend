// idea is to iterate over the mass list of exmeptions, and display each one in the form of a card ( like pokemon basically ) 
import React, {Component} from 'react' 

export default class ExemptionSingle extends Component{
render(){
    return(
        <div>
        <li>
        NAME: {this.props.exemption.name}<br/>
        ISIN: {this.props.exemption.isin} <br/> 
        Stock Market: {this.props.exemption.stock_market}<br/>
        </li>
        </div>
    )
}
}