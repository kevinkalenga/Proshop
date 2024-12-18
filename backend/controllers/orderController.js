import asyncHandler from '../middleware/asyncHandler.js';
import Order from '../models/orderModel.js';


// @desc    Create new Order
// @route   Post /api/orders
// @access  private
const addOrderItems = asyncHandler(async (req, res) => {
   res.send('add order items')
})

// @desc    Get logged in user orders
// @route   Get /api/orders/myorders
// @access  private
const getMyOrders = asyncHandler(async (req, res) => {
   res.send('get my orders')
})
// @desc    Get logged in user orders
// @route   Get /api/orders/myorders
// @access  private
const getOrderById = asyncHandler(async (req, res) => {
   res.send('get order by id')
})
// @desc    Update order to paid
// @route   Get /api/orders/:id/pay
// @access  private
const updateOrderTopaid = asyncHandler(async (req, res) => {
   res.send('update order to paid')
})
// @desc    Update order to deliver
// @route   Get /api/orders/:id/deliver
// @access  private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
   res.send('update order to delivered')
})
// @desc    Update order to deliver
// @route   Get /api/orders/:id/deliver
// @access  private
const getOrders = asyncHandler(async (req, res) => {
   res.send('get all orders')
})


export {
    addOrderItems,
    getMyOrders,
    getOrderById,
    updateOrderTopaid,
    updateOrderToDelivered,
    getOrders
}