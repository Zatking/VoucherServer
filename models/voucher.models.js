const mongoose = require("mongoose");
// This is the schema for the voucher model
const voucherSchema = new mongoose.Schema({
 
  VoucherID: {
    type: String,
    required: [true, "Please enter the voucher ID"],
    uniqe: true,
    MaxLength: 5,
  },
  VoucherName: {
    type: String,
    required: [true, "Please enter the voucher name"],
    MaxLength: 50,
  },
  VoucherType: {
    type: String,
    required: [true, "Please enter the voucher type"],
    MaxLength: 10,
  },
  VoucherImage: {
    type: String,
    required: false,
    MaxLength: 255,
  },
  VoucherDescription: {
    type: String,
    required: [true, "Please enter the voucher description"],
    MaxLength: 255,
  },
  VoucherStartDate: {
    type: Date,
    required: [true, "Please enter the voucher start date"],
  },
  VoucherEndDate: {
    type: Date,
    required: [true, "Please enter the voucher end date"],
  },
  VoucherDiscount: {
    type: Number,
    required: [true, "Please enter the voucher discount"],
    default: 0,
  },
  VoucherMinValue: {
    type: Number,
    required: [true, "Please enter the voucher min value"],
    default: 0,
  },
  VoucherMaxValue: {
    type: Number,
    required: [true, "Please enter the voucher max value"],
    default: 0,
  },
 
  VoucherQuantity: {
    type: Number,
    required: [true, "Please enter the voucher quantity"],
    default: 0,
  },
  VoucherStatus: {
    type: String,
    required: [true, "Please enter the voucher status"],
    MaxLength: 10,

  },

  AmountUsed:{
    type:Number,
    required: false
  },
  RemainQuantity:{
    type:Number,
    default:999,
  },

  
  

  Timestamp: {
    type: Date,
    default: Date.now,
  },
});

const partNerSchema = new mongoose.Schema({
  PartnerID:{
    type: String,
    required: [true, "Please enter the partner ID"],
    MaxLength: 5,
  },
  PartnerName:{
    type: String,
    required: [true, "Please enter the partner name"],
    MaxLength: 50,
  },
  PartnerEmail:{
    type: String,
    required: [true, "Please enter the partner email"],
    MaxLength: 255,

  },
  PartnerPhone:{
    type: String,
    required: [true, "Please enter the partner phone"],
    MaxLength: 15,

  },
  TypeOfCompany:{
    type: String,
    required: [true, "Please enter the type of company"],
    MaxLength: 10,

  },
  PartnerIcon:{
    type: String,
    required: false,
  },
  VoucherID:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"Voucher"
  }
})

const cateSchema = new mongoose.Schema({
  CategoryID:{
    type: String,
    required: [true, "Please enter the category ID"],
  },
  CategoryName:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Partner"
  },
  CategoryIcon:{
    type: String,
    required: false,
  },
  VoucherID:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Voucher"
  }
  
})


const customerSchema = new mongoose.Schema({
  CustomerID:{
    type: String,
    required: [true, "Please enter the customer ID"],
    MaxLength: 5,
  },
  CustomerName:{
    type: String,
    required: [true, "Please enter the customer name"],
    MaxLength: 50,
  },
  
})

const useHistory = new mongoose.Schema({
  HistoryID:{
    type: String,
    required:"HS" + [true, "Please enter the history ID"],
  },
  HistoryDate:{
    type: Date,
    default: Date.now,
  },
  VoucherID:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Voucher"
  },
  CustomerID:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Customer"
  }

})


const Voucher = mongoose.model("Voucher", voucherSchema);

module.exports = Voucher;