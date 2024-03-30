import cors from "cors";
import express from "express";
import { MongoClient } from "mongodb";
import dbConfig from "../app/config/db.config.js";
import customerApi from "../app/controllers/CustomerController.js";
import invoiceApi from "../app/controllers/InvoiceController.js";
import invoiceLineApi from "../app/controllers/InvoiceLineController.js";
import productApi from "../app/controllers/ProductsController.js";
import serverless from "serverless-http";
const corsOptions = { origin: dbConfig.CORS, credentials: true };
const app = express();
const client = new MongoClient(
  "mongodb+srv://njoco:OZCYn16yxbOtjQ2x@cluster0.dkvowsi.mongodb.net/"
);
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/.netlify/functions/productApi", productApi);
app.use("/.netlify/functions/customerApi", customerApi);
app.use("/.netlify/functions/invoiceApi", invoiceApi);
app.use("/.netlify/functions/invoiceLineApi", invoiceLineApi);

async function run() {
  try {
    // Stelle die Verbindung zur MongoDB her
    await client.connect();
    console.log("Successfully connected to MongoDB Atlas");
  } catch (err) {
    console.log(err.stack);
  } finally {
    // Schließe die MongoDB-Verbindung, wenn sie nicht mehr benötigt wird
    // Beachte, dass du die Verbindung nicht schließen solltest, wenn deine App auf mehrere Anfragen reagieren kann
    await client.close();
  }
}

run().catch(console.error);

// Exportiere die serverlose Funktion für den Einsatz in Netlify
export const handler = serverless(app);
