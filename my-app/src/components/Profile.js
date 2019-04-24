import React from 'react';
import PropTypes from 'prop-types';
//import user from '../products.json';

const Profile = ({ user: { name, tag, location, avatar, stats } }) => (
  <div>
    <div>
      <img src={avatar} alt="user avatar" height={200} />
      <p>{name}</p>
      <p>{tag}</p>
      <p>{location}</p>
    </div>

    <ul>
      <li>
        <span>Followers </span>
        <span>{}</span>
      </li>
      <li>
        <span>Views </span>
        <span>{}</span>
      </li>
      <li>
        <span>Likes </span>
        <span>{}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  alt: 'product image',
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.number.isRequired,
};

export default Profile;
