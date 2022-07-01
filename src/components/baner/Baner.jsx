
import { useSelector } from 'react-redux'
import Carousel from 'react-bootstrap/Carousel'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'









function Baner() {
          const { shuffleGoods } = useSelector(store => store.goods)






          return (
                    <div className='carousel'>
                              <Carousel controls={false} fade >
                                        {shuffleGoods.slice(0, 4).map(item => (
                                                  <Carousel.Item interval={1500} key={item.id}>
                                                            <img
                                                                      className="d-block w-100"
                                                                      src={item.main_img}
                                                                      alt="First slide"
                                                            />
                                                            <Carousel.Caption style={{ textAlign: 'start', top: '30%', left: '5%' }}>
                                                                      <h3>{item.name}</h3>
                                                                      <p>$ {item.price}.00</p>
                                                                      <Button as={Link} to={`/product/${item.id}`} variant="outline-light" size='lg'>View Product</Button>
                                                            </Carousel.Caption>
                                                  </Carousel.Item>
                                        ))}

                              </Carousel>

                    </div>
          )
}

export default Baner