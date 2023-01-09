import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  const deleteHandler = (event) => {
    console.log("deleted");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <ExpenseDetails
        title={props.title}
        location={props.location}
        amount={props.amount}
      ></ExpenseDetails>
      <button onClick={deleteHandler}>Delete</button>
    </Card>
  );
};

export default ExpenseItem;
