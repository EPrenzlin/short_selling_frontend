import './App.css';
import ExemptionForm from'./components/exemptionForm'
import ExemptionList from'./components/exemptionList' 
import {connect} from 'react-redux'
import React, {Component} from 'react'
import { fetchExemptions } from './actions/exemptionActions'
import { CSVLink, CSVDownload } from "react-csv";

class App extends Component{
componentDidMount(){
  this.props.getExemptions() 
}


  render(){
  return (
  <div> 
  {/* <NavBar/>  */}
  <ExemptionForm/>
  <ExemptionList exemptions ={this.props.exemptions}/> 
  <CSVLink data={this.props.exemptions} seperator={";"}> 
  Download all the current isins
  </CSVLink>
  </div>
  )
  }  
}


const mapStateToProps = state =>{
  return {
    exemptions: state.exemptions
    }
}

const mapDispatchToProps = dispatch => {
  console.log("From map dispatch")
  return {
    getExemptions:() => dispatch(fetchExemptions())   
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)

