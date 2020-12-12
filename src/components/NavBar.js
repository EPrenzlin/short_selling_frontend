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
              <Nav.Link href="/new">Make a new Exemption</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/search">Search</Nav.Link>
            </Nav.Item>
          </Nav>
        )
    }
}