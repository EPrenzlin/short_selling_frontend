import React, {Component} from 'react' 
import ExemptionSingle from './exemptionSingle' 

export default class ExemptionList extends Component{

    render(){
        return( 
            <ul> 
            {this.props.exemptions.map(exemption => {
            return <ExemptionSingle exemption ={exemption} key={exemption.id}/> 
            })}
             </ul>
        )
      
    }
}

// render each isin like a card, and also have a delete function within each one that removes it from the db
// no edits, just add in another isin. 
// 
