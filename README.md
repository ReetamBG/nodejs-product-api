# Node.js + Express.js Product API

A simple REST API for basic product management using Node.js, Express, and TypeScript. Data is stored in-memory.

## Endpoints

- `GET /products` – Get all products
- `POST /products` – Add a new product (`name` and `price` required)
- `DELETE /products/:id` – Delete a product by ID

## How to Run

```bash
npm install
npm run build
npm run start
```
Server runs at http://localhost:8000

## Sample POST Body
```json
{
  "name": "Sample Product",
  "description": "optional",
  "price": 49.99
}
```

### To improve

- Add functionality to be able to post more than one product (maybe array of products) at once. 
- To use an actual database instead of in memory storage as it resets everytime
- Add better validation