const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    unitPrice: Number, 
});

const CustomerSchema = new mongoose.Schema({
    name: String,
});

const InvoiceSchema = new mongoose.Schema({
    number: Number,
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer' 
    },
    date: Date,
    invoiceTotal: Number,
});

const InvoiceLineSchema = new mongoose.Schema({
    invoice: {type: mongoose.Schema.Types.ObjectId,ref:'Invoice'},
    product: {type: mongoose.Schema.Types.ObjectId,ref:'Product'},
    unitPrice: Number,
    quantity: Number,
    lineTotal: Number,
});


module.exports = {ProductS: ProductSchema, CustomerS:CustomerSchema,InvoiceS: InvoiceSchema, InvoiceLine: InvoiceLineSchema };
