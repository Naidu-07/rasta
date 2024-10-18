
import React from 'react';
import './Footer.css'; // Create a CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>
                        We are a leading company in our industry, dedicated to providing quality service and customer satisfaction.
                    </p>
                </div>
                <div className="footer-section">
                    <h3>Branches</h3>
                    <ul>
                        <li>New York</li>
                        <li>Los Angeles</li>
                        <li>Chicago</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contact Info</h3>
                    <p>Email: info@yourcompany.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
