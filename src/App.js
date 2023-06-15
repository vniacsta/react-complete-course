import { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const EXPENSES_LIST = [
  {
    id: 0,
    title: 'Title 0',
    amount: '1',
    date: new Date(2020, 11, 20),
  },
  {
    id: 1,
    title: 'Title 1',
    amount: '10',
    date: new Date(2020, 2, 20),
  },
  {
    id: 2,
    title: 'Title 2',
    amount: '20',
    date: new Date(2021, 6, 22),
  },
  {
    id: 3,
    title: 'Title 3',
    amount: '30',
    date: new Date(2022, 9, 23),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(EXPENSES_LIST);

  const addExpenseHandler = (newExpense) => {
    setExpenses(prev => {
      return [newExpense, ...prev];
    });
  };

  return (
    <div>
      <h1>Expenses List</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
