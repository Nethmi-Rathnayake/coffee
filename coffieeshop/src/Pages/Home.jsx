import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Brew & Bean</h1>
          <p>Artisanal Coffee Crafted with Care</p>
          <Link to="/menu">
          <button className="cta-button">Explore Our Menu</button>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2>Our Specialties</h2>
        <div className="products-grid">
          <div className="product-card">
            <div className="product-image espresso"></div>
            <h3>Espresso</h3>
            <p>Rich and intense, our signature espresso blend</p>
          </div>
          <div className="product-card">
            <div className="product-image cappuccino"></div>
            <h3>Cappuccino</h3>
            <p>Perfectly balanced with creamy foam</p>
          </div>
          <div className="product-card">
            <div className="product-image cold-brew"></div>
            <h3>Cold Brew</h3>
            <p>Smooth and refreshing, brewed for 18 hours</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <h2>Our Story</h2>
          <p>
            Founded in 2010, Brew & Bean is dedicated to sourcing the finest coffee beans from sustainable farms around the world. 
            Our expert baristas craft each cup with precision and passion.
          </p>
          <button className="secondary-button">Learn More</button>
        </div>
        <div className="about-image"></div>
      </section>

      {/* Visit Us */}
      <section className="visit-us">
        <h2>Visit Our Shop</h2>
        <div className="location-info">
          <p>123 Coffee Lane, Beanville</p>
          <p>Open daily from 7am to 7pm</p>
          <button className="cta-button">Get Directions</button>
        </div>
      </section>
    </div>
  );
};

export default Home;