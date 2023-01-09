import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpenses/NewExpense";
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "Mumbai",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      location: "Mumbai",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "Mumbai",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "Mumbai",
    },
  ];
  return (
    <div>
      <NewExpense />
      {expenses.map((exp) => {
        return (
          <ExpenseItem
            title={exp.title}
            amount={exp.amount}
            date={exp.date}
          ></ExpenseItem>
        );
      })}
    </div>
  );
};

export default App;
