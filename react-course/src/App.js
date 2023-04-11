// import ExpenseItems from "./components/ExpenseItems";
import React from "react"; // on older react project anywhere you will use jsx you have to import react on all files
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense' 
function App() {
  const expenses = [
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
  //##########################################
  // using the older react syntax without JSX
  // JSX transforms to below code then to JS
  //under the hood
  //##########################################
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, {items: expenses})
  // );
  //##########################################
  return (
  <div>
    {/* <h2>Let's get started!</h2> */}
    <NewExpense />
    {/* expenseitems here is called components */}
    {/* the attributes are called props */}
    <Expenses items={expenses} />
  </div>
  );
}

export default App;
