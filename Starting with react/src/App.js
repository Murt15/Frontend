// Package Imports
import React from "react";
import { useState } from "react";

// Component Imports
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
// import ExpenseFilter from "./components/Expenses/ExpenseFilter";
// import ExpenseItem from "./components/Expenses/ExpenseItem";
// import Card from "./components/UI/Card";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  // const [filteredYear, setFilteredYear] = useState("2020");
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  //console.log(expenses);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // const filterChangeHandler = (selectedYear) => {
  //   setFilteredYear(selectedYear);
  // };

  // const filteredExpenses = expenses.filter((expense) => {
  //   return expense.date.getFullYear().toString() === filteredYear;
  // });
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      {/* <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChange={filterChangeHandler} />
        {filteredExpenses.map((e) => {
          return (
            <ExpenseItem
              key={e.id}
              title={e.title}
              amount={e.amount}
              date={e.date}
            />
          );
        })}
      </Card> */}
    </div>
  );
};

export default App;
