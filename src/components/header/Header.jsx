import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { BsCart2 } from 'react-icons/bs'
import { FiUser } from 'react-icons/fi'
import { FiSearch } from 'react-icons/fi'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';




const Header = () => {
          const { goodsBasket } = useSelector(store => store.goods)

          return (

                    <Navbar expand="sm" style={{ backgroung: 'none' }} sticky="top" bg='light'>

                              <Container fluid>
                                        <Navbar.Brand className='header__logo' >
                                                  <h2><Link to='/'>SHOPPE</Link></h2>
                                        </Navbar.Brand>

                                        <Navbar.Toggle aria-controls="navbarScroll" size='2rem' />
                                        <Navbar.Collapse id="navbarScroll" style={{ gap: '2rem' }}>
                                                  <Nav
                                                            className="ms-auto my-2 my-lg-0"
                                                            style={{ maxHeight: '100px' }}
                                                            navbarScroll

                                                  >
                                                            <Nav.Link as={Link} to='/shop'>Shop</Nav.Link>
                                                            <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                                                            <Nav.Link as={Link} to='/ourstory'>Our Story</Nav.Link>
                                                  </Nav>
                                                  <Form className="d-flex" size='sm' style={{
                                                            border: '0.5px solid grey',
                                                            alignItems: 'center',
                                                            borderRadius: '5px',
                                                            marginRight: '4%'
                                                  }}>
                                                            <Form.Control
                                                                      type="search"
                                                                      placeholder="Search"
                                                                      className="me-3"
                                                                      aria-label="Search"
                                                                      style={{ border: 'none', boxShadow: 'none', outline: 'none' }}
                                                            />
                                                            <FiSearch size='1.5rem' style={{ marginRight: '0.3rem', cursor: 'pointer' }} />
                                                  </Form>

                                        </Navbar.Collapse>
                                        <Nav className='header__icons'>
                                                  <BsCart2 size='1.2rem' />
                                                  <p>{goodsBasket.length}</p>
                                                  <FiUser size='1.2rem' />
                                        </Nav>
                              </Container>
                    </Navbar>



          )
}

export default Header