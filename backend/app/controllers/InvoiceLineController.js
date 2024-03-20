const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const dbConfig = require("../config/db.config.js");
const connection = mongoose.createConnection(dbConfig.URL);
const shopModal = require("../models/ShopModel.js");
const InvoiceLine = connection.model("InvoiceLine", shopModal.InvoiceLine);

const createInvoiceLine = async (req, res) => {
  try {
    console.log("asdf", req.body);
    const newInvoice = new InvoiceLine({
      name: req.body.name,
      unitPrice: req.body.unitPrice,
      quantity: req.body.quantity,
      invoice: req.body.invoice,
      product: req.body.product,
      lineTotal: req.body.lineTotal,
      status: req.body.status,
      entityKey: req.body.entityKey,
    });

    const data = await newInvoice.save();
    res.status(201).send(data);
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the InvoiceLine.",
    });
  }
};

const findAllInvoiceLines = async (req, res) => {
  try {
    const data = await InvoiceLine.find();
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving invoices.",
    });
  }
};

const findInvoiceLineById = async (req, res) => {
  try {
    const data = await InvoiceLine.findById(req.params.id);
    if (!data) {
      return res
        .status(404)
        .send({ message: "Invoice not found with id " + req.params.id });
    }
    res.send(data);
  } catch (err) {
    res
      .status(500)
      .send({ message: "Error retrieving Invoice with id=" + req.params.id });
  }
};

const updateInvoiceLineById = async (req, res) => {
  try {
    const data = await InvoiceLine.findByIdAndUpdate(req.params.id, req.body, {
      useFindAndModify: false,
      new: true,
    });
    if (!data) {
      return res.status(404).send({
        message: `Invoice not found with id=${req.params.id}.`,
      });
    }
    res.send(data);
  } catch (err) {
    res
      .status(500)
      .send({ message: "Error updating Invoice with id=" + req.params.id });
  }
};

const deleteInvoiceLineById = async (req, res) => {
  try {
    const data = await InvoiceLine.findByIdAndRemove(req.params.id);
    if (!data) {
      return res.status(404).send({
        message: `Invoice not found with id=${req.params.id}.`,
      });
    }
    res.send({ message: "Invoice deleted successfully!" });
  } catch (err) {
    res
      .status(500)
      .send({ message: "Could not delete Invoice with id=" + req.params.id });
  }
};

const deleteAllInvoiceLines = async (req, res) => {
  try {
    const data = await InvoiceLine.deleteMany({});
    res.send({
      message: `${data.deletedCount} invoices were deleted successfully!`,
    });
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while removing all invoices.",
    });
  }
};

router.post("/", createInvoiceLine);
router.get("/", findAllInvoiceLines);
router.get("/:id", findInvoiceLineById);
router.put("/:id", updateInvoiceLineById);
router.delete("/:id", deleteInvoiceLineById);
router.delete("/", deleteAllInvoiceLines);

module.exports = router;
