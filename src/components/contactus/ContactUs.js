import React, { useState } from "react";
import "./contactus.css";
import gamil from "../assets/gmail_5968534.png";
import whatsapp from "../assets/whatsapp_3938041.png";
import image from "../assets/images (1).png";

const ContactUs = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const vendor = {
    email: "nagendra@example.com",
    phone: "+1 234 567 890",
    address: "123 Dummy St, Test City, TX 12345",
  };

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Contact Us</button>

      {modalIsOpen && (
        <div className="custom-modal">
          <div className="modal-content">
            {/* Close "X" mark */}
            <span className="close-icon" onClick={closeModal}>
              &times;
            </span>
            <h1>
              <strong>Get In Touch:</strong>
            </h1>
            <h1><strong>NAGENDRA</strong></h1>

            <div className="contact-info">
              <p className="mail">
                <img src={gamil} alt="" />
                &nbsp;<strong>Email Id: </strong>
                <br />
                {vendor.email}
              </p>

              <p className="mail">
                <img src={whatsapp} alt="" />
                &nbsp;<strong>Phone No:</strong> <br />
                {vendor.phone}
              </p>
              <p className="mail">
                <img src={image} alt="" />
                <strong>Registered Address:</strong>
                <br /> {vendor.address}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
