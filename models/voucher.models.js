const mongoose = require("mongoose");
// This is the schema for the voucher model
const voucherSchema = new mongoose.Schema({
  VoucherID: {
    type: String,
    required: [true, "Please enter the voucher ID"],
    unique: true,
    maxlength: [5, "Voucher ID must be less than or equal to 5 characters"],
  },
  VoucherName: {
    type: String,
    required: [true, "Please enter the voucher name"],
    maxlength: [50, "Voucher name must be less than or equal to 50 characters"],
  },
  VoucherType: {
    type: String,
    required: [true, "Please enter the voucher type"],
    maxlength: [10, "Voucher type must be less than or equal to 10 characters"],
  },
  VoucherImage: {
    type: String,
    required: false,
    maxlength: [255, "Voucher image URL must be less than or equal to 255 characters"],
  },
  VoucherDescription: {
    type: String,
    required: [true, "Please enter the voucher description"],
    maxlength: [255, "Voucher description must be less than or equal to 255 characters"],
  },
  VoucherStartDate: {
    type: Date,
    required: [true, "Please enter the voucher start date"],
    validate: {
      validator: function (value) {
        return value >= new Date();
      },
      message: "Voucher start date must be today or later"
    }
  },
  VoucherEndDate: {
    type: Date,
    required: [true, "Please enter the voucher end date"],
    validate: {
      validator: function (value) {
        return value > this.VoucherStartDate;
      },
      message: "Voucher end date must be after the start date"
    }
  },
  VoucherDiscount: {
    type: Number,
    required: [true, "Please enter the voucher discount"],
    default: 0,
    min: [0, "Voucher discount must be at least 0"],
    max: [50, "Voucher discount must be at most 50"],
  },
  VoucherMinValue: {
    type: Number,
    required: [true, "Please enter the voucher min value"],
    default: 0,
    min: [0, "Voucher min value must be at least 0"],
    validate: {
      validator: function (value) {
        return value < this.VoucherMaxValue;
      },
      message: "Voucher min value must be less than voucher max value"
    }
  },
  VoucherMaxValue: {
    type: Number,
    required: [true, "Please enter the voucher max value"],
    default: 0,
    min: [0, "Voucher max value must be at least 0"],
  },
  VoucherQuantity: {
    type: Number,
    required: [true, "Please enter the voucher quantity"],
    default: 0,
    min: [0, "Voucher quantity must be at least 0"],
  },
  VoucherStatus: {
    type: String,
    required: [true, "Please enter the voucher status"],
    maxlength: [10, "Voucher status must be less than or equal to 10 characters"],
    enum: {
      values: ['active', 'inactive', 'expired'],
      message: '{VALUE} is not a valid voucher status'
    }
  },
  VoucherCreatedBy: {
    type: String,
    ref: "Partner",
    required: [true, "Please enter the voucher creator"],
    maxlength: [50, "Voucher creator must be less than or equal to 50 characters"],
  },
  AmountUsed: {
    type: Number,
    required: false,
    min: [0, "Amount used must be at least 0"]
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
OrderID: {
  type: String,
  required: [true, "Please enter the order ID"],
},
PartnerID: {
  type: String,
  required: [true, "Please enter the partner request ID"],
},
ServiceName: {
  type: String,
  required: [true, "Please enter the service name"],
},
TotalMoney: {
  type: Number,
  required: [true, "Please enter the total money"],
},
CustomerCode: {
  type: String,
  required: [true, "Please enter the customer code"],
},
Description: {
  type: String,
  required: [true, "Please enter the description"],
},
LinkHome: {
  type: String,
  required: [true, "Please enter the link home"],
},
// ---------->lấy này để hiếu trả về trang của tụi tui
LinkReturnSuccess: {
  type: String,
  required: [true, "Please enter the link return success"],
},
// ---------->lấy này để hiếu cập nhập trạng thái trang của tụi tui
});

const paymentRequestSchema = new mongoose.Schema({
  OrderID: {
    type: String,
    required: [true, "Please enter the order ID"],
  },
  PartnerID: {
    type: String,
    required: [true, "Please enter the partner request ID"],
  },
  ServiceName: {
    type: String,
    required: [true, "Please enter the service name"],
  },
  TotalMoney: {
    type: Number,
    required: [true, "Please enter the total money"],
  },
  CustomerCode: {
    type: String,
    required: [true, "Please enter the customer code"],
  },
  Description: {
    type: String,
    required: [true, "Please enter the description"],
  },
  LinkHome: {
    type: String,
    required: [true, "Please enter the link home"],
  },
  // ---------->lấy này để hiếu trả về trang của tụi tui
  LinkReturnSuccess: {
    type: String,
    required: [true, "Please enter the link return success"],
  },
  VoucherID: {
    type: String,
    required: [true, "Please enter the voucher ID"],
  },
  TotalMoneyAfterDiscount: {
    type: Number,
    required: [true, "Please enter the total money after discount"],
  },
  
})

const Voucher = mongoose.model("Voucher", voucherSchema);
const Partner = mongoose.model("Partner", partNerSchema);
const Category = mongoose.model("Category", cateSchema);
const UseHistory = mongoose.model("useHistory", useHistory);
const PartnerRequest = mongoose.model("PartnerRequest", partNerRequestSchema);
const PaymentRequest = mongoose.model("PaymentRequest", paymentRequestSchema);
module.exports = {
  Voucher,
  Partner,
  Category,
  UseHistory,
  PartnerRequest,
  PaymentRequest
}