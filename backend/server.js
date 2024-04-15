const cors = require("cors");
const express = require("express");
const { MongoClient } = require("mongodb");
const dbConfig = require("./app/config/db.config.js");
const customerApi = require("./app/controllers/CustomerController.js");
const invoiceApi = require("./app/controllers/InvoiceController.js");
const invoiceLineApi = require("./app/controllers/InvoiceLineController.js");
const productApi = require("./app/controllers/ProductsController.js");
const testDB = require("./testDB.js")
const corsOptions = { origin: dbConfig.CORS, credentials: true };
const app = express();
const client = new MongoClient(
  "mongodb+srv://njoco:OZCYn16yxbOtjQ2x@cluster0.dkvowsi.mongodb.net/"
);

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/products", productApi);
app.use("/api/customers", customerApi);
app.use("/api/invoices", invoiceApi);
app.use("/api/invoiceLines", invoiceLineApi);
app.listen(8080, () => {
  console.log(`Server is running on port ${8080}`);
});

async function run() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Successfully connected to Atlas");
    await testDB()
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

run().catch(console.error);
