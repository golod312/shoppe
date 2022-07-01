import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { addToBasket } from '../../slice/goodsSlice'
function Producs() {
          const { goodsItems } = useSelector(store => store.goods)
          const dispatch = useDispatch()



          return (



                    <Container fluid>

                              <Row style={{ marginLeft: '2rem', marginRight: '0' }}>
                                        {goodsItems.slice(0, 6).map(item =>
                                                  <Col key={item.id} gx={0}>
                                                            <Card style={{ width: '18rem' }} >
                                                                      <Card.Img variant="top" src={item.img[0]} />
                                                                      <Card.Body>
                                                                                <Card.Title>{item.name}</Card.Title>
                                                                                <Card.Text style={{ color: '#A18A68' }}>
                                                                                          $ {item.price}.00
                                                                                </Card.Text>
                                                                                <div className='item_button'>
                                                                                          <Button variant='outline-success' size='sm' onClick={() => dispatch(addToBasket(item.id))}>Buy now!</Button>
                                                                                          <Button variant='outline-secondary' size='sm'>More info</Button>
                                                                                </div>

                                                                      </Card.Body>
                                                            </Card>


                                                  </Col>

                                        )}
                              </Row>
                    </Container>

          )
}

export default Producs