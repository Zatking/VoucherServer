const Voucher = require("../models/voucher.models.js"); // Import the voucher model

//get all vouchers
const getVouchers = async (req, res) => {
  try {
    const vouchers = await Voucher.find({});
    res.status(200).json({ vouchers });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get voucher by id
const getVoucherById = async (req, res) => {
  try {
    const { id } = req.params;
    const voucher = await Voucher.findById(id);
    res.status(200).json({ voucher });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new voucher
const createVoucher = async (req, res) => {
  try {
    const voucher = await Voucher.create(req.body);
    res.status(200).json({ voucher });  
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a voucher
const updatedVoucher = async (req, res) => {
  try {
    const { id } = req.params;

    const voucher = await Voucher.findByIdAndUpdate(id, req.body);

    if (!voucher) {
      return res.status(404).json({ message: "Voucher not found" });
    }

    const updatedVoucher = await Voucher.findById(id);
    res.status(200).json({ updatedVoucher });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete a voucher
const deleteVoucher = async (req, res) => {
  try {
    const { id } = req.params;

    const voucher = await Voucher.findByIdAndDelete(id);

    if (!voucher) {
      return res.status(404).json({ message: "Voucher not found" });
    }

    res.status(200).json({ message: "Voucher deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getVouchers,
  getVoucherById,
  createVoucher,
  updatedVoucher,
  deleteVoucher,
};

