const History = require("../models/voucher.models").UseHistory; // Import the history model

//get all histories
const getHistory = async (req, res) => {
  try {
    const histories = await History.find({});
    res.status(200).json({ histories });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//get history by id
const getHistoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const history = await History.findById(id);
    res.status(200).json({ history });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const createHistory = async (req, res) => {
  try {
    const history = await History.create(req.body);
    res.status(200).json({ history });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const deleteHistory = async (req, res) => {
    try {
        const { id } = req.params;
        const history = await History.findByIdAndDelete(id);
        if (!history) {
        return res.status(404).json({ message: "History not found" });
        }
        res.status(200).json({ message: "History deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
  getHistory,
  getHistoryById,
  createHistory,
  deleteHistory,
}