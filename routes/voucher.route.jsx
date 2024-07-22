const express = require('express')
const Voucher = require('../models/voucher.models.jsx')
const router = express.Router()
const {getVouchers, getVoucherById, createVoucher,deleteVoucher,updatedVoucher} = require('../Controller/voucher.controller.jsx')


router.post('/getVoucher', getVouchers);
router.post('/getVoucherById/:id', getVoucherById);
router.post('/create/', createVoucher);
router.post('/update/:id', updatedVoucher);    
router.post('/delete/:id', deleteVoucher);

if(getVouchers == null){
    console.log("getVouchers is null") 
}
module.exports = router