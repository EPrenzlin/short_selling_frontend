import React, {Component} from 'react' 
import Button from 'react-bootstrap/Button'

export default class SearchForm extends Component{
    
    state = {
        search:""
    }

handleChange = event => {
this.setState({search: event.target.value})
}

onSearch = (event) => {
    event.preventDefault() 
    this.props.searchItem(this.state.search) 
    this.setState({
        search:""
    })
}


render(){
return(
<div> 
<form className ="text-center" onSubmit={this.onSearch}>
        <label>
        Search Item:
        <input type="text" name="searchItem" value={this.state.search} onChange={this.handleChange}/>
        </label>
        <Button type="submit">Search</Button>
        </form> 
</div>
        )
    }
}

