

  
import React from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';

const foodter = () => {
    return (
      <div className="Header">
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
    );
  }
  export default  foodter;

