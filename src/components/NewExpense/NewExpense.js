import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isButton, setIsButton] = useState(true);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsButton(!isButton);
  };

  const handleAddNeExpense = () => {
    setIsButton(!isButton);
  };

  return (
    <div className="new-expense">
      {isButton ? (
        <button onClick={handleAddNeExpense}>Add New Expense</button>
      ) : (
        <ExpenseForm
          isButton={isButton}
          handleAddNeExpense={handleAddNeExpense}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
