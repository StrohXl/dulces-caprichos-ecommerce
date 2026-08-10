import { Details } from "./details.type";

export type DetailsVariant = {
  name: string | "";
  price: number;
  image: string;
  details: Details;
};

export type Variants = {
  title: "Tamano" | "Sabor de puncake" | "Tipo de Relleno" | "Cobertura";
  variants: DetailsVariant[];
};
