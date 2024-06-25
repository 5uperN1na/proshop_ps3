import { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Row, Col, ListGroup, Image, Card, ListGroupItem } from 'react-bootstrap';
import {toast} from 'react-toastify';
import CheckoutSteps from "../components/CheckoutSteps";
import Message from '../components/Message';
import Loader from '../components/Loader';
import {useCreateOrderMutation} from '../slices/ordersApiSlice';
import {clearCartItems} from '../slices/cartSlice';

const PlaceOrderScreen = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (!cart.shippingAddress.address) {
      navigate('/shipping');
    } else if (!cart.paymentMethod) {
      navigate('/payment');
    }
  }, [cart.paymentMethod, cart.shippingAddress.address, navigate]);

  return (
    <>

      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
        <ListGroup variant='flush'>
          <ListGroupItem>
            <h2>Shipping</h2>
            <p>
              
            </p>
          </ListGroupItem>
        </ListGroup>
        </Col>
        <Col md={4}>col</Col>

      </Row>

    </>
  )
}

export default PlaceOrderScreen;