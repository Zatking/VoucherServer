const express = require('express')
const Voucher = require('../models/voucher.models.js')
const router = express.Router()
const {getVouchers, getVoucherById, createVoucher,deleteVoucher,updatedVoucher,deleteAllVouchers,updateVoucherQuantity} = require('../Controller/voucher.controller.js')
const {getPartNerRequests, getPartNerRequestById, createPartNerRequest, deletePartNerRequest,getPartNerRequestByOrderId,deleteAllPartNerRequests} = require('../Controller/partNerRequest.js')
const {getCategories, getCategoryById, createCategory, deleteCategory} = require('../Controller/cate.controller.js')
const {createHistory, getHistory, getHistoryById, deleteHistory} = require('../Controller/history.controller.js')
const {getPaymentRequests,getPaymentRequestsById,getPaymentRequestsByOrderId,createPaymentRequest,deleteAllPaymentRequests,deletePaymentRequest} = require('../Controller/payment.controller.js')

router.get('/getVoucher', getVouchers);
router.post('/getVoucherById/:id', getVoucherById);
router.post('/create', createVoucher);
router.post('/update/:id', updatedVoucher);    
router.post('/delete/:id', deleteVoucher);
router.get('/getPartNerRequests', getPartNerRequests);
router.post('/getPartNerRequestById/:id', getPartNerRequestById);
router.post('/createPartNerRequest', createPartNerRequest);
router.post('/deletePartNerRequest/:id', deletePartNerRequest);
router.get('/getCategories', getCategories);
router.post('/getCategoryById/:id', getCategoryById);
router.post('/createCategory', createCategory);
router.post('/deleteCategory/:id', deleteCategory);
router.post('/createHistory', createHistory);
router.get('/getHistory', getHistory);
router.post('/getHistoryById/:id', getHistoryById);
router.post('/deleteHistory/:id', deleteHistory);
router.post('/getPartNerRequestByOrderId/:OrderID', getPartNerRequestByOrderId);
router.delete('/deleteAllPartNerRequests', deleteAllPartNerRequests);
router.post('/getPaymentRequests', getPaymentRequests);
router.post('/getPaymentRequestsById/:id', getPaymentRequestsById);
router.post('/getPaymentRequestsByOrderId/:OrderId', getPaymentRequestsByOrderId);
router.post('/createPaymentRequest', createPaymentRequest);
router.delete('/deleteAllPaymentRequests', deleteAllPaymentRequests);
router.post('/deletePaymentRequest/:id', deletePaymentRequest);
router.delete('/deleteAllVouchers', deleteAllVouchers);
router.post('/updateVoucherQuantity/:id', updateVoucherQuantity);
module.exports = router
