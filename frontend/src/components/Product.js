import React from 'react'
import { Card } from 'react-bootstrap'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      {/* product image */}
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </a>

      {/* title */}
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong className="product-title">{product.name}</strong>
          </Card.Title>
        </a>
        {/* rating  */}
        <Card.Text as='div'>
          <div className='my-3'>
            {product.rating} from {product.numReviews} reviews
          </div>
        </Card.Text>

        {/* price */}
        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
