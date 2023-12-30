import React from "react";

export const WhatsAppIcon = () => {
  const whatsappNumber = "+233550800034";
  const whatsappMessage = "Hello, I have a question about your website.";

  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="chat-me">
      <a
        className="whatsup-docaration"
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="inside-whatsup-icon">Need Help? Chat Us</span>
        <i
          className="fa fa-whatsapp"
          aria-hidden="true"
          style={{ color: "green", fontSize: "2rem" }}
        ></i>
      </a>
    </div>
  );
};
