'use client';

import { FaWhatsapp } from "react-icons/fa";
import "./whatsapp-button.css"; // CSS para animação

interface WhatsappButtonProps {
  phone: string; // exemplo: "5511999999999"
  message?: string;
}

export default function WhatsappButton({ phone, message = "" }: WhatsappButtonProps) {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;

  return (
    <a
      title="contato no whatsapp"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6
        w-16 h-16
        bg-green-500 hover:bg-green-600
        text-white text-2xl
        rounded-full
        flex items-center justify-center
        shadow-lg hover:shadow-2xl
        transition-all duration-300
        z-50
        whatsapp-bounce
      "
      aria-label="Fale conosco pelo WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}