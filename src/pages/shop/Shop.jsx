import Producs from 'components/producs/Producs'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { FiSearch } from 'react-icons/fi'

function Shop() {
          return (

                    <div className='container-fluid'>
                              <div className='row gy-5 gx-5 justify-content-md-center'>
                                        <div className='col-3'>
                                                  <Form className="d-flex" size='sm' style={{
                                                            borderBottom: '1px solid black',
                                                            alignItems: 'center',
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
                                        </div>
                                        <div className='col-9'>
                                                  <Producs></Producs>
                                        </div>
                              </div>
                    </div>

          )
}

export default Shop