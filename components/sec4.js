import React from 'react';
const ContactSection = () => {
    return (
        <section className="contact-section">
            <div className="contact-left">
                <h2>Contact Us</h2>
                <div className="contact-details">
                    <p><strong>Email:</strong> contact@example.com</p>
                    <p><strong>Phone:</strong> +1234567890</p>
                    <p><strong>Address:</strong> 123 Street, City, Country</p>
                </div>
            </div>
            <div className="contact-right">
                <div className="contact-form">
                    <div className="form-group">
                        <input type="text" id="name" name="name" placeholder="Name" required />
                        <input type="email" id="email" name="email" placeholder="Email" required />
                    </div>
                    <div className="form-group">
                        <textarea id="message" name="message" placeholder="Message" rows="5" required></textarea>
                    </div>
                    <div className="form-group sub">
                        <button type="submit">Send Message</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default ContactSection;