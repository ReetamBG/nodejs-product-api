import express from "express";
import { v4 as uuidv4 } from "uuid";
import { products, Product } from "./data/data";

// initialization
const PORT = 8000;
const app = express();

app.use(express.json());

// GET products
app.get("/products", (req, res) => {
  res.json(products);
});

// POST products
app.post("/products", (req, res) => {
  const { name, description, price } = req.body;
  if (!name) {
    res.status(400).json({ error: "Please provide a name for your product :3" });
    return;
  }
  if (typeof price !== "number") {
    res.status(400).json({ error: "Please provide a valid numeric price" });
    return;
  }

  const newProduct: Product = {
    id: uuidv4(),
    name,
    description,
    price,
  };
  products.push(newProduct);
  res.status(201).json({ message: "Product created successfully" });
});

// DELETE products/id
app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  const index = products.findIndex((product: Product) => product.id === id);
  if (index === -1) {
    res.status(404).json({ error: "Product not found" });
    return;
  }

  products.splice(index, 1);
  res.status(200).json({ message: "Product deleted successfully" });
});

// start tge server
app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
);
