import { Link, useParams } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Form, Button, Card, ListGroupItem } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { useGetOrderDetailsQuery } from '../slices/ordersApiSlice';

import React from 'react'

const OrderScreen = () => {
  const { id: orderId } = useParams();

  const { data: order, refetch, isLoading, error } = useGetOrderDetailsQuery(orderId);

  return isLoading ? <Loader /> : error ? <Message variant='danger' /> : (
    <>
      <h1>Order {order._id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <h2>Shipping</h2>
              <p>
                <strong>Name: </strong> {order.user.name}
              </p>

              <p>
                <strong>Email: </strong> {order.user.email}
              </p>
              <p>
                <strong>Street Address: </strong> {order.shippingAddress.address}, {order.shippingAddress.city} {''}
                {order.shippingAddress.postalCode}, {order.shippingAddress.country}
              </p>

              {order.isDelivered ? (
                <Message variant='success'>
                  Delivered on {order.deliveredAt}
                </Message>
              ) : (
                <Message variant='danger'>Not Delivered</Message>

              )}

            </ListGroupItem>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong>
                {order.paymentMethod}
              </p>

              {order.isPaid ? (
                <Message variant='success'>
                  Paid on {order.paidAt}
                </Message>
              ) : (
                <Message variant='danger'>Not Paid</Message>

              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>

              {order.orderItems.map((item, index) =>(
                <ListGroup.Item key={index}>
                  
              ))}

            </ListGroup.Item>





          </ListGroup>
        </Col>
        <Col md={4}>Column</Col>
      </Row>
    </>
  );

};

export default OrderScreen