import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

const ProductScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id)

  return (
    <>
      {/* create a link button that takes us back from the product screen to the homescreen */}
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>

      <Row>
        {/* product image col */}
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        {/* product details col */}
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>{product.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>

        {/* add to cart col */}
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              {/* product price */}
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              {/* product status */}
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  {/* conditional expression checking if there is inventory stock or not */}
                  <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>

              {/* add to cart button */}
              <ListGroup.Item>
                <Button className="btn-block" type='button' disabled={product.countInStock === 0}>
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
