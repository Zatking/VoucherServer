const partNerRequest = require('../models/voucher.models').partNerRequest;

const getPartNerRequests = async (req, res) => {
    try {
        const partNerRequests = await partNerRequest.find({});
        res.status(200).json({ partNerRequests });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getPartNerRequestById = async (req, res) => {
    try {
        const { id } = req.params;
    
        const partNerRequest = await partNerRequest.findById(id);
    
        if (!partNerRequest) {
        return res.status(404).json({ message: "partNerRequest not found" });
        }
    
        res.status(200).json({ partNerRequest });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const createPartNerRequest = async (req, res) => {
    try {
        const {PartNerRequestID, PartNerRequestName, PartNerRequestEmail, PartNerRequestPhone, PartNerRequestAddress, PartNerRequestStatus} = req.body;
        if(!PartNerRequestID || !PartNerRequestName || !PartNerRequestEmail || !PartNerRequestPhone || !PartNerRequestAddress || !PartNerRequestStatus) {
            return res.status(400).json({ message: "Nhập thông tin partNerRequest không hợp lệ" });
        }
        const partNerRequest = new partNerRequest({
            PartNerRequestID,
            PartNerRequestName,
            PartNerRequestEmail,
            PartNerRequestPhone,
            PartNerRequestAddress,
            PartNerRequestStatus,
        });
        await partNerRequest.save();
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
        return res.status(404).json({ message: "Không tìm thấy" });
        }
    
        res.status(200).json({ message: "partNerRequest đã được xóa" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getPartNerRequests,
    getPartNerRequestById,
    createPartNerRequest,
    deletePartNerRequest,
}

