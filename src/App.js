import './App.css';
import ExemptionForm from'./components/exemptionForm'
import ExemptionList from'./components/exemptionList' 
import NewExemptions from'./components/newexemptions' 

import ScrollToTop from './components/scrolltotop' 
import {connect} from 'react-redux'
import React, {Component} from 'react'
import { getExemptions, addExemption, deleteExemption, refreshExemption } from './actions/exemptionActions'
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
      <Route exact path ="/new" render={() => 
      <div> 
      <ExemptionForm addExemption ={this.props.addExemption}/> 
      <NewExemptions  deleteExemption={this.props.deleteExemption} exemptions={this.props.newExemptions} refreshExemption={this.props.refreshExemption}/> 
      </div>
      }/> 
      <Route exact path ="/home" render={() => <ExemptionList exemptions ={this.props.exemptions} deleteExemption={this.props.deleteExemption}/>} /> 
      {/* <Route exact path ="/download" render={() => <CSVLink data={this.props.exemptions} seperator={";"}> Download to CSV</CSVLink>} />  */}
      </Router>
  </div>
  )
  }  
}

// maybe worth just exploring the idea of having a download component. 


const mapStateToProps = state =>{
  return {
    exemptions: state.exemptions, 
    newExemptions: state.newExemptions
  }
}


export default connect(mapStateToProps,{getExemptions, addExemption, deleteExemption, refreshExemption})(App)

