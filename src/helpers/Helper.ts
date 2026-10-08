import { WHATSAPP_NUMBER } from "../data/landing";

export const wppLink = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
