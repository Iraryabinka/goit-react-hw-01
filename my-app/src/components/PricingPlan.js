import React from 'react';
import PropTypes from 'prop-types';
//import pricingPlanItems from '../pricing-plan.json';

const PricingItem = ({
  pricingPlanItems: { label, icon, capacity, price, description },
}) => (
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
  label: PropTypes.string,
  icon: PropTypes.string,
  capacity: PropTypes.number,
  price: PropTypes.number,
  description: PropTypes.string,
};

export default PricingItem;
