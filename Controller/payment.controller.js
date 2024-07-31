const PaymentRequest = require('../models/voucher.models').PaymentRequest

const getPaymentRequests = async (req, res) => {
    try {
        const paymentRequests = await PaymentRequest.find({});
        res.status(200).json({ paymentRequests });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getPaymentRequestsByOrderId = async (req, res) => {
    try {
        const  OrderId  = req.params;
        console.log(req.params);
        const paymentRequest = await PaymentRequest.findOne(OrderId);
        res.status(200).json({ paymentRequest });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const getPaymentRequestsById = async (req, res) => {
    try {
        const { id } = req.params;
        const paymentRequest = await PaymentRequest.findById(id);
        res.status(200).json({ paymentRequest });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createPaymentRequest = async (req, res) => {
    try {
        const paymentRequest = await PaymentRequest.create(req.body);
        res.status(200).json({ paymentRequest });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteAllPaymentRequests = async (req, res) => {
    try {
        const paymentRequests = await PaymentRequest.deleteMany();
        res.status(200).json({ message: "All paymentRequests deleted" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const deletePaymentRequest = async (req, res) => {
    try {
        const { id } = req.params;
        const paymentRequest = await PaymentRequest.findByIdAndDelete(id);
        if (!paymentRequest) {
            return res.status(404).json({ message: "PaymentRequest not found" });
        }
        res.status(200).json({ message: "PaymentRequest deleted" });
    } catch (error) {
    res.status(500).json({ message: error.message });
}
}

module.exports = {
    getPaymentRequests,
    getPaymentRequestsById,
    createPaymentRequest,
    deletePaymentRequest,
    deleteAllPaymentRequests,
    getPaymentRequestsByOrderId
}
