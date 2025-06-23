import { Link } from 'react-router-dom'
import Gallery from './Gallery'
import './Homepage.css'

function Homepage({ setCurrentPage }) {
  const submitForm = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
    e.target.reset();
  };

  const goToMenu = () => {
    setCurrentPage('menu');
  };

  return (
    <div className="homepage">
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Crust & Co.</h1>
          <p>Locally sourced ingredients. Traditional techniques. Pizza made with passion.</p>
          <button onClick={goToMenu} className='order-btn'>Order Now</button>
        </div>
      </section>
      
      <section id="about" className="about">
        <div className="about-container">
          <div className="about-content">
            <h2>Our Story</h2>
            <p>
              At Crust & Co., we believe that great pizza starts with great ingredients. 
              Founded in 2015, we've been dedicated to crafting authentic, artisanal pizzas 
              using traditional techniques passed down through generations.
            </p>
            <p>
              Our commitment to quality means we source only the finest local ingredients - 
              from farm-fresh vegetables to premium Italian cheeses. Every pizza is hand-tossed 
              and baked in our wood-fired oven, ensuring that perfect crispy crust and 
              smoky flavor that keeps our customers coming back.
            </p>
          </div>
          <div className="about-features">
            <div className="feature">
              <h3>🌱 Local Ingredients</h3>
              <p>We partner with local farms to bring you the freshest ingredients possible.</p>
            </div>
            <div className="feature">
              <h3>🔥 Wood-Fired Oven</h3>
              <p>Our authentic wood-fired oven creates the perfect crust with unmatched flavor.</p>
            </div>
            <div className="feature">
              <h3>👨‍🍳 Traditional Methods</h3>
              <p>Time-honored techniques meet modern innovation in every pizza we create.</p>
            </div>
          </div>
        </div>
      </section>

      <Gallery />

      <section id="contact" className="contact">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>
              Ready to experience the best pizza in town? We'd love to hear from you! 
              Whether you have questions about our menu, want to make a reservation, 
              or just want to say hello, don't hesitate to reach out.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <h4>📍 Location</h4>
                <p>Hunter College<br />695 Park Ave, New York, NY 10065</p>
              </div>
              <div className="contact-item">
                <h4>📞 Phone</h4>
                <p>(347)-123-4567</p>
              </div>
              <div className="contact-item">
                <h4>⏰ Hours</h4>
                <p>Mon-Thu: 11AM - 10PM<br />Fri-Sat: 11AM - 11PM<br />Sun: 12PM - 9PM</p>
              </div>
            </div>

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.7405689815014!2d-73.9670884802264!3d40.76773040990474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258eb899f0889%3A0xb5e90aa7d877ee1f!2sHunter%20College!5e0!3m2!1sen!2sus!4v1749673580209!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '15px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hunter College Location"
              ></iframe>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={submitForm}>
              <h3>Send us a Message</h3>
              
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage