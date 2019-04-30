import React from 'react';
import PropTypes from 'prop-types';

const PricingItem = ({ label, icon, capacity, price, description }) => (
  <div>
    <i>{icon}</i>
    <h2>{label}</h2>
    <p>{capacity}</p>
    <p>{description}</p>
    <p>${price}/MO</p>
    <button>Get Started</button>
  </div>
);

const PricingPlan = ({ items = [] }) => (
  <div>
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <PricingItem {...item} />
        </li>
      ))}
    </ul>
  </div>
);

PricingItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.string,
      capacity: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PricingPlan;
