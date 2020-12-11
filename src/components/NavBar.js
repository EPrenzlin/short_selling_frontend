import React,{Component} from 'react' 
import Nav from 'react-bootstrap/Nav'

export default class NavBar extends Component{
    render(){
        return(
            <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">All Exemptions</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/new">New Exemption</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/search">Search Existing</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/download">Download to CSV</Nav.Link>
            </Nav.Item>
          </Nav>
        )
    }
}