const Category = require("../models/voucher.models").Category; // Import the category model

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json({ categories });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
    
        const category = await Category.findById(id);
    
        if (!category) {
        return res.status(404).json({ message: "Category not found" });
        }
    
        res.status(200).json({ category });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createCategory = async (req, res) => {
    try {
        const {CategoryID, CategoryName} = req.body;
        if(!CategoryID || !CategoryName) {
            return res.status(400).json({ message: "Nhập thông tin category không hợp lệ" });
        }
        const category = new Category({
            CategoryID,
            CategoryName,
        });
        await category.save();
        res.status(200).json({ category });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
    
        const category = await Category.findByIdAndDelete(id);
    
        if (!category) {
        return res.status(404).json({ message: "Không tìm thấy" });
        }
    
        res.status(200).json({ message: "Category đã được xóa" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getCategories,
    getCategoryById,
    createCategory,
    deleteCategory,
}