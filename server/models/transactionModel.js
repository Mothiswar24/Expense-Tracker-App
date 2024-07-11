const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema(
    {
        userid:
        {
            type:String,
            required:true
        },
        amount:
        {
            type: Number,
            required: [true, 'Amount is required']
        },
        type:
        {
            type:String,
            required:[true,'Type is required']
        },
        category:
        {
            type: String,
            required: [true, 'Category Required']
        },
        reference:
        {
            type: String,
        },
        description:
        {
            type: String,
            required: [true, 'Description Required']
        },
        date:
        {
            type: Date,
            required: [true, 'Date is Required']
        }
    }, { timestamps: true }
)

const transactionModel = mongoose.model('transactions', transactionSchema)

module.exports = transactionModel;