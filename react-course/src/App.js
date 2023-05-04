// import ExpenseItems from "./components/ExpenseItems";
import React, {useState} from "react"; // on older react project anywhere you will use jsx you have to import react on all files
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense' 

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

function App() {
  
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
  const [expense,setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense =>{
    // below will work but it is not the cleanest way to do it in React
    // because our data depends on the previus snapshot
    // setExpenses([expense, ...expenses])
    // #######################################
    // best way to do it
    // expense is the new expenses we are getting
    // ...expenses we pull out the existing items snapshot and include in the array
    //when you update your object depending on the previous state always use below
    // prevExpense is from react
    setExpenses(
      prevExpenses => {
        return  [expense, ...prevExpenses]
      }
    );
    // console.log('in app.js')
    // console.log(expense)
  };
  return (
    <div>
      {/* <h2>Let's get started!</h2> */}
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* expenseitems here is called components */}
      {/* the attributes are called props */}
      <Expenses items={expense} />
    </div>
  );
}

export default App;
