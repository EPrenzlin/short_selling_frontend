import React, {Component} from 'react'
import ExemptionSingle from './exemptionSingle' 

export default class SearchResult extends Component{

    render(){
        return(
    <div> 
    {this.props.result.map(exemption => {
    return <ExemptionSingle exemption ={exemption} key={exemption.id} deleteExemption={this.props.deleteExemption}/>})}
    </div>
    )}
    }