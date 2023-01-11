import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <ExpenseDetails title={title} amount={expense}></ExpenseDetails>
    </Card>
  );
};

export default ExpenseItem;
