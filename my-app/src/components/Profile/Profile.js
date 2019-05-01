import React from 'react';
import PropTypes from 'prop-types';
import style from './Profile.module.css';

const Profile = ({ user: { name, tag, location, avatar, stats } }) => (
  <div className={style.profile}>
    <div className={style.description}>
      <img className={style.avatar} src={avatar} alt="user avatar" />
      <p className={style.name}>{name}</p>
      <p className={style.tag}>{tag}</p>
      <p className={style.location}>{location}</p>
    </div>

    <ul className={style.stats}>
      <li className={style.licomp}>
        <span className={style.label}>Followers </span>
        <span className={style.quantity}>{stats.followers}</span>
      </li>
      <li className={style.licomp}>
        <span className={style.label}>Views </span>
        <span className={style.quantity}>{stats.views}</span>
      </li>
      <li className={style.licomp}>
        <span className={style.label}>Likes </span>
        <span className={style.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  alt: 'product image',
};

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
  }).isRequired,
};

export default Profile;
