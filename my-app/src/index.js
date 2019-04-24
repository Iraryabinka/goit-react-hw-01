import React from 'react';
import ReactDOM from 'react-dom';
import user from './products.json';
import Profile from './components/Profile';

ReactDOM.render(<Profile user={user} />, document.getElementById('root'));
