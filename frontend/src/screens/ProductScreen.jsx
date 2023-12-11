import { useParams, Link } from 'react-router-dom'
import products from '../products'
import Rating from '../components/Rating'
import { ListGroup, Row, Col, Image, Button } from 'react-bootstrap';

const ProductScreen = () => {
  const { id: productId } = useParams();
  const product = products.find((p) => p._id === productId);
  console.log(product);


  return (

    <>
      <Link className="btn btn-light my-3" to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </ListGroup.Item>
            <ListGroup.Item>
              Price: <strong>${product.price}</strong>
            </ListGroup.Item>
            <ListGroup.Item>
              Description: {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>

          <ListGroup>
            <ListGroup.Item>
              Price: <strong>${product.price}</strong>
            </ListGroup.Item>
            
            <ListGroup.Item>
              Status: <strong>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</strong>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                className='btn-block'
                type='button'
                disabled={product.countInStock === 0}
              >
                Add to Cart
              </Button>

            </ListGroup.Item>
          </ListGroup>
        </Col>

      </Row>
    </>
  )
}

export default ProductScreen