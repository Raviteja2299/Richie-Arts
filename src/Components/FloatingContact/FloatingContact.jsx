import "./FloatingContact.css";
import {
  FaWhatsapp,
  FaTelegramPlane,
  FaEnvelope,
} from "react-icons/fa";

export default function FloatingContact() {
  const phone = "919876543210";          // Replace with your WhatsApp number
  const telegram = "your_username";      // Replace with your Telegram username
  const email = "ravitejajilkara@gmail.com"; // Replace with your email

  return (
    <div className="floating-buttons">
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${phone}?text=Hi! I came across your Richie Arts website and I'm interested in your artwork.`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn whatsapp"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>

      {/* Telegram */}
      <a
        href={`https://t.me/${telegram}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn telegram"
        aria-label="Telegram"
      >
        <FaTelegramPlane />
      </a>

      {/* Email */}
      <a
        href={`mailto:${email}?subject=Artwork Inquiry&body=Hi Richie Arts,%0A%0AI would like to know more about your artwork.`}
        className="floating-btn email"
        aria-label="Email"
      >
        <FaEnvelope />
      </a>
    </div>
  );
}