import './App.css';
// all the components
import ExemptionForm from'./components/exemptionForm'
import ExemptionList from'./components/exemptionList' 
import NewExemptions from'./components/newexemptions' 
import SearchForm from'./components/search'
import SearchResult  from'./components/searchresult'
import NavBar from './components/NavBar.js' 
// import ScrollToTop  from'./components/scrolltotop' 

// all the various mapdispatch to state, actions, or others. 
import {connect} from 'react-redux'
import React, {Component} from 'react'
import { getExemptions, addExemption, deleteExemption, refreshExemption, searchItem } from './actions/exemptionActions'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";
import Button from 'react-bootstrap/Button'

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
    <Route exact path ="/search" render={() => 
    <div> 
    <SearchForm searchItem={this.props.searchItem}/>
    <SearchResult result = {this.props.result}/> 
    </div>
    }/>
    </Router>
    <ScrollToTop smooth/>   
  </div>
  )
  }  
}


const mapStateToProps = state =>{
  return {
    exemptions: state.exemptions, 
    newExemptions: state.newExemptions,
    result: state.searchResult
  }
}


export default connect(mapStateToProps,{getExemptions, addExemption, deleteExemption, refreshExemption,searchItem})(App)

