import { useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { Button, Row, Col, ListGroup, Image, Card} from 'react-bootstrap';
import CheckoutSteps from "../components/CheckoutSteps";

const PlaceOrderScreen = () => {
const navigate = useNavigate();
const cart = useSelector((state) => state.cart);

useEffect(()=> {
  if () {

  }else if () {
    
  }
}, []);

  return (
    <div>PlaceOrderScreen</div>
  )
}

export default PlaceOrderScreen;