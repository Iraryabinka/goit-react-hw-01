import React from 'react';
import user from './Profile/user.json';
import Profile from './Profile/Profile';
import Stats from './Stats/Stats';
import stats from './Stats/stats.json';
import PricingPlan from './PricingPlan/PricingPlan';
import items from './PricingPlan/pricing-plan.json';
import transactions from './Transaction/transactions.json';
import TransactionHistory from './Transaction/TransactionHistory';

const App = () => (
  <div>
    <Profile user={user} />
    <Stats title="Upload stats" stats={stats} />
    <PricingPlan items={items} />
    <TransactionHistory items={transactions} />
  </div>
);

export default App;
