const partNerRequest = require('../models/voucher.models').partNerRequest;

const getPartNerRequests = async (req, res) => {
    try {
        const partNerRequests = await partNerRequest.find({});
        res.status(200).json({ partNerRequests });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getPartNerRequestByOrderId = async (req, res) => {
    try {
        const { OrderId } = req.params;
        const partNerRequest = await partNerRequest.find({ OrderId });
        res.status(200).json({ partNerRequest });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getPartNerRequestById = async (req, res) => {
    try {
        const { id } = req.params;
        const partNerRequest = await partNerRequest.findById(id);
        res.status(200).json({ partNerRequest });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createPartNerRequest = async (req, res) => {
    try {
        const partNerRequest = await partNerRequest.create(req.body);
        res.status(200).json({ partNerRequest });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deletePartNerRequest = async (req, res) => {
    try {
        const { id } = req.params;
        const partNerRequest = await partNerRequest.findByIdAndDelete(id);
        if (!partNerRequest) {
            return res.status(404).json({ message: "PartNerRequest not found" });
        }
        res.status(200).json({ message: "PartNerRequest deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getPartNerRequests,
    getPartNerRequestById,
    createPartNerRequest,
    deletePartNerRequest,
    getPartNerRequestByOrderId
}

