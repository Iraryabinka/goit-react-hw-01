import React from 'react';
import user from '../user.json';
import Profile from './Profile';
import Stats from './Stats';
import stats from '../stats.json';
import PricingPlan from './PricingPlan';
import items from '../pricing-plan.json';
import transactions from '../transactions.json';
import TransactionHistory from './TransactionHistory';

const App = () => (
  <div>
    <Profile user={user} />
    <Stats title="Upload stats" stats={stats} />
    <PricingPlan items={items} />
    <TransactionHistory items={transactions} />
  </div>
);

export default App;
