import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/7217638558?text=Hello%20Hitan%20Life%20Sciences,%20I%20would%20like%20to%20know%20more%20about%20your%20products."
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-2
        sm:bottom-6
        sm:right-6
        right-1
        z-50
        bg-green-500
        hover:bg-green-600
        text-white
        p-4
        rounded-full
        shadow-lg
        hover:scale-110
        transition-all
        duration-300
      "
    >
      <FaWhatsapp className="sm:w-7 sm:h-7 md:w-10 md:h-10 h-5 w-5" />
    </a>
  );
}
