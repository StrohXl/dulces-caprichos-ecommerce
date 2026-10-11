import { IconType } from "react-icons";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

type Network = {
  name: string;
  url: string;
  icon: IconType;
};

const networks: Network[] = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/dulcescaprichos_ve/",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/dulcescaprichos",
    icon: FaFacebookF,
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/584126947694?message=hola",
    icon: FaWhatsapp,
  },
];

export default networks;
