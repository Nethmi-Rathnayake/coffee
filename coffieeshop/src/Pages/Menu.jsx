import React, { useState } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');

  const menuItems = {
    coffee: [
      { name: 'Espresso', description: 'Rich and intense single shot', price: '$3.50' },
      { name: 'Americano', description: 'Espresso with hot water', price: '$4.00' },
      { name: 'Cappuccino', description: 'Espresso with steamed milk and foam', price: '$4.50' },
      { name: 'Latte', description: 'Espresso with more steamed milk and light foam', price: '$4.75' },
      { name: 'Mocha', description: 'Espresso with chocolate and steamed milk', price: '$5.00' },
      { name: 'Cold Brew', description: 'Slow-steeped for 18 hours', price: '$4.50' }
    ],
    tea: [
      { name: 'Earl Grey', description: 'Classic black tea with bergamot', price: '$3.50' },
      { name: 'Chamomile', description: 'Floral and calming herbal tea', price: '$3.50' },
      { name: 'Matcha Latte', description: 'Green tea powder with steamed milk', price: '$4.75' },
      { name: 'Chai Latte', description: 'Spiced tea with steamed milk', price: '$4.50' },
      { name: 'Iced Tea', description: 'Freshly brewed and chilled', price: '$3.75' }
    ],
    pastries: [
      { name: 'Croissant', description: 'Buttery and flaky', price: '$3.50' },
      { name: 'Blueberry Muffin', description: 'Fresh blueberries in every bite', price: '$3.75' },
      { name: 'Cinnamon Roll', description: 'Sweet with cream cheese frosting', price: '$4.25' },
      { name: 'Chocolate Chip Cookie', description: 'Classic and chewy', price: '$2.75' },
      { name: 'Avocado Toast', description: 'Sourdough with avocado and toppings', price: '$6.50' }
    ],
    specials: [
      { name: 'Seasonal Latte', description: 'Ask about our current seasonal flavor', price: '$5.25' },
      { name: 'Affogato', description: 'Espresso poured over vanilla gelato', price: '$6.00' },
      { name: 'Turkish Coffee', description: 'Traditional preparation', price: '$5.50' },
      { name: 'Barista Special', description: 'Our signature creation', price: '$5.75' }
    ]
  };

  return (
    <div className="menu-container">
      <section className="menu-header">
        <h1>Our Menu</h1>
        <p>All our drinks and food are made with high-quality ingredients</p>
      </section>

      <div className="menu-categories">
        <button 
          className={activeCategory === 'coffee' ? 'active' : ''}
          onClick={() => setActiveCategory('coffee')}
        >
          Coffee
        </button>
        <button 
          className={activeCategory === 'tea' ? 'active' : ''}
          onClick={() => setActiveCategory('tea')}
        >
          Tea
        </button>
        <button 
          className={activeCategory === 'pastries' ? 'active' : ''}
          onClick={() => setActiveCategory('pastries')}
        >
          Pastries
        </button>
        <button 
          className={activeCategory === 'specials' ? 'active' : ''}
          onClick={() => setActiveCategory('specials')}
        >
          Specials
        </button>
      </div>

      <div className="menu-items">
        {menuItems[activeCategory].map((item, index) => (
          <div key={index} className="menu-item">
            <div className="item-info">
              <h3>{item.name}</h3>
              <p className="item-description">{item.description}</p>
            </div>
            <p className="item-price">{item.price}</p>
          </div>
        ))}
      </div>

      <section className="menu-footer">
        <h2>Custom Orders</h2>
        <p>Have special dietary needs? Ask about our customization options!</p>
        <button className="contact-button">Contact Us</button>
      </section>
    </div>
  );
};

export default Menu;