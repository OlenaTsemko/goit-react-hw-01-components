import React from 'react'; // - необязательно по-новому

import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import user from './components/Profile/user.json';
import statisticalData from './components/Statistics/statistical-data.json';
import friends from './components/FriendList/friends.json';
import transactions from './components/TransactionHistory/transactions.json';

import './App.scss';

function App() {
  return (
    <div className="App">
      <h1>React homework 1</h1>
      <h2>Task 1</h2>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h2>Task 2</h2>
      <Statistics title="Upload stats" stats={statisticalData} />
      <h2>Task 3</h2>
      <FriendList friends={friends} />
      <h2>Task 4</h2>
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
