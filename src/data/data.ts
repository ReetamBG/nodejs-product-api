import { v4 as uuidv4 } from "uuid";

export interface Product {
  id: string;
  name: string;
  description?: string | null
  price: number;
}

export const products: Product[] = [
  { id: uuidv4(), name: "Potato", description: "A fresh Potata", price: 10 },
  { id: uuidv4(), name: "Tomato", description: "A fresh Tomata", price: 20 }
];