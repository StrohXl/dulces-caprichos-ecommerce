import { FaCakeCandles } from "react-icons/fa6";
import { LuDessert } from "react-icons/lu";
import { Category } from "../_types/category";

const categories: Category[] = [
  {
    id: 1,
    name: "Tortas",
    imageUrl: "/cake.webp",
    description: "Deliciosas tortas personalizadas para cualquier ocasión.",
    url: "/categorias/tortas",
    icon: FaCakeCandles,
  },
  {
    id: 2,
    name: "Postres",
    description: "Variedad de postres caseros para endulzar tu día.",
    url: "/categorias/postres",
    icon: LuDessert,
    imageUrl: "/cake.webp",
  },
  {
    id: 3,
    name: "Cupcakes",
    description: "Deliciosas tortas personalizadas para cualquier ocasión.",
    url: "/categorias/tortas",
    icon: FaCakeCandles,
    imageUrl: "/cake.webp",
  },
  {
    id: 4,
    name: "Sopas",
    description: "Variedad de postres caseros para endulzar tu día.",
    url: "/categorias/postres",
    icon: LuDessert,
    imageUrl: "/cake.webp",
  },
  {
    id: 5,
    name: "Brownie",
    description: "Deliciosas tortas personalizadas para cualquier ocasión.",
    url: "/categorias/tortas",
    icon: FaCakeCandles,
    imageUrl: "/cake.webp",
  },
  {
    id: 6,
    name: "Brazo guitano",
    description: "Variedad de postres caseros para endulzar tu día.",
    url: "/categorias/postres",
    imageUrl: "/cake.webp",
    icon: LuDessert,
  },
  {
    id: 7,
    name: "Arepa",
    description: "Deliciosas tortas personalizadas para cualquier ocasión.",
    url: "/categorias/tortas",
    icon: FaCakeCandles,
    imageUrl: "/cake.webp",
  },
  {
    id: 8,
    name: "Panqueca",
    description: "Variedad de postres caseros para endulzar tu día.",
    imageUrl: "/cake.webp",
    url: "/categorias/postres",
    icon: LuDessert,
  },
];

export default categories;
