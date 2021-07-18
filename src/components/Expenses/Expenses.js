import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpenseFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterSelectedYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((x) => {
    return x.date.getFullYear() === parseInt(filteredYear);
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onSelectedYear={filterSelectedYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
