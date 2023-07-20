
import Container from 'react-bootstrap/Container';
import {Navbar, Nav } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import React, { Component } from 'react';
import image from "./logo.png"
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

// import NavDropdown from 'react-bootstrap/NavDropdown';

class AppHeader extends Component{
  state = {
    fixed:"",
    color:"white",
    fontSize:"",
    
    
  }
  componentDidMount = ()=>{
    window.onscroll = () => {
        if (window.scrollY >= 50){
          this.setState({
            transition: "0.3s ease-in",
            fixed:"top",
            color:"white",
            fontSize:"16px",
            
          })  
          if (window.scrollY >= 704){
            this.setState({
              transition: "0.3s ease-in",
              fixed:"top",
              color:"black",
              fontSize:"16px",
              })}
        }else{ this.setState({fixed:"",color:"",fontSize:""}) }
  }            
}
  render(){
  const Sign = {
    color:"#74a999",
    fontSize:"15px",
    fontWeight:"600",
    background:"#ffff",
    borderRadius:"px",
    marginRight:"2px",
    alignItems : "center"
    // padding:"2px"
  }

    return(
    
    
        <Navbar bg="light" expand="lg" fixed={this.state.fixed} >
          <Container>
            <LinkContainer to="/home" className='col-1'>
              <Navbar.Brand href="/home"><Image src={image} fluid style={{}}/></Navbar.Brand> 
            </LinkContainer>
    
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='col-'>
                <Nav className="me-auto" >
    
                <LinkContainer to="/home" style={this.state} >
                  <Nav.Link to="/home" >Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/services" style={this.state} >
                  <Nav.Link to="/services" >Services</Nav.Link>
                </LinkContainer>
    
                <LinkContainer to="/portfolio" style={this.state}  >
                  <Nav.Link to="/portfolio" >Portfolio &nbsp;</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/about" style={this.state}  >
                  <Nav.Link to="/about" >About &nbsp;</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/contact" style={this.state}  >
                  <Nav.Link to="/contact" >Contact &nbsp;</Nav.Link>
                </LinkContainer>
                <span style={{color:"#33d1cc",margin:"7px",fontSize:"17px"}} className=' pe-3'>
                  <span style={{fontSize:"25px",marginLeft:"-9px"}}>|</span>&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>
                <Button variant="danger" style={{backgroundColor:"#ff3150",color:"#ffc400",fontSize:"15px",borderRadius:"20px",fontWeight:"550",padding:"0 15px"}}>Login</Button>{' '}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )    
    
  }
  
    
  
}

export default AppHeader;

/* <LinkContainer to="/signin" >
                  <Nav.Link to="/signin" className='sign'>Sign in</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/signup"  >
                  <Nav.Link to="/signup" className='sign'>Sign up &nbsp;</Nav.Link>
                </LinkContainer> */
    
                /* <Nav.Link href="#services" style={this.state} >Services</Nav.Link>
                <Nav.Link href="#works" style={this.state} >Works</Nav.Link>
                <Nav.Link href="#teams" style={this.state} >Teams</Nav.Link>
                <Nav.Link href="#testimonials" style={this.state} >Testimonials</Nav.Link>
                <Nav.Link href="#pricing" style={this.state} >Pricing</Nav.Link>
                <Nav.Link href="#blog" style={this.state} >Blog</Nav.Link>
                <Nav.Link href="#contact" style={this.state} >Contact</Nav.Link> */