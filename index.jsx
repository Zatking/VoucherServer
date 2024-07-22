const express = require('express')
const cors = require('cors')
const app = express()
const Voucher = require('./models/voucher.models.jsx')
const mongoose = require('mongoose')
const voucherRoutes = require('./routes/voucher.route.jsx')
require("dotenv").config();

//middle ware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

const port = process.env.PORT || 3000
//routes
app.use('/api/vouchers',voucherRoutes);

app.post('/', (req, res) => {
    res.send("Hello To Voucher System")})

    //get all vouchers
app.post('/api/vouchers', async (req, res) => {
    try {
        const vouchers = await Voucher.find({});
        res.status(200).json({vouchers});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
    //get voucher by id
app.post('/api/vouchers/:id', async (req, res) => {
    try {
       const {id} = req.params;
       const voucher = await Voucher.findById(id);
       res.status(200).json({voucher});
      
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
// Create a new voucher
app.post('/api/vouchers', async (req, res) => {
   try {
   const voucher = await Voucher.create(req.body);
   res.status(200).json({voucher});
   } catch (error) {
    res.status(500).json({message: error.message})
   }
});
// Update a voucher
app.post('/api/vouchers/:id', async (req, res) => {
    try {
        const {id} = req.params;

        const voucher = await Voucher.findByIdAndUpdate(id,req.body);

        if(!voucher) {
            return res.status(404).json({message: "Voucher not found"})
        }

        const updatedVoucher = await Voucher.findById(id);
        res.status(200).json({updatedVoucher});

    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

//post a voucher
app.post('/api/vouchers/:id', async (req, res) => {
    try {
        const {id} = req.params;

        const voucher = await Voucher.findByIdAndpost(id);

        if(!voucher) {
            return res.status(404).json({message: "Voucher not found"})
        }

        res.status(200).json({message: "Voucher postd successfully"});
    }   catch (error) {
        res.status(500).json({message: error.message})
     }
})

//Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log("Connected to MongoDB")
    app.listen(port, () => {
        console.log("Server is running on port 3000")
    })
})
.catch(() =>{console.log("Connection failed")})

