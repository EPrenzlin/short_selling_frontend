import './App.css';
import ExemptionForm from'./components/exemptionForm'
import ExemptionList from'./components/exemptionList' 
import {connect} from 'react-redux'
import React, {Component} from 'react'
import { getExemptions, addExemption } from './actions/exemptionActions'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CSVLink } from "react-csv";
import NavBar from './components/NavBar.js' 
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link> 



class App extends Component{
  
componentDidMount(){
  this.props.getExemptions() 
}

  render(){
  return (
  <div>     
      <Router> 
      <NavBar/>
      <Route exact path ="/new" render={() => <ExemptionForm addExemption ={this.props.addExemption}/>} /> 
      <Route exact path ="/home" render={() => <ExemptionList exemptions ={this.props.exemptions}/>} /> 
      <Route exact path ="/download" render={() => <CSVLink data={this.props.exemptions} seperator={";"}> Download to CSV</CSVLink>} /> 
      </Router>
      {/* <ExemptionForm addExemption ={this.props.addExemption}/> */}
      {/* <ExemptionList exemptions ={this.props.exemptions}/>  */}
      {/* <CSVLink data={this.props.exemptions} seperator={";"}> Download all the current isins </CSVLink> */}
  </div>
  )
  }  
}

const mapStateToProps = state =>{
  return {
    exemptions: state.exemptions
    }
}


export default connect(mapStateToProps,{getExemptions, addExemption})(App)

