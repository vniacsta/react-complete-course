import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
  if (props.expenses.length === 0) {
    return <p className='expenses-list__fallback'>Found no expenses.</p>;
  }

  return (
    <div className='expenses-list'>
      {props.expenses.map((el) => (
        <ExpenseItem
          key={el.id}
          title={el.title}
          amount={el.amount}
          date={el.date}
        />
      ))}
    </div>
  );
};

export default ExpensesList;
