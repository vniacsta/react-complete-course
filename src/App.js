import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expensesList = [
    {
      title: 'Title 1',
      amount: '10',
      date: new Date(2023, 2, 20),
    },
    {
      title: 'Title 2',
      amount: '20',
      date: new Date(2023, 2, 22),
    },
    {
      title: 'Title 3',
      amount: '30',
      date: new Date(2023, 2, 23),
    },
  ];

  return (
    <div>
      <h1>Expenses List</h1>
      <Expenses items={expensesList} />
    </div>
  );
}

export default App;