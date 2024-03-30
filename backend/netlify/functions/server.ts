import express from "express";
import serverless from "serverless-http";
import { MongoClient } from "mongodb";
import axios from "axios";
import cors from "cors";
import dbConfig from "../../app/config/db.config.js";
const corsOptions = { origin: dbConfig.CORS, credentials: true };
const app = express();
const client = new MongoClient(
  "mongodb+srv://njoco:OZCYn16yxbOtjQ2x@cluster0.dkvowsi.mongodb.net/"
);
import productApi from "../../app/controllers/ProductsController.js";
import customerApi from "../../app/controllers/CustomerController.js";
import invoiceApi from "../../app/controllers/InvoiceController.js";
import invoiceLineApi from "../../app/controllers/InvoiceLineController.js";

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/products", productApi);
app.use("/api/customers", customerApi);
app.use("/api/invoices", invoiceApi);
app.use("/api/invoiceLines", invoiceLineApi);
export const handler = serverless(app);
