import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { addToBasket, getGoodsItems } from '../../slice/goodsSlice'

function Producs() {
  const { goodsItems, isLoading } = useSelector(store => store.goods)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getGoodsItems())
  }, [])




  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }




  return (


    <Container fluid style={{ marginLeft: '0', marginRight: '0' }}>

      <Row style={{ marginLeft: '0', marginRight: '0' }} className='g-2'>
        {goodsItems.map(item =>
          <Col key={item.id} gx={0} className='col-md-4 col-lg-4'>
            <Card >
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