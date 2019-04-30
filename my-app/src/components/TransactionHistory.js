import React from 'react';
import PropTypes from 'prop-types';

const TransactionHistory = items => (
  <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody />
  </table>
);

TransactionHistory.propTypes = {};

export default TransactionHistory;
