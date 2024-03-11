const express = require("express");
const { MongoClient } = require("mongodb");
const axios = require("axios");
const cors = require("cors");

const corsOptions = { origin: 'http://localhost:5173', credentials: true };

const url =
  "mongodb+srv://njoca:ECfsAUI5CxrMONug@shop.oldvczw.mongodb.net/";

const app = express();
const client = new MongoClient(url);

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Implementiere den Router für Produkte
const productApi = require("./app/controllers/ProductsController.js");
const { ProductS } = require("./app/models/ShopModel.js");
app.use("/api/products", productApi);

app.listen(8080, () => {
  console.log(`Server is running on port ${8080}.`);
});

async function run() {
  try {
    // Stelle die Verbindung zur MongoDB her
    await client.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
     useMongoClient: true
  } );
    console.log("Successfully connected to Atlas");

    // Beispielprodukt für das Einfügen in die Datenbank
    const product = {
      name: "John",
      unitPrice: 1000,
    };
    // Produkt erstellen
    const createdProduct = await axios.post("http://localhost:8080/api/products/", product);
    console.log("Product created:", createdProduct.data);

    // Alle Produkte abrufen
    const allProducts = await axios.get("http://localhost:8080/api/products/");
    console.log("Got All:", allProducts.data.length);

    // Produkt löschen (Annahme: createdProduct enthält ein id Attribut)
    const productId = createdProduct.data._id.toString(); // Convert ObjectId to string
    await axios.delete(`http://localhost:8080/api/products/` , { data: { id: productId } });
    console.log("Deleted product");


  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

run().catch(console.error);
