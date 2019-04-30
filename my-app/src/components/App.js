import React from 'react';
import user from '../user.json';
import Profile from './Profile';
import Stats from './Stats';
import stats from '../stats.json';
import PricingItem from './PricingPlan';
import pricingPlanItems from '../pricing-plan.json';
import transactions from '../transactions.json';
import TransactionHistory from './TransactionHistory';

const App = () => (
  <div>
    <Profile user={user} />
    <Stats title="Upload stats" stats={stats} />
    <PricingItem items={pricingPlanItems} />
    <TransactionHistory items={transactions} />
  </div>
);

export default App;
