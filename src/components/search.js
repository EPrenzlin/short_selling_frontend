import React, {Component} from 'react' 
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'

// import DownloadCsv from'./DownloadCsv' 

export default class SearchForm extends Component{

    beingPressed = () =>{
    }

    render(){
        return(
<div> 
<Form inline>
<Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Search Query</Form.Label>
    <Form.Control type="text" />
    </Form.Group>
<Button type="submit">Search</Button>
    </Form>
</div>
        )
    }
}


// const mapStateToProps = (state) => {
//     test:state.search
// }

// connect(mapStateToProps, null)(SearchForm)