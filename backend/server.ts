import axios from "axios";
import cors from "cors";
import express from "express";
import { MongoClient } from "mongodb";
import dbConfig from "./app/config/db.config.js";
import customerApi from "./app/controllers/CustomerController.js";
import invoiceApi from "./app/controllers/InvoiceController.js";
import invoiceLineApi from "./app/controllers/InvoiceLineController.js";
import productApi from "./app/controllers/ProductsController.js";
const corsOptions = { origin: dbConfig.CORS, credentials: true };
const app = express();
const netlifyRouter = app.router
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
app.use("/.netlify/functions/server", netlifyRouter); 
async function run() {
  try {
    // Stelle die Verbindung zur MongoDB her
    await client.connect();
    console.log("Successfully connected to Atlas");
    app.listen(8080, () => {
      console.log(`Server is running on port ${8080}`);
    });
    // await testDB()
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

run().catch(console.error);

async function testDB() {
  // Beispielprodukt für das Einfügen in die Datenbank
  const product = {
    name: "John",
    unitPrice: 1000,
  };

  // Produkt erstellen
  const createdProduct = await axios.post(
    "http://localhost:8080/api/products/",
    product
  );
  const sampleProduct = createdProduct.data; // Use the returned product object
  console.log("Product created:", sampleProduct);

  // Beispielkunde für das Einfügen in die Datenbank
  const customer = await axios.post(
    "http://lsampleInvoiceocalhost:8080/api/customers/",
    {}
  );

  const createdCustomer = await axios.post(
    "http://localhost:8080/api/customers/",
    customer
  );
  const sampleCustomer = createdCustomer.data; // Use the returned customer object
  console.log("Customer created:", sampleCustomer);

  // Beispielrechnung für das Einfügen in die Datenbank
  const invoice = {
    number: 12345,
    customer: sampleCustomer._id, // Use the customer ID from the created customer
    date: new Date().toISOString(),
    invoiceTotal: 500,
  };

  // Rechnung erstellen
  const createdInvoice = await axios.post(
    "http://localhost:8080/api/invoices/",
    invoice
  );

  const sampleInvoice = createdInvoice.data; // Use the returned invoice object
  console.log("Invoice created:", sampleInvoice);

  // Alle Produkte abrufen
  const allProducts = await axios.get("http://localhost:8080/api/products/");
  console.log("Got All Products:", allProducts.data.length);

  // Alle Kunden abrufen
  const allCustomers = await axios.get("http://localhost:8080/api/customers/");
  console.log("Got All Customers:", allCustomers.data.length);

  // Alle Rechnungen abrufen
  const allInvoices = await axios.get("http://localhost:8080/api/invoices/");
  console.log("Got All Invoices:", allInvoices.data.length);

  // Produkt löschen
  await axios.delete("http://localhost:8080/api/products/", {
    data: { id: sampleProduct._id },
  });

  // Kunde löschen
  await axios.delete("http://localhost:8080/api/customers/", {
    data: { id: sampleCustomer._id },
  });

  // Rechnung löschen
  await axios.delete("http://localhost:8080/api/invoices/", {
    data: { id: sampleInvoice._id },
  });

  console.log("Deleted product");
  console.log("Deleted customer");
  console.log("Deleted invoice");
}
