import { BsCake2Fill } from "react-icons/bs";
import { Category } from "../_types/category";
import { GiCakeSlice, GiCookie, GiCupcake } from "react-icons/gi";
import { MdCake } from "react-icons/md";
import { RiCake3Fill } from "react-icons/ri";
const categories: Category[] = [
  {
    id: 1,
    name: "Tortas clásicas",
    imageUrl: "/cake.webp",
    description: "Deliciosas tortas personalizadas para cualquier ocasión.",
    url: "/categorias/tortas-clasicas",
    icon: BsCake2Fill,
  },
  {
    id: 2,
    name: "Tortas rellenas altas",
    description: "Variedad de postres caseros para endulzar tu día.",
    url: "/categorias/tortas-altas",
    icon: MdCake,
    imageUrl: "/cake.webp",
  },
  {
    id: 3,
    name: "Tortas frías",
    description: "Deliciosas tortas personalizadas para cualquier ocasión.",
    url: "/categorias/tortas-frias",
    icon: GiCakeSlice,
    imageUrl: "/cake.webp",
  },
  {
    id: 4,
    name: "Petit Gâteau",
    description: "Variedad de postres caseros para endulzar tu día.",
    url: "/categorias/petit-gateau",
    icon: GiCupcake,
    imageUrl: "/cake.webp",
  },
  {
    id: 5,
    name: "Galletas Style Newyork",
    description: "Deliciosas tortas personalizadas para cualquier ocasión.",
    url: "/categorias/galletas-style-newyork",
    icon: GiCookie,
    imageUrl: "/cake.webp",
  },
  {
    id: 6,
    name: "Mini Dulces",
    description: "Variedad de postres caseros para endulzar tu día.",
    url: "/categorias/mini-dulces",
    imageUrl: "/cake.webp",
    icon: RiCake3Fill,
  },
];

export default categories;
