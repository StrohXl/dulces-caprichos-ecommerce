import { Details } from "./details.type";
import { Variants } from "./variant.type";

export type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  variants: Variants[];
  details: Details;
  freeShipping: boolean;
  relatedProducts: number[];
  category: number;
};
