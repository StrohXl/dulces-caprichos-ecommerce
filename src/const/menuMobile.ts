import { ItemNavegation } from "@/types/item-navegation.type";
import navegation from "@/data/navegation";

const menuMobile: ItemNavegation[] = [
  {
    title: "Inicio",
    link: "/",
  },
  ...navegation,
];

export default menuMobile
