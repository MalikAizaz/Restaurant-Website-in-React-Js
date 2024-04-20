import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './Wattsapp.css';

const WhatsAppChat = ({ phoneNumber }) => {
  const handleClick = () => {
    // Construct the WhatsApp URL with the provided phone number
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    // Open a new window/tab to initiate the WhatsApp chat
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="whatsapp-chat">
      <button className="whatsapp-button" onClick={handleClick}>
        <FaWhatsapp className="whatsapp-icon" />
      </button>
    </div>
  );
};

export default WhatsAppChat;
