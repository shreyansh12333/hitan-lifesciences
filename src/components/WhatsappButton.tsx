import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/7217638558?text=Hello%20Hitan%20Life%20Sciences,%20I%20would%20like%20to%20know%20more%20about%20your%20products."
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
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
      <FaWhatsapp size={32} />
    </a>
  );
}
