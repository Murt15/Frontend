import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2022, 10, 15);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 295.99;
  const location = "Mumbai";
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <div>{location}</div>
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
