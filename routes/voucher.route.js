const express = require('express')
const Voucher = require('../models/voucher.models.js')
const router = express.Router()
const {getVouchers, getVoucherById, createVoucher,deleteVoucher,updatedVoucher} = require('../Controller/voucher.controller.js')


router.get('/getVoucher', getVouchers);
router.get('/getVoucherById/:id', getVoucherById);
router.post('/create', createVoucher);
router.put('/update/:id', updatedVoucher);    
router.post('/delete/:id', deleteVoucher);

if(getVouchers == null){
    console.log("getVouchers is null") 
}
module.exports = router