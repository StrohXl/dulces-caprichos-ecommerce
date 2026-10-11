import { IconType } from "react-icons";

export type Category = {
  id: number;
  name: string;
  description: string;
  imageUrl: string,
  url: string;
  icon: IconType;
};
