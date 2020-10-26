import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {
  // these two variables are defined that can use state. One for the initial state itself (product), and the other for when the state changes (setProducts).
  // useState() and useEffect() are both React Hooks that take out the use of class components

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('/api/products')

      setProducts(res.data)
    }

    fetchProducts()
  }, [])

  // useEffect(() => {
  //   console.log('hello')
  // })

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {/* map through all products into a list and display results  */}
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
