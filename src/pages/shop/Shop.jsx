import Producs from 'components/producs/Producs'
import React, { useEffect, useState } from 'react'

import { getGoodsItems } from '../../slice/goodsSlice'
import { useDispatch } from 'react-redux'
import { Container, Row, Col, Dropdown } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { FiSearch } from 'react-icons/fi'
import PriceSlader from 'components/slider/Slider'

function Shop() {
  const categoryArr = ['fashion', 'accessories', 'style']
  const sortArr = ["Lover Price"]
  const [search, setSerch] = useState()
  const [category, setCategory] = useState()
  const dispatch = useDispatch()
  const searchUrl = `http://localhost:3000/data?q=${search}`
  const catUrl = `http://localhost:3000/data?category=${category}`
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getGoodsItems(searchUrl))
  }
  useEffect(() => {
    if (category) {
      dispatch(getGoodsItems(catUrl))
    }
  }, [category])


  return (

    <div className='shop'>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col className='col-sm-2 col-md-2 col-lg-2'>
            <Form className="d-flex" size='sm' style={{
              borderBottom: '1px solid black',
              alignItems: 'center',
              marginRight: '4%',
              maxWidth: '100%'
            }}
              onSubmit={handleSubmit}
            >
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-3"
                aria-label="Search"
                style={{ border: 'none', boxShadow: 'none', outline: 'none' }}
                onChange={(e) => setSerch(e.target.value)}

              />
              <FiSearch size='1.5rem' style={{ marginRight: '0.3rem', cursor: 'pointer' }} onClick={handleSubmit} />
            </Form>
            <Dropdown style={{ paddingTop: '1rem' }} >
              <Dropdown.Toggle id="dropdown-button" style={{
                width: "100%",
                backgroundColor: 'transparent',
                border: '1px solid black',
                color: 'black',
                boxShadow: 'none'
              }}>
                Shop by
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ width: '100%' }} >
                {categoryArr.map(item => (
                  <Dropdown.Item key={item} onClick={() => setCategory(item)}>{item[0].toUpperCase() + item.slice(1)}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown style={{ paddingTop: '1rem' }} >
              <Dropdown.Toggle id="dropdown-button" style={{
                width: "100%",
                backgroundColor: 'transparent',
                border: '1px solid black',
                color: 'black',
                boxShadow: 'none'
              }}>
                Sort by
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ width: '100%' }} >
                {categoryArr.map(item => (
                  <Dropdown.Item key={item} onClick={() => setCategory(item)}>{item[0].toUpperCase() + item.slice(1)}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <PriceSlader></PriceSlader>
          </Col>
          <Col xs lg='10'>
            <Producs></Producs>
          </Col>
        </Row>
      </Container>
    </div>

  )
}

export default Shop