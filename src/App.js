import ExpenseItem from './components/ExpenseItem';

export default function App() {
  const expenseList = [
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
      <ExpenseItem 
        title={expenseList[0].title}
        amount={expenseList[0].amount}
        date={expenseList[0].date}
      />
      <ExpenseItem 
        title={expenseList[1].title}
        amount={expenseList[1].amount}
        date={expenseList[1].date}
      />
      <ExpenseItem 
        title={expenseList[2].title}
        amount={expenseList[2].amount}
        date={expenseList[2].date}
      />
    </div>
  );
}
