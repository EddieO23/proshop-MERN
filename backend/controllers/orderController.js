import asyncHandler from "../middleware/asyncHandler.js"
import Order from '../models/orderModel.js'

// @desc CREATE new Order
// @route POST /api/orders
// @access Private
const addOrderItems = asyncHandler(async (req, res) => {
  res.send('Add Order Items')
})


// @desc Get Logged in Users Orders
// @route GET /api/orders/myorders
// @access Private
const getMyOrders = asyncHandler(async (req, res) => {
  res.send('GET My Orders')
})


// @desc Get Order By ID
// @route GET /api/orders/:id
// @access Private
const getOrderById = asyncHandler(async (req, res) => {
  res.send('GET single order by using the ID')
})


// @desc Update Order to Paid
// @route GET /api/orders/:id/pay
// @access Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send('UPDATE order to paid')
})


// @desc Update To Delivered
// @route GET /api/orders/:id/deliver
// @access Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send('UPDATE order to delivered')
})


// @desc GET All Orders
// @route GET /api/orders/
// @access Private
const getOrders = asyncHandler(async (req, res) => {
  res.send('GET all orders')
})

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders
}