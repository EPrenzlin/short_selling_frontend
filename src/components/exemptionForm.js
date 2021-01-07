import React, {Component} from 'react' 
import Button from 'react-bootstrap/Button'
import {handleStateChange} from '../actions/exemptionActions'  
import {connect} from 'react-redux'

export default class exemptionForm extends Component{

    state = {
        name:"", 
        isin:"", 
        stock_market:""
    }

    onSubmit = event => {
        event.preventDefault()
        const exemption = {name:this.state.name, isin:this.state.isin, stock_market:this.state.stock_market}
        this.props.addExemption(exemption)
        this.setState({
            name:"", 
            isin:"",  
            stock_market:""
        })
    }
    
    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }


    render(){
        return(    
    <div> 
        <form className ="text-center" onSubmit={this.onSubmit}>
        <label>
        Name:
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
        </label>
        <label> 
        ISIN: 
        <input type="text" name ="isin" value={this.state.isin} onChange={this.handleChange} /> 
        </label> 
        <label> 
        Stock Market: 
        <input type ="text" name="stock_market" value={this.state.stock_market} onChange={this.handleChange} /> 
        </label>
        <Button type="submit">Create a New Exemption</Button>
        </form> 
</div>
        )
      
    }
}

