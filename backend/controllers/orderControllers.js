import asyncHandler from "../middleware/asyncHandler.js";
import Order from '../models/orderModel.js';

//@desc create new order
//@route post/api/orders
//@access private
const addOrderItems = asyncHandler(async (req, res) => {
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    } = req.body;

    if (orderItems && orderItems.length === 0) {
        res.status(400);
        throw new Error('No order items found.');
    } else {
        const order = new Order ({
            orderItems: orderItems.map((x) =>({
                ...x,
                product: x._id,
                _id: undefined
            })),
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        });
    }

});

//@desc get logged in orders
//@route get/api/orders/myorders
//@access private
const getMyOrders = asyncHandler(async (req, res) => {
    res.send('get my orders')

});

//@desc get order by id
//@route get/api/orders/:id
//@access private
const getOrderById = asyncHandler(async (req, res) => {
    res.send('get order by id')

});

//@desc update order to paid
//@route post/api/orders/:id/pay
//@access private
const updateOrderToPaid = asyncHandler(async (req, res) => {
    res.send('update order to paid')

});

//@desc update order to delivered
//@route post/api/orders/:id/deliver
//@access private/admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
    res.send('update order to delivered')

});

//@desc get all orders
//@route get/api/orders
//@access private/admin
const getOrders = asyncHandler(async (req, res) => {
    res.send('get all orders.')

});

export {
    addOrderItems,
    getMyOrders,
    getOrderById,
    updateOrderToPaid,
    updateOrderToDelivered,
    getOrders
}
