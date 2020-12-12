import React,{Component} from 'react' 
import { CSVLink } from "react-csv";
import Button from 'react-bootstrap/Button'

export default class DownloadCsv extends Component{

    render(){
        return(
            <div> 
            <CSVLink data ={this.props.exemptions} seperator={";"}>
            <Button variant="outline-success"> Download</Button>{' '}
            </CSVLink>
            </div> 
        )
        }
    }