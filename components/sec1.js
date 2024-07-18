import React from 'react';

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <h3>A WORLD OF MAGICAL <span>AI IMAGES</span></h3>
          <h5>Developing artistic images by AI</h5>
          <form className="form-inp">
            <input type="text" placeholder="Enter your need" />
            <button className="gen-btn">Generate Image</button>
          </form>
        </div>
        <div className="sidebar-btn">
          <button>
            <span>DEMOS</span>
          </button>
        </div>
        <ul className="feat-list">
          <li>High Resolution Images</li>
          <li>Newer Generations</li>
          <li>Free to Use</li>
        </ul>
      </section>

      <section className="img-gen">
        <h5>Some images developed by AI :</h5>
        <div className="image-gall">
          <img src="/img1.jpg" alt="Image 1" className="diamond" />
          <img src="/img2.jpg" alt="Image 2" className="ellipse" />
          <img src="/img3.jpg" alt="Image 3" className="pentagon" />
          <img src="/img4.jpg" alt="Image 4" className="heart" />
          <img src="/img5.jpg" alt="Image 5" className="circle" />
        </div>
        <div className="big-box">
          <h1>Generative AI is the most powerful tool for creativity that has ever been created. It has the potential to unleash a new era of human innovation</h1>
          <h3>Elon Musk</h3>
          <h5>CEO of Tesla</h5>
          <img className="img-round" src="/shape8.svg" alt="Shape" />
        </div>
      </section>

      <section className="how-it-works">
        <h2>HOW IT WORKS</h2>
        <div className="cards-container">
          <div className="card">
            <div className="image">
              <img className="diamond" src="/realistic-torn-ripper-orange-paper-frame-background_1017-39383.jpg" alt="Image 2" />
            </div>
            <div className="content">
              <h3>Uploading</h3>
              <p>Upload an image of your choice which you wish to get a creative transformation by AI.</p>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img className="ellipse" src="/blue-brush-stroke-watercolor-design_1035-21715.jpg" alt="Image 2" />
            </div>
            <div className="content">
              <h3>Processing</h3>
              <p>The algorithms analyze and process your images and present to you unrealistic possibilities.</p>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img className="pentagon" src="/modern-circular-grunge-frame-decorative-banner-design_1055-19778.jpg" alt="Image 2" />
            </div>
            <div className="content">
              <h3>Enhancing</h3>
              <p>You get the option to choose from a variety of styles so that we are able to deliver what you want.</p>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img className="diamond" src="/blue-brush-stroke-watercolor-design_1035-21715.jpg" alt="Image 2" />
            </div>
            <div className="content">
              <h3>Downloading</h3>
              <p>Your AI-enhanced and generated image is all ready to be downloaded and shared by you with the world.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-head">
        <div className="head-sec">
          <h2>Features AI provides us</h2>
        </div>
        <section className="section">
          <div className="section-part">
            <div className="serial-number">01</div>
            <div className="topic-name">Amazing Style Curation</div>
          </div>
          <div className="section-part">
            <div className="description">
              Transform your images with styles inspired by renowned painters, unique visual aesthetics, or customizable filters.
            </div>
          </div>
        </section>
        <section className="section">
          <div className="section-part">
            <div className="serial-number">02</div>
            <div className="topic-name">Customize Accordingly</div>
          </div>
          <div className="section-part">
            <div className="description">
              Tailor each transformation to your liking with easy-to-use customization options. Adjust style intensity, and experiment with color palettes for your images.
            </div>
          </div>
        </section>
        <section className="section">
          <div className="section-part">
            <div className="serial-number">03</div>
            <div className="topic-name">Real-Time Judging</div>
          </div>
          <div className="section-part">
            <div className="description">
              Witness the magic unfold in real-time. Instantly preview the enhanced image and make on-the-fly adjustments.
            </div>
          </div>
        </section>
        <section className="section">
          <div className="section-part">
            <div className="serial-number">04</div>
            <div className="topic-name">Best-Quality Generations</div>
          </div>
          <div className="section-part">
            <div className="description">
              The AI Image Generator ensures that the final output retains clarity, and resolution, delivering professional-grade results for your creative projects.
            </div>
          </div>
        </section>
      </section>

      <section className="comm-section">
        <div className="section-head">
          <h3>Join our family</h3>
          <h2>trusted by <span>20 million+</span> developers worldwide</h2>
        </div>
        <div className="boxes-container">
          <div className="feature-box">
            <h4>1M+</h4>
            <p>Generation of AI images</p>
          </div>
          <div className="feature-box">
            <h4>80K+</h4>
            <p>Edits we do every day</p>
          </div>
          <div className="feature-box">
            <h4>11M+</h4>
            <p>Processing of images</p>
          </div>
          <div className="feature-box">
            <h4>10+ </h4>
            <p>Experience in this field</p>
          </div>
        </div>
      </section>

      <section className="main-section">
        <div className="section-content">
          <h2>The features image generator showcases</h2>
          <div className="oval-box">
            <button className="action-button main-button">ALL</button>
            <button className="word">Portrait</button>
            <button className="word">Prompt</button>
            <button className="word">Abstract</button>
            <button className="word">3D</button>
            <button className="word">Landscape</button>
            <button className="word">Replace</button>
            <button className="word">Realistic</button>
            <button className="word">Still</button>
          </div>
        </div>
      </section>

      <section className="img-gen2">
        <div className="image-gallery2">
          <img src="/img1.jpg" alt="Image1" />
          <img src="/img2.jpg" alt="Image2" />
          <img src="/img3.jpg" alt="Image3" />
          <img src="/img4.jpg" alt="Image4" />
          <img src="/img5.jpg" alt="Image5" />
        </div>
      </section>

      <section className="image-gallery-section">
        <div className="gallery-heading">
          <h2>The tools we provide</h2>
        </div>
        <div className="gallery">
          <div className="gallery-item">
            <img src="/img5.jpg" alt="AI Image 1" />
            <h2>Photo editor</h2>
          </div>
          <div className="gallery-item">
            <img src="/img2.jpg" alt="AI Image 2" />
            <h2>Stable Doodle</h2>
          </div>
          <div className="gallery-item">
            <img src="/img1.jpg" alt="AI Image 3" />
            <h2>Remove Background</h2>
          </div>
          <div className="gallery-item">
            <img src="/img3.jpg" alt="AI Image 4" />
            <h2>Uncrop</h2>
          </div>
          <div className="gallery-item">
            <img src="/img4.jpg" alt="AI Image 5" />
            <h2>Text Remover</h2>
          </div>
          <div className="gallery-item">
            <h2>Background replace</h2>
          </div>
        </div>
      </section>

      <section className="rate-section">
        <div className="rate-head">
          <h2>2K+ users rated us <span>4.7/5 and above</span><br />Some of our reviews</h2>
        </div>
        <div className="boxes">
          <div className="feature-rate">
            <p>The app is incredibly easy to navigate. The results are nothing short of amazing, giving your photos a professional and artistic touch.</p>
            <h3>Tom Head</h3>
            <h4>Manager</h4>
          </div>
          <div className="feature-rate">
            <p>The app is incredibly easy to navigate. The results are nothing short of amazing, giving your photos a professional and artistic touch.</p>
            <h3>Tom Head</h3>
            <h4>Manager</h4>
          </div>
          <div className="feature-rate">
            <p>The app is incredibly easy to navigate. The results are nothing short of amazing, giving your photos a professional and artistic touch.</p>
            <h3>Tom Head</h3>
            <h4>Manager</h4>
          </div>
          <div className="feature-rate">
            <p>The app is incredibly easy to navigate. The results are nothing short of amazing, giving your photos a professional and artistic touch.</p>
            <h3>Tom Head</h3>
            <h4>Manager</h4>
          </div>
          <div className="feature-rate">
            <p>The app is incredibly easy to navigate. The results are nothing short of amazing, giving your photos a professional and artistic touch.</p>
            <h3>Tom Head</h3>
            <h4>Manager</h4>
          </div>
        </div>
      </section>

      <section className="pricing-section">
        <div className="pricing-container">
          <div className="pricing-header">
            <h1>Pick from our Pricing Plans</h1>
            <div className="toggle-buttons">
              <button id="monthly" className="toggle-btn active">Monthly</button>
              <button id="yearly" className="toggle-btn">Yearly</button>
            </div>
          </div>
          <div className="pricing-cards">
            <div className="pricing-card">
              <h2>Basic Plan</h2>
              <h3>$10<span>/month</span></h3>
              <ul>
                <li>Real-time preview and iteration</li>
                <li>High quality output limited</li>
                <li>Customization options</li>
              </ul>
              <button className="subscribe-btn">Subscribe Now</button>
            </div>
            <div className="pricing-card">
              <h2>Standard Plan</h2>
              <h3>$20<span>/month</span></h3>
              <ul>
                <li>Additional styles and effects</li>
                <li>Advanced customization options</li>
                <li>Download in high resolution</li>
              </ul>
              <button className="subscribe-btn">Subscribe Now</button>
            </div>
            <div className="pricing-card">
              <h2>Premium Plan</h2>
              <h3>$30<span>/month</span></h3>
              <ul>
                <li>Priority customer support</li>
                <li>Commercial use license</li>
                <li>Dedicated server resources</li>
              </ul>
              <button className="subscribe-btn">Subscribe Now</button>
            </div>
            <div className="pricing-card">
              <h2>Ultimate Plan</h2>
              <h3>$40<span>/month</span></h3>
              <ul>
                <li>Customizable API integration</li>
                <li>White labeling options</li>
                <li>Onsite training and support</li>
              </ul>
              <button className="subscribe-btn">Subscribe Now</button>
            </div>
            <div className="subscription-head">
              <h3>You can cancel this subscription anytime before 30 days.</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
