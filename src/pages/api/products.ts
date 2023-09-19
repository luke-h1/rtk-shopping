// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

interface Product {
  id: number;
  name: string;
  brand: string;
  desc: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "iPhone 12 Pro",
    brand: "Apple",
    desc: "6.1-inch display",
    price: 999,
    image: `${process.env.NEXT_PUBLIC_URL}images/iphone12pro.jpg`,
  },
  {
    id: 2,
    name: "iPhone 12",
    brand: "Apple",
    desc: "5.4-inch mini display",
    price: 699,
    image: `${process.env.NEXT_PUBLIC_URL}images/iphone12.jpg`,
  },
  {
    id: 3,
    name: "Galaxy S",
    brand: "Samsung",
    desc: "6.5-inch display",
    price: 399,
    image: `${process.env.NEXT_PUBLIC_URL}images/galaxyS.png`,
  },
];

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  res.status(200).json(products);
}
