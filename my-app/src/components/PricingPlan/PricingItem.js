import React from 'react';
import PropTypes from 'prop-types';
import style from './Pricing.module.css';

const iconStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  marginLeft: '25px',
  height: '170px',
  width: '200px',
  background: 'no-repeat',
};

const PricingItem = ({ label, icon, capacity, price, description }) => (
  <div className={style.pricingitem}>
    <i style={{ ...iconStyle, backgroundImage: `url(${icon})` }} />
    <h2 className={style.label}>{label}</h2>
    <p className={style.capacity}>{capacity}</p>
    <p className={style.description}>{description}</p>
    <p className={style.price}>${price}/MO</p>
    <button className={style.button}>Get Started</button>
  </div>
);

PricingItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  capacity: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default PricingItem;
