import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: "Juhi Meshram",
    service: "Hair Spa",
    rating: 5,
    text: "The hair spa service was excellent. They gave proper time without any rush, and the head massage was very relaxing. All this at a very reasonable price. 💯 Thank u😊"
  },
  {
    name: "Zeal Khan",
    service: "Clean-up & Threading",
    rating: 5,
    text: "I liked the services done by Damini di❤️ clean-up threading smoothly done by her.. highly recommended"
  },
  {
    name: "Shivani Singh",
    service: "Makeup",
    rating: 5,
    text: "I liked the makeup very much, everything was very good, the make-up products were also very good, I would highly recommend you to go there"
  },
  {
    name: "Kashish Budhwani",
    service: "General Services",
    rating: 5,
    text: "Superb experience, nice products used and best timely services. Recommend to visit."
  },
  {
    name: "Pratiksha Naik",
    service: "Highlighting",
    rating: 5,
    text: "Really love her work..nd also she is very kind ...my first experience in highlighting my hairs is so worthy... thankyou so much Lakshmi ❤️❤️"
  },
  {
    name: "Renuka Raut",
    service: "Bridal Services",
    rating: 5,
    text: "She is simply good at her work....she made my wedding day more special... Thank you dear Laxmi..♥️"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="section-title">Loved by Our Clients</h2>
        <p className="section-subtitle">Real reviews from real people</p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="star-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-footer">
                <span className="client-name">{testimonial.name}</span>
                <span className="service-tag">{testimonial.service}</span>
              </div>
              <div className="quote-icon">"</div>
            </div>
          ))}
        </div>
        
        <div className="trust-indicators">
          <div className="trust-badge">
            <span className="badge-value">4.9/5</span>
            <span className="badge-label">Average Rating</span>
          </div>
          <div className="trust-badge">
            <span className="badge-value">50+</span>
            <span className="badge-label">Happy Clients</span>
          </div>
          <div className="trust-badge">
            <span className="badge-value">Verified</span>
            <span className="badge-label">Google Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
