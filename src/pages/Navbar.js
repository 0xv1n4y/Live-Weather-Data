import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Header = ({location,reload,handlecheck}) => {
   
  return (
    <div>
         <Navbar bg="dark" data-bs-theme="dark">
            <Container>
            <Navbar.Brand  className="ml-auto" style={{fontSize:30, fontWeight:900}}>Weather Data</Navbar.Brand>
                  <Nav className="ml-auto" >
                      
                    <Form inline >
                            <Row>
                                <Col >
                                    <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className=" mr-sm-2"
                                    value={location}
                                    onChange={handlecheck}
                                    />
                                </Col>
                                <Col xs="auto">
                                    <Button onClick={reload}  type="submit">Reload</Button>
                                </Col>
                            </Row>
                    </Form>
                  </Nav>
            </Container>
      </Navbar>
      
    </div>
  );
}

export default Header;
