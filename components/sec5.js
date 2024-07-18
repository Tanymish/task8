import React from 'react';
const SubscribeSection = () => {
    return (
        <section className="subscribe-section">
            <div className="subscribe-left">
                <h2>Subscribe to the Taanish newsletter to stay up-to-date with the latest news</h2>
                <div className="subscribe-form">
                    <input type="email" placeholder="Enter your email" />
                    <button type="submit">Subscribe</button>
                </div>
            </div>
            <div className="subscribe-right">
                <div className="connect platforms">
                    <h3>Connect</h3>
                    <p><i className="fab fa-facebook"></i> Facebook</p>
                    <p><i className="fab fa-twitter"></i> Twitter</p>
                    <p><i className="fab fa-instagram"></i> Instagram</p>
                </div>
                <div className="business-hours">
                    <h3>Business Hours</h3>
                    <p>Monday - Friday: 9am - 5pm</p>
                    <p>Saturday: 10am - 2pm</p>
                    <p>Sunday: Closed</p>
                </div>
            </div>
        </section>
    );
}
export default SubscribeSection;