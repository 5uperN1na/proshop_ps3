
import { useState } from 'react';
import { useParams, Link, useNavigate} from 'react-router-dom'
import Rating from '../components/Rating'
import { Form, ListGroup, Row, Col, Image, Button } from 'react-bootstrap';
import { UseDispatch } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useGetProductDetailsQuery } from '../slices/productsApiSlice';
import {addToCartHandler} from '../slices/cartSlice';


const ProductScreen = () => {

  const { id: productId } = useParams();

  const [qty, setQty] = useState(1);

  const addToCartHandler = () => {

  }

  const { data: product, isLoading, error } = useGetProductDetailsQuery(productId);



  return (

    <>
      <Link className="btn btn-light my-3" to='/'>
        Go Back
      </Link>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error?.data?.message || error.error} </Message>
      ) : (

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

              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                      <Form.Control
                        as='select'
                        value={qty}
                        onChange={(e) => setQty(Number(e.target.value))}
                      >
                        {[...Array(product.countInStock).keys()].map((x)=>(
                          <option key={x + 1} value={x + 1}>
                            {x+1}
                          </option>

                        ))}

                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}



              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={product.countInStock === 0}
                  onClick={addToCartHandler}
                >
                  Add to Cart
                </Button>

              </ListGroup.Item>
            </ListGroup>
          </Col>

        </Row>
      )}


    </>
  );
};

export default ProductScreen