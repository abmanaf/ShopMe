import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  const [contactingName, setContactingName] = useState("");
  const [contactingEmail, setContactingEmail] = useState("");
  const [contactingMessage, setContactingMessage] = useState("");

  const [contacting, setContacting] = useState([]);

  const handleSendFromContactPage = (e) => {
    e.preventDefault();

    if (contactingName && contactingEmail && contactingMessage) {
      const newContact = {
        name: contactingName,
        email: contactingEmail,
        message: contactingMessage,
      };

      setContacting((contacting) =>
       [...contacting,
         newContact
        ]);

      setContactingName("");
      setContactingEmail("");
      setContactingMessage("");
    } else {
      alert("Please fill in all fields before submitting.");
    }
    console.log(`mame ${contactingName}, email: ${contactingEmail}, message: ${contactingMessage}`)
  };

  // const location = useLocation();

  return (
    <div className="Contact-container">
      <div className="contact-image"></div>
      <div className="contact-forms">
        <form>
          <h2 className="contact">Contact Us</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={contactingName}
              onChange={(e) => setContactingName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={contactingEmail}
              onChange={(e) => setContactingEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              required
              value={contactingMessage}
              onChange={(e) => setContactingMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            className="submit-message"
            type="submit"
            onClick={handleSendFromContactPage}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
