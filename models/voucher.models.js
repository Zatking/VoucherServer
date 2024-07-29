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
  VoucherCreatedBy: {
    type:String,
    ref:"Partner",
    required: [true],
    MaxLength: 50
  },

  AmountUsed:{
    type:Number,
    required: false
  },
  


});

const partNerSchema = new mongoose.Schema({
_id:{
    type: String,
    required: [true, "Please enter the partner ID"],
    MaxLength: 5,
  },
  PartnerName:{
    type: String,
    required: [true, "Please enter the partner name"],
    MaxLength: 50,
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
  Voucher:{
  type:String,
  ref:"Voucher"
  }
})

const cateSchema = new mongoose.Schema({
  CategoryID:{
    type: String,
    required: [true, "Please enter the category ID"],
  },
  CategoryName:{
    type:String,
    ref:"Voucher"
  },
  CategoryIcon:{
    type: String,
    required: false,
  },

  
})

const useHistory = new mongoose.Schema({
  _id:{
    type: String,
    required:"HS" + [true, "Please enter the history ID"],
  },
  HistoryDate:{
    type: Date,
    default: Date.now,
  },
  Voucher:{
    type:String,
    ref:"Voucher"
  },
  CustomerName:{
    type:String,
  },
  

})


const partNerRequestSchema = new mongoose.Schema({
  OrderID:{
    type: String,
    required: [true, "Please enter the order ID"],
  },
  PartnerID:{
    type: String,
    required: [true, "Please enter the partner request ID"],
  },
  PartnerName:{
    type: String,
    required: [true, "Please enter the partner name"],
  },
  ServiceCode:{
    type: String,
    required: [true, "Please enter the service code"],
  },
  ServiceName:{
    type: String,
    required: [true, "Please enter the service name"],
  },
  TotalMoney:{
    type: Number,
    required: [true, "Please enter the total money"],
  },
  CustomerCode:{
    type: String,
    required: [true, "Please enter the customer code"],
  },
  CustomerName:{
    type: String,
    required: [true, "Please enter the customer name"],
  },
  Description:{
    type: String,
    required: [true, "Please enter the description"],
  },
  
})

const Voucher = mongoose.model("Voucher", voucherSchema);
const Partner = mongoose.model("Partner", partNerSchema);
const Category = mongoose.model("Category", cateSchema);
const UseHistory = mongoose.model("useHistory", useHistory);
const PartnerRequest = mongoose.model("PartnerRequest", partNerRequestSchema);
module.exports = {
  Voucher,
  Partner,
  Category,
  UseHistory,
  PartnerRequest
}