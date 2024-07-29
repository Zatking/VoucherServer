const express = require('express')
const Voucher = require('../models/voucher.models.js')
const router = express.Router()
const {getVouchers, getVoucherById, createVoucher,deleteVoucher,updatedVoucher} = require('../Controller/voucher.controller.js')
const {getPartNerRequests, getPartNerRequestById, createPartNerRequest, deletePartNerRequest} = require('../Controller/partNerRequest.js')
const {getCategories, getCategoryById, createCategory, deleteCategory} = require('../Controller/cate.controller.js')
const {createHistory, getHistory, getHistoryById, deleteHistory} = require('../Controller/history.controller.js')



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

if(getVouchers == null){
    console.log("getVouchers is null") 
}
module.exports = router