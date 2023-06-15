import { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const addExpenseHandle = () => {
    setIsVisible(true);
  };

  const saveExpenseDataHandler = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString()
    }
    
    props.onAddExpense(expenseData);
    setIsVisible(false);
  };

  const cancelHandler = () => {
    setIsVisible(false);
  }

  return (
    <div className='new-expense'>
      {!isVisible && <button onClick={addExpenseHandle}>Add new expense</button>}
      {isVisible && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelHandler} />}
    </div>
  );
}

export default NewExpense;