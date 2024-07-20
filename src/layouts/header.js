
import React from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
      <div className="Header">
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Người dùng:</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Khoa:</Nav.Link>
            <Nav.Link href="#features">Ngày làm việc:</Nav.Link>
            <Nav.Link href="#pricing">Tên máy:</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
    );
  }
  export default  Header;