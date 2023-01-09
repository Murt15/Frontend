import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  const deleteHandler = (event) => {
    event.target.parentElement.remove();
  };
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("Updated");
  };
  const [expense, updatedExpense] = useState(props.amount);
  const expenseHandler = () => {
    updatedExpense(100);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <ExpenseDetails
        title={title}
        location={props.location}
        amount={expense}
      ></ExpenseDetails>
      <button onClick={clickHandler}>Change title</button>
      <button onClick={expenseHandler}>Change Expense</button>
    </Card>
  );
};

export default ExpenseItem;
