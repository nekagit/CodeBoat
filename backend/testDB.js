
const axios = require("axios");
async function testDB() {
  // Example product to insert into the database
  const product = {
    name: "John",
    unitPrice: 1000,
  };
  const customerInit = {
    name: "John",
    unitPrice: 1000,
  };

  // Create product
  const createdProduct = await axios.post(
    "http://localhost:8080/api/products/",
    product
  );
  console.log("asdf")
  const sampleProduct = createdProduct.data; // Use the returned product object
  console.log("Product created:", sampleProduct);

  // Example customer to insert into the database
  console.log("asdf")

  const createdCustomer = await axios.post(
    "http://localhost:8080/api/customers/",
    customerInit
  );
  const sampleCustomer = createdCustomer.data; // Use the returned customer object
  console.log("Customer created:", sampleCustomer);

  // Example invoice to insert into the database
  const invoice = {
    number: 12345,
    customer: sampleCustomer._id, // Use the customer ID from the created customer
    date: new Date().toISOString(),
    invoiceTotal: 500,
  };

  // Create invoice
  const createdInvoice = await axios.post(
    "http://localhost:8080/api/invoices/",
    invoice
  );

  const sampleInvoice = createdInvoice.data; // Use the returned invoice object
  console.log("Invoice created:", sampleInvoice);

  // Get all products
  const allProducts = await axios.get("http://localhost:8080/api/products/");
  console.log("Got All Products:", allProducts.data.length);

  // Get all customers
  const allCustomers = await axios.get("http://localhost:8080/api/customers/");
  console.log("Got All Customers:", allCustomers.data.length);

  // Get all invoices
  const allInvoices = await axios.get("http://localhost:8080/api/invoices/");
  console.log("Got All Invoices:", allInvoices.data.length);

  // Delete product
  await axios.delete("http://localhost:8080/api/products/", {
    data: { id: sampleProduct._id },
  });

  // Delete customer
  await axios.delete("http://localhost:8080/api/customers/", {
    data: { id: sampleCustomer._id },
  });

  // Delete invoice
  await axios.delete("http://localhost:8080/api/invoices/", {
    data: { id: sampleInvoice._id },
  });

  console.log("Deleted product");
  console.log("Deleted customer");
  console.log("Deleted invoice");
  console.log("All Test Done.")
}
module.exports = testDB