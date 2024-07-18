import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-icons">
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaLinkedin /></a>
            </div>
            <p>&copy; 2024 Taanish. All rights reserved.</p>
            <p>
                <a href="#" style={{ color: 'white', textDecoration: 'underline' }}>Privacy Policy</a> | 
                <a href="#" style={{ color: 'white', textDecoration: 'underline' }}>Terms of Service</a>
            </p>
        </footer>
    );
};

export default Footer;
