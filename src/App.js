import './App.css';
import ExemptionForm from'./components/exemptionForm'
import ExemptionList from'./components/exemptionList' 
import {connect} from 'react-redux'
import React, {Component} from 'react'
import { getExemptions, addExemption } from './actions/exemptionActions'

import { CSVLink } from "react-csv";

class App extends Component{
  
componentDidMount(){
  this.props.getExemptions() 
}

  render(){
  return (
  <div> 
  {/* <NavBar/>  */}
  <ExemptionForm addExemption ={this.props.addExemption}/>
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

// const mapDispatchToProps = dispatch => {
//   return {
//     getExemptions:() => dispatch(fetchExemptions()), 
//     addExemption:(exemption) => dispatch(addExemption(exemption))   
//   }
// }

export default connect(mapStateToProps,{getExemptions, addExemption})(App)

