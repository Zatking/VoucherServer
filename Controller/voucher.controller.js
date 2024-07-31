const Voucher = require("../models/voucher.models.js").Voucher; // Import the voucher model

//get all vouchers
const getVouchers = async (req, res) => {
  try {
    const vouchers = await Voucher.find({VoucherStatus: 'Available'});
    const currentDate = Date.now();
    for (let i = 0; i < vouchers.length; i++) {
      if (vouchers[i].VoucherEndDate < currentDate) {
        await Voucher.findByIdAndUpdate(vouchers[i]._id, { VoucherStatus: "Expired" });
      }
    }
    res.status(200).json({ vouchers });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete all vouchers 
const deleteAllVouchers = async (req, res) => {
  try {
    const vouchers = await Voucher.deleteMany();
    res.status(200).json({ message: "All vouchers deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


//get voucher by created by
const getVoucherByCreatedBy = async (req, res) => {
  try {
    const { CreatedBy } = req.params;
    const voucher = await Voucher.find({ CreatedBy });
    res.status(200).json({ voucher });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

//get voucher by voucher type
const getVoucherByType = async (req, res) => {
  try {
    const { VoucherType } = req.params;
    const voucher = await Voucher.find({ VoucherType });
    res.status(200).json({ voucher });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

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
  getVoucherByCreatedBy,
  getVoucherByType,
  deleteAllVouchers
};

