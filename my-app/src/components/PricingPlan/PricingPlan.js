import React from 'react';
//import PropTypes from 'prop-types';
import style from './Pricing.module.css';
import PricingItem from './PricingItem';

const PricingPlan = ({ items = [] }) => (
  <div className={style.ulBackground}>
    <ul className={style.pricingPlan}>
      {items.map(item => (
        <li className={style.item} key={item.id}>
          <PricingItem {...item} />
        </li>
      ))}
    </ul>
  </div>
);

export default PricingPlan;
