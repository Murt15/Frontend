function ExpenseDetails(props) {
  return (
    <div className="expense-item__description">
      <div>{props.location}</div>
      <h2>{props.title}</h2>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
}

export default ExpenseDetails;
