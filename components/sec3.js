import React from 'react';

const FeaturedCardsSection = () => {
    return (
        <section className="main-section2">
            <div className="section-heading">
                <h2>Featured Cards</h2>
            </div>
            <div className="card-container">
                <div className="cards2">
                    <img className="imgcont" src="/download.jpeg" alt="Image 1" />
                    <div className="card-content">
                        <span className="date">July 16, 2024</span>
                        <p className="description">Magic created by AI image generator</p>
                    </div>
                </div>
                <div className="cards2">
                    <img className="imgcont" src="/istockphoto-485371557-612x612.jpg" alt="Image 2" />
                    <div className="card-content">
                        <span className="date">July 17, 2024</span>
                        <p className="description">Developing art with this technology</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturedCardsSection;
